import { Component, h, } from '@stencil/core';

@Component({
  tag: 'app-background',
  styleUrl: 'app-background.css',
  shadow: true,
})
export class AppBackground {
 
  render() {
    return (
      <div class="app-background">
        <slot />
      </div>
    );
  }
}
