import { h, Component, ComponentInterface, Prop, State, Element, Watch } from '@stencil/core';

export function toArray(a) {
  return a !== void 0 ? (Array.isArray(a) ? a : [a]) : [];
}
export function shallowEqual(a, b) {
  if (typeof a !== typeof b) return false;
  if (typeof a === 'string' || typeof a === 'number') return a === b;
  let i;
  for (i in a) if (!(i in b)) return false;
  for (i in b) if (a[i] !== b[i]) return false;
  return i === void 0 ? a === b : true;
}

const transitions = {
  ease: '.25,.1,.25,1',
  linear: '0,0,1,1',
  'ease-in': '.42,0,1,1',
  'ease-out': '0,0,.58,1',
  'ease-in-out': '.42,0,.58,1',
  bounce: '1,1.46,.26,.73',
  flick: '1,.55,.1,.98',
  woosh: '.06,.84,.76,.99',
};
@Component({
  tag: 'transition-group',
  shadow: false,
})
export class TransitionGroup implements ComponentInterface {
  @Element() el!: any;

  @Prop()
  items: any[];
  @Prop()
  wrapper: string = 'div';
  @Prop()
  wrapperProps: object = {};
  @Prop()
  keys: (item: any, index: number) => string | number;
  @Prop()
  class?: string;
  @Prop()
  mounted: boolean;
  @Prop()
  config: {
    duration: number;
    fromDuration?: number;
    leaveDuration?: number;
    timing:
      | string
      | 'ease'
      | 'linear'
      | 'ease-in'
      | 'ease-out'
      | 'ease-in-out'
      | 'bounce'
      | 'flick'
      | 'woosh';

    delay?: number;
  } = { duration: 350, timing: 'ease', delay: 0 };
  @Prop()
  from: { [key: string]: string };
  @Prop()
  enter: { [key: string]: string };
  @Prop()
  leave: { [key: string]: string };
  @Prop()
  trail: boolean;
  @Prop()
  renderFunction?: (style: { [key: string]: string }, loc: []) => any;

  @State()
  loc: [];
  isMounted: boolean;
  @State()
  newItemKey: number = null;
  @State()
  initialItems: any[] = [];
  @State()
  style: { [key: string]: string };
  @State()
  settingStyle: boolean = false;

  @Watch('mounted')
  mountWatch(newValue: boolean, oldValue: boolean) {
    // update style when
    // mount prop changes
    if (newValue !== oldValue) {
      this.isMounted = newValue;
      if (newValue === true) {
        this.setStyle(this.from, this.enter);
      }
      if (newValue === false) {
        this.setStyle(null, this.leave);
      }
    }
  }

  @Watch('items')
  itemsWatch(newValue: []) {
    if (newValue) {
      const oldKeys = this.getOldKeys();
      const newKeys = this.getNewKeys();
      
      // compare the keys
      if (newKeys && !shallowEqual(newKeys, oldKeys)) {
        console.log('diffkeys', this.wrapper, this.items, oldKeys, newKeys);
        this.settingStyle = true;
        if (this.isMounted) {
          this.style = { ...this.leave };
        } else {
          this.style = { ...this.from };
        }

        // this is the time to wait before
        // applying the enter transition
        // i.e we're waiting for
        // all the items to leave
        const timeout =
          this.config.duration - this.config.delay + this.config.delay * oldKeys.length;

        setTimeout(() => {
          this.initialItems = [...this.items];
          setTimeout(() => {
            if (this.mounted) {
              this.style = { ...this.enter };
            }
            this.settingStyle = false;
          }, 50);
        }, timeout);
      }
    }
  }
  getOldKeys = () => {
    return typeof this.keys === 'function'
      ? this.initialItems.map((item, index) => this.keys(item, index))
      : toArray(this.keys);
  };
  getNewKeys = () => {
    return typeof this.keys === 'function'
      ? this.items.map((item, index) => this.keys(item, index))
      : toArray(this.keys);
  };
  setStyle = (from, to, timeout = 0) => {
    if (this.settingStyle) return;
    this.settingStyle = true;
    this.style = { ...from };
    setTimeout(() => {
      this.style = { ...to };
      this.settingStyle = false;
    }, timeout);
  };
  componentWillLoad() {
    this.isMounted = false;
    this.settingStyle = true;

    this.style = { ...this.from };
    this.initialItems = (this.items && this.items.length) ? [...this.items] : [];
  }

  componentDidLoad() {
    setTimeout(() => {
      // I mean...
      if (this.mounted) this.style = { ...this.enter };
      this.isMounted = true;
      this.settingStyle = false;
    }, this.config.delay);
  }

  componentWillUnload() {
    setTimeout(() => {
      this.isMounted = null;
    }, this.config.duration);
  }

  getStyle = () => {
    const style = {
      transitionDuration: `${this.config.duration}ms`,
      transitionTimingFunction: transitions[this.config.timing]
        ? `cubic-bezier(${transitions[this.config.timing]})`
        : this.config.timing,
      ...this.style,
    };
    return style;
  };

  render() {
    return (
      <this.wrapper {...this.wrapperProps}>
        {this.initialItems.map((item, i) => {
          const style = this.getStyle();
          // this was for not delaying when
          // adding a single item
          // e.g to a todo list
          const shouldNotDelay = this.newItemKey === i;
          return (
            <div
              class={this.class}
              key={typeof this.keys === 'function' ? this.keys(item, i) : toArray(this.keys)[i]}
              style={{
                ...style,
                transitionDelay: shouldNotDelay ? '0ms' : `${this.config.delay * i}ms`,
                visibility: this.mounted ? 'visible' : 'hidden',
              }}
            >
              {typeof item === 'function'
                ? item(this.isMounted, style && this.config.delay * (i + 1))
                : item}
            </div>
          );
        })}
      </this.wrapper>
    );
  }
}
