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

  @Watch('mounted')
  mountWatch(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue) {
      console.log('toggled mounted watch');
      this.isMounted = newValue;
      if (newValue === true) {
        console.log('nu is tru');
        this.style = { ...this.from };
        setTimeout(() => {
          this.style = { ...this.enter };
          // this.el.forceUpdate();
        }, 60);
      }
      if (newValue === false) {
        console.log('nu is false');
        setTimeout(() => {
          this.style = { ...this.leave };
          // this.el.forceUpdate();
        }, 60);
      }
    }
  }

  @Watch('items')
  itemsWatch(newValue: [], oldValue: []) {
    // this works for multiple in / out but not single
    // if (newValue && newValue.length >= 1) {

    // this works for single in / out
    // but can't toggle from > 1 to 1
    // I think I need to make a separate
    // component or at least a prop for
    // trail/single only
    if (newValue) {
      if (this.trail && newValue.length >= 1) {
        if (newValue && newValue !== oldValue) {
          console.log(this.wrapper, 'diff new items watch');
          console.log(oldValue, newValue);

          // this.isMounted = false;
          if (this.isMounted) {
            this.style = { ...this.leave };
          } else {
            this.style = { ...this.from };
          }

          setTimeout(() => {
            if (this.mounted) {
              this.style = { ...this.enter };
            }
            this.initialItems = [...this.items];
          }, this.config.duration + this.config.delay * 2);

          // this.el.forceUpdate();
        }
      }
    }
  }

  componentWillLoad() {
    this.isMounted = false;
    this.style = { ...this.from };
    this.initialItems = [...this.items];
  }

  componentDidLoad() {
    setTimeout(() => {
      console.log('mount on load');
      // this.style = { ...this.enter };

      this.isMounted = true;
    }, this.config.duration + this.config.delay * 2);
  }

  // componentWillUpdate() {
  //   console.log(this.mounted);

  //   if (this.items.length > this.initialItems.length) {
  //     this.newStyle = { ...this.from };

  //     console.log('will update from');
  //     setTimeout(() => {
  //       this.newItemKey = this.items.length > 0 ? this.items.length - 1 : null;
  //       this.newStyle = { ...this.enter };
  //       // this.el.forceUpdate();
  //     }, 50);
  //   } else if (this.items.length < this.initialItems.length) {
  //     console.log('will update leave');
  //     this.newItemKey = this.items.length > 0 ? this.items.length - 1 : null;

  //     // @todo - remove item animation
  //   }
  //   if (this.items !== this.initialItems) {
  //     console.log('will update change items');
  //     // this.initialItems = [...this.items];
  //   }
  // }

  // componenetWillRender() {
  //   console.log('will render', this.newItemKey, this.items.length, this.initialItems.length);
  //   if (this.items.length < this.initialItems.length) {
  //     console.log('will update leave');
  //     this.newItemKey = this.items.length > 0 ? this.items.length - 1 : null;

  //     // @todo - remove item animation
  //   }
  // }

  // componentDidUpdate() {
  //   this.newItemKey = null;
  // }

  componentWillUnload() {
    setTimeout(() => {
      console.log('unmount on will unload');
      this.isMounted = null;
    }, this.config.duration);
  }

  getStyle = () => {
    // console.log(this.isMounted, index, this.initialItems.length, this.items.length);

    // an item was added
    // if (
    //   index === this.items.length - 1 &&
    //   this.items !== this.initialItems &&
    //   this.isMounted === true
    // ) {
    //   console.log(index, 'index > this.items.length - 1');
    //   style = this.newStyle;
    // }

    const style = {
      transitionDuration: `${this.config.duration}ms`,
      transitionTimingFunction: this.config.timing,
      ...this.style,
    };
    return style;
  };

  render() {
    return (
      <this.wrapper {...this.wrapperProps}>
        {this.initialItems.map((item, i) => {
          const style = this.getStyle();
          console.log(`${this.wrapper} ${i} tg-applying`);
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
