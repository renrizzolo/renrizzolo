import {
  h,
  Component,
  Prop,
  State,
  ComponentInterface,
  Host,
} from "@stencil/core";

@Component({
  tag: "transition-mount-wrapper",
  styleUrl: "transition-mount-wrapper.css",
  shadow: false,
})
export class TransitionMountWrapper implements ComponentInterface {
  @Prop()
  styles: {} = {};
  @Prop()
  mounted: boolean;
  @State()
  isMounted: boolean;
  componentWillLoad() {
    this.isMounted = true;
  }
  render() {
    return (
      <Host>
        <div class="overlay" style={this.styles} />
        <slot />
      </Host>
    );
  }
}
