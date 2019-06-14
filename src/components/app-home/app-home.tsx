import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <app-background>
          <renrizzolo-logo />
          <p class="intro-text">I'm a front-end developer living in Melbourne, Australia ✌🏼</p>
          <div class="wave" />
          <div class="wave" />
          <div class="wave" />

          <stencil-route-link url="/profile/ren">link</stencil-route-link>
          <div class="footer">
            <a href="https://twitter.com/ren_riz">twitter</a>&nbsp;
            <a href="https://github.com/renrizzolo">gitHub</a>
          </div>
        </app-background>
      </div>
    );
  }
}
