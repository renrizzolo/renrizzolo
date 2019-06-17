import { Component, h, Prop, } from '@stencil/core';


@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.css',
  shadow: true,
})
export class UiButton {
  @Prop() 
  class?: string;
  @Prop()
  onClick?: (event: MouseEvent) => any;
  @Prop()
  href?: string;
  @Prop()
  url?: string;

  render() {
    return this.url ?
      (
        <stencil-route-link class={this.class} url={this.url} onClick={this.onClick}>
          <slot />
        </stencil-route-link>
      )
    : (
      <a class={this.class} href={this.href} onClick={this.onClick}>
       <slot/>
      </a>
    )
  }
}