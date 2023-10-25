import { Component, h, Prop, ComponentInterface } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
  shadow: true,
})
export class AppHome implements ComponentInterface {
  @Prop() styles?: { [key: string]: string };

  render() {
    return (
      <div style={this.styles}>
        <app-wave />
        <img
          class="ren-bg"
          src="assets/renrizzolo-profile--1200px.jpg"
          srcset="
            assets/renrizzolo-profile--450px.jpg 450w,
            assets/renrizzolo-profile--800px.jpg 800w,
            assets/renrizzolo-profile--1200px.jpg 1200w"
          sizes="
            (min-width: 1200px) 1200px,
            (min-width: 650px) 800px,
            450px
          "
          alt="Ren Rizzolo profile"
        />
        <app-background>
          <div class="centered">
            <header class="centered">
              <renrizzolo-logo />
              <div class="intro-text">
                <p>
                  I'm a front-end developer based in Melbourne, Australia ✌️
                </p>

                <div
                  class="hero-nav"
                  role="navigation"
                  itemscope
                  itemtype="http://www.schema.org/SiteNavigationElement"
                >
                  <ui-button button class="button-large" url="/projects">
                    Projects
                  </ui-button>
                  <ui-button button class="button-large" href="/blog">
                    Blog
                  </ui-button>
                  <ui-button
                    button
                    class="button-large"
                    href="https://www.linkedin.com/in/ren-rizzolo"
                    rel="noopener noreferrer"
                    external
                  >
                    ✨ Hire Me
                  </ui-button>
                </div>
              </div>
            </header>

            <div class="footer">
              <ui-button
                button
                href="mailto:info@renrizzolo.com"
                rel="noopener noreferrer"
                external
              >
                Email
              </ui-button>
              &nbsp;
              <ui-button
                button
                href="https://twitter.com/ren_riz"
                rel="noopener noreferrer"
                external
              >
                Twitter
              </ui-button>
              &nbsp;
              <ui-button
                button
                href="https://github.com/renrizzolo"
                rel="noopener noreferrer"
                external
              >
                GitHub
              </ui-button>
            </div>
          </div>
        </app-background>
      </div>
    );
  }
}
