import { h, Component, ComponentInterface, Prop, State, Element, Watch } from '@stencil/core';

@Component({
  tag: 'transition-group',
  shadow: true,
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
  keys: string;
  @Prop()
  class?: string;
  @Prop()
  mounted: boolean;
  @Prop()
  config: {
    duration: number;
    fromDuration?: number;
    leaveDuration?: number;
    timing: string;
    delay?: number;
  } = { duration: 350, timing: 'ease', delay: 0 };
  @Prop()
  from: { [key: string]: string };
  @Prop()
  enter: { [key: string]: string };
  @Prop()
  leave: { [key: string]: string };
  @Prop()
  renderFunction?: (style: { [key: string]: string }, loc: []) => any;

  @State()
  loc: [];
  isMounted: boolean;
  newItemKey: number = null;
  initialItems: any[] = [];
  newStyle: { [key: string]: string };

  @Watch('mounted')
  mountWatch(newValue: boolean, oldValue: boolean) {
    console.log('mounted', newValue);

    if (newValue !== oldValue) {
      
      console.log('toggled mounted watch');
      this.isMounted = newValue;
    }
  }

  componentWillLoad() {
    this.isMounted = false;

    setTimeout(() => {
      console.log('mount on load');
      this.isMounted = true;
      
    }, this.config.duration);
    this.initialItems = this.items;
  }

  componentDidLoad() {

  }

  componentWillUpdate() {
    console.log(this.mounted);

    if (this.items.length > this.initialItems.length) {
      this.newStyle = { ...this.from };

      console.log('will update from');
      setTimeout(() => {
        this.newItemKey = this.items.length > 0 ? this.items.length - 1 : null;
        this.newStyle = { ...this.enter };
        this.el.forceUpdate();
      }, 50);
    } else if (this.items.length < this.initialItems.length) {
      console.log('will update leave');
      this.newItemKey = this.items.length > 0 ? this.items.length - 1 : null;

      // @todo - remove item animation
    }
    if (this.items !== this.initialItems) {
      console.log('will update change items');
      this.initialItems = [...this.items];
    }
  }

  componenetWillRender() {
    console.log('will render', this.newItemKey, this.items.length, this.initialItems.length);
    if (this.items.length < this.initialItems.length) {
      console.log('will update leave');
      this.newItemKey = this.items.length > 0 ? this.items.length - 1 : null;

      // @todo - remove item animation
    }
  }
  componentDidUpdate() {
    this.newItemKey = null;
  }

  componentWillUnload() {
    setTimeout(() => {
      console.log('unmount on will unload');
      this.isMounted = null;
    }, this.config.duration);
  }

  getStyle = (index: number) => {
    console.log('style', this.isMounted);
    
    let style = {};
    if (this.isMounted === null) {
      style = this.leave;
    }
    if (this.isMounted === true) {
      style = this.enter;
    }
    if (this.isMounted === false) {
      style = this.from;
    }
    console.log(this.isMounted, index, this.initialItems.length, this.items.length);

    // an item was added
    if (
      index === this.items.length - 1 &&
      this.items !== this.initialItems &&
      this.isMounted === true
    ) {
      console.log(index, 'index > this.items.length - 1');
      style = this.newStyle;
    }

    style = {
      transitionDuration: `${this.config.duration}ms`,
      transitionTimingFunction: this.config.timing,
      ...style,
    };
    return style;
  };

  render() {
    
    return (
      <this.wrapper {...this.wrapperProps}>
        {this.initialItems.map((item, i) => {
          const style = this.getStyle(i);
          console.group('render item');
          console.log(`${i} tg-applying ${JSON.stringify(style)}`);
          console.groupEnd();
          const shouldNotDelay = this.newItemKey === i;
          return (
            <div
              class={this.class}
              key={i}
              style={{
                ...style,
                transitionDelay: shouldNotDelay ? '0ms' : `${this.config.delay * (i + 1)}ms`,
                visibility: this.mounted ? 'visible' : 'hidden',
              }}
            >
              {item}
            </div>
          );
        })}
      </this.wrapper>
    );
  }
}
