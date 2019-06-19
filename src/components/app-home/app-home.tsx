import { Component, h, Prop, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome implements ComponentInterface {
  @Prop() styles?: { [key: string]: string };

  render() {
    return (
      <div style={this.styles}>
        <app-wave />
        <img class="ren-bg" src="assets/renrizzolo-profile-c.jpg" />
        <app-background>
          <div class="centered">
            <renrizzolo-logo />
            <div class="intro-text">
              <p>I'm a front-end developer from Melbourne, Australia ✌️</p>
              <ui-button url="/projects">Projects</ui-button>
            </div>

            <div class="footer">
              <ui-button href="https://twitter.com/ren_riz">Twitter</ui-button>&nbsp;
              <ui-button href="https://github.com/renrizzolo">GitHub</ui-button>
            </div>
          </div>
        </app-background>
      </div>
    );
  }
}
