import { Component, h } from '@stencil/core';

@Component({
  tag: 'renrizzolo-logo',
  styleUrl: 'renrizzolo-logo.css',
  shadow: false,
})
export class RenrizzoloLogo {
  render() {
    return (
      <div>
        <h1>Ren Rizzolo</h1>
      </div>
    );
  }
}
