import { Component, Element, Prop, State, h } from "@stencil/core";

import lottie from "lottie-web";
import data from "../../icons/link.json";

let id = 0;

function uniqueId() {
  return `icon-${++id}`;
}

@Component({
  tag: "ui-button",
  styleUrl: "ui-button.css",
  shadow: false,
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
  button?: boolean;
  @Prop()
  external?: boolean;
  @Prop()
  icon?: object;
  @Prop()
  rel?: string;
  @Prop()
  iconPos?: string = "right";
  @Prop()
  iconClass?: string;

  @State()
  id: string;

  @Element()
  el: HTMLElement;

  componentWillLoad() {
    if (this.icon) {
      this.id = uniqueId();
    }
  }

  componentDidLoad() {
    if (this.icon) {
      const icon = this.el.querySelector(".icon");
      lottie
        .loadAnimation({
          name: this.id,
          container: icon,
          renderer: "svg",
          loop: false,
          autoplay: false,
          animationData: this.external ? data : this.icon,
        })
        .setSpeed(1.5);
    }
  }

  enter = () => {
    if (!this.icon) return;
    lottie.setDirection(1, this.id);
    lottie.play(this.id);
  };
  exit = () => {
    if (!this.icon) return;
    lottie.setDirection(-1, this.id);
    lottie.play(this.id);
  };

  render() {
    return this.clickHandler && !this.url && !this.href ? (
      <button
        onMouseEnter={this.enter}
        onMouseLeave={this.exit}
        class={`${this.button ? "button" : ""} ${this.class}`}
        onClick={this.clickHandler}
      >
        <slot></slot>
        {this.icon && (
          <span
            class={`icon ${this.iconClass} ${this.external && "link-icon"}`}
          />
        )}
      </button>
    ) : this.url ? (
      <stencil-route-link
        class={`${this.button ? "route-link-button" : ""} ${this.class}`}
        url={this.url}
        onClick={this.clickHandler}
        onMouseEnter={this.enter}
        onMouseLeave={this.exit}
      >
        {this.iconPos === "left" && this.icon && (
          <span
            class={`icon ${this.iconClass} ${this.external && "link-icon"}`}
          />
        )}
        <slot></slot>
        {this.iconPos === "right" && this.icon && (
          <span
            class={`icon ${this.iconClass} ${this.external && "link-icon"}`}
          />
        )}
      </stencil-route-link>
    ) : (
      <a
        onMouseEnter={this.enter}
        onMouseLeave={this.exit}
        class={`${this.button ? "button" : ""} ${this.class}`}
        href={this.href}
        onClick={this.clickHandler}
        target={this.external ? "_blank" : "_self"}
        rel={this.rel}
      >
        <slot></slot>
        {this.icon && (
          <span
            class={`icon ${this.iconClass} ${this.external && "link-icon"}`}
          />
        )}
      </a>
    );
  }
}
