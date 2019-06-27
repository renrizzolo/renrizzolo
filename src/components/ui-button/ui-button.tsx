import { Component, h, Prop } from '@stencil/core';
const externalIcon = (
  <svg
    class="link-icon"
    fill="currentColor"
    version="1.1"
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox="0 0 50 50"
  >
    <path
      d="M36.3,44.2c0,0.6-0.5,1-1,1H5.9c-0.6,0-1-0.5-1-1V14.9c0-0.6,0.5-1,1-1h19.5c1.1,0,2-0.9,2-2v0c0-1.1-0.9-2-2-2H5.9
	c-2.8,0-5,2.3-5,5v29.3c0,2.8,2.3,5,5,5h29.3c2.8,0,5-2.3,5-5V24.7c0-1.1-0.9-2-2-2h0c-1.1,0-2,0.9-2,2V44.2z"
    />
    <path
      d="M47.7,2.3c-0.4-0.4-1-0.6-1.5-0.6v0H30.6v0c-0.5,0-1.1,0.2-1.5,0.6c-0.8,0.8-0.8,2.2,0,3c0.4,0.4,1,0.6,1.5,0.6v0h10.5
	l-22,22c-0.8,0.8-0.8,2.2,0,3c0.8,0.8,2.2,0.8,3,0l22-22v10.5h0c0,0.5,0.2,1.1,0.6,1.5c0.8,0.8,2.2,0.8,3,0c0.4-0.4,0.6-1,0.6-1.5h0
	V3.8h0C48.3,3.2,48.1,2.7,47.7,2.3z"
    />
  </svg>
);

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.css',
  shadow: true,
})
export class UiButton {
  @Prop()
  class?: string;
  @Prop()
  clickHandler?: (event: MouseEvent) => any;
  @Prop()
  href?: string;
  @Prop()
  url?: string;
  @Prop()
  external?: boolean;

  render() {
    return this.url ? (
      <stencil-route-link class={this.class} url={this.url} onClick={this.clickHandler}>
        <slot />
        {this.external && externalIcon}
      </stencil-route-link>
    ) : (
      <a
        class={this.class}
        href={this.href}
        onClick={this.clickHandler}
        target={this.external ? '_blank' : '_self'}
      >
        <slot />
        {this.external && externalIcon}
      </a>
    );
  }
}
