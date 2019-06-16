import { Component, h, Prop, } from '@stencil/core';


@Component({
  tag: 'app-wave',
  styleUrl: 'app-wave.css',
  shadow: true,
})
export class AppWave {
  @Prop() class: string;

  render () {
    return (
      <div>
      <div class={`wave ${this.class}`} />
      <div class={`wave ${this.class}`} />

      <div class={`wave ${this.class}`} />
      </div>
    ) 
  }
}