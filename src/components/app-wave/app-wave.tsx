import { Component, h, Prop, Element, State, Listen } from '@stencil/core';

@Component({
  tag: 'app-wave',
  styleUrl: 'app-wave.css',
  shadow: false,
})
export class AppWave {
  @Prop() class: string;
  @State() fillColor: string;
  @Element() el!: HTMLElement;
  @Listen('themeUpdated', { target: 'window' })
  themeUpdated(event: CustomEvent) {
    console.log('Received the custom todoCompleted event: ', event.detail);
    this.updateFillColor();
  }
  updateFillColor() {
    this.fillColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-secondary')
      .replace('#', '%23');
  }
  componentDidLoad() {
    // thank u svg for being sandboxed 😏
    this.updateFillColor();
  }
  render() {
    console.log('waverenders');

    return (
      <div>
        <Wave class={this.class} fillColor={this.fillColor} />
        <Wave class={this.class} fillColor={this.fillColor} />
        <Wave class={this.class} fillColor={this.fillColor} />
      </div>
    );
  }
}
const Wave = (props) => (
  <div
    class={`wave ${props.class}`}
    style={{
      backgroundImage: `url(\"data:image/svg+xml;utf8,<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 300 100' style='enable-background:new 0 0 300 100;' xml:space='preserve'><path fill='${
        props.fillColor
      }' d='M0,100l0-42c0,0,63-22,117-13c47.2,7.9,99.8,32.8,144.5,23.5C288,63,300,58,300,58l0,42H0z'/></svg>\")`,
    }}
  />
);
