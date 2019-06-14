import { Component, h } from '@stencil/core';

@Component({
  tag: 'catch-404',
  styleUrl: 'catch-404.css',
  shadow: true,
})
export class catch404 {
  render() {
    return (
      <app-background>
        <h1>404</h1>
        <p>Sorry, that page wasn't found.</p>
      </app-background>
    );
  }
}
