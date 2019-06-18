import { h, Component, Prop, State, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'transition-mount-wrapper',
  shadow: true,
})
export class TransitionMountWrapper implements ComponentInterface {
  @Prop()
  styles: {} = {};
  @Prop()
  mounted: boolean;
  @State()
  isMounted: boolean;
  componentDidLoad() {
    this.isMounted = true;
  }
  render() {
    return (
      <div style={this.styles}>
        <slot />
      </div>
    );
  }
}
