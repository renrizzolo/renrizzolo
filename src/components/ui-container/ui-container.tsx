import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'ui-container',
  styleUrl: 'ui-container.css',
  shadow: false,
})
export class UiContainer {
  @Prop()
  class?: string;

  render() {
    return (
      <Host class={this.class}>
        <slot />
      </Host>
    );
  }
}
