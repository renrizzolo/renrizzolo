import { Component, h, Element, State, Watch } from '@stencil/core';

@Component({
  tag: 'app-background',
  styleUrl: 'app-background.css',
  shadow: true,
})
export class AppBackground {
  bgPositions: Array<string>;
  timer: number;

  @State() bg: string;

  @Element() backgroundEl: HTMLElement;
  private bgEl: HTMLElement;

  componentDidLoad() {
    this.bgEl = this.backgroundEl.shadowRoot.querySelector('.app-background');

    this.bgPositions = ['0% 0%', '50% 50%', '100% 50%', '100% 0%'];
    let count = 0;
    let direction = 'forwards';
    this.bg = this.bgPositions[0];
    this.timer = window.setInterval(() => {
      console.log(count, this.bgPositions.length - 1, direction);
      if (count === this.bgPositions.length - 1) {
        direction = 'backwards';
      } else if (count === 0) {
        direction = 'forwards';
      }
      if (direction === 'forwards') {
        count++;
      } else {
        count--;
      }

      this.bg = this.bgPositions[count];
    }, 1600);
  }

  componentDidUnload() {
    window.clearInterval(this.timer);
  }

  logColor() {
    console.log(this.bg);
  }

  @Watch('bg')
  watchHandler(newValue: string, oldValue: string) {
    console.log('The old value of bg is: ', oldValue);
    console.log('The new value of bg is: ', newValue);
    this.bgEl.style.backgroundPosition = oldValue;
  }

  componentDidRender() {
    // this.bgEl.style.backgroundPosition = this.bg;
  }
  render() {
    return (
      <div class="app-background">
        <slot />
      </div>
    );
  }
}
