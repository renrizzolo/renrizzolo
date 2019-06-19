import { Component, State, h, Event, EventEmitter } from '@stencil/core';
const sans =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol";

const themes = {
  //default
  florence: [
    { key: '--font-primary', value: `Helvetica, ${sans}` },

    { key: '--color-primary', value: '#f9c7c7' },
    { key: '--color-primary-transparent', value: '#ffd4c333' },
    { key: '--color-primary-light', value: '#fff7f3' },
    { key: '--color-secondary', value: 'tomato' },
    { key: '--color-secondary-light', value: 'tomato' },
    { key: '--color-g-1', value: '#36107e' },
    { key: '--color-g-2', value: '#1d1a2b' },
    { key: '--color-g-3', value: '#130b3c' },
    { key: '--color-g-4', value: '#261c57' },
    { key: '--color-logo', value: '#282828' },
  ],

  brune: [
    { key: '--font-primary', value: `Muli, ${sans}` },

    { key: '--color-primary', value: '#faa44f' },
    { key: '--color-primary-transparent', value: '#E8852233' },
    { key: '--color-primary-light', value: '#F7B147' },
    { key: '--color-secondary', value: '#A0351B' },
    { key: '--color-secondary-light', value: '#D8684B' },
    { key: '--color-g-1', value: '#51252A' },
    { key: '--color-g-2', value: '#7A3A42' },
    { key: '--color-g-3', value: '#51252A' },
    { key: '--color-g-4', value: '#7A3A42' },
    { key: '--color-logo', value: '#535353' },
  ],

  flatline: [
    { key: '--font-primary', value: `Roboto, ${sans}` },

    { key: '--color-primary', value: '#fceef0' },
    { key: '--color-primary-transparent', value: '#fceef033' },
    { key: '--color-primary-light', value: '#fceef0' },
    { key: '--color-secondary', value: '#273043' },
    { key: '--color-secondary-light', value: '#32446B' },
    { key: '--color-g-1', value: '#9197AE' },
    { key: '--color-g-2', value: '#787E96' },
    { key: '--color-g-3', value: '#9197AE' },
    { key: '--color-g-4', value: '#787E96' },
    { key: '--color-logo', value: '#8e8b8b' },
  ],
};

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @State()
  currentTheme: string = 'florence';
  @Event() themeUpdated: EventEmitter;

  changeTheme = (theme) => {
    const root = document.documentElement;
    themes[theme].forEach(({ key, value }) => {
      root.style.setProperty(key, value);
    });
    this.currentTheme = theme;
    // emit new theme so
    // SVG wave can compute
    // the new value
    this.themeUpdated.emit(themes[theme]);
  };
  componentDidLoad() {
    this.changeTheme('florence');
  }
  render() {
    return (
      <div>
        <main>
          <stencil-router>
            <stencil-route
              routeRender={({ history: { location } }) => (
                <div>
                  <stencil-route-redirect url="/" />

                  <route-transition
                    items={location}
                    keys={location.key}
                    config={{ duration: 600, timing: 'cubic-bezier(0.63, 1, 0.620, 1)' }}
                    from={{ opacity: '0', transform: 'translateY(5px) scale(1.05)' }}
                    enter={{ opacity: '1', transform: 'translateY(0px) scale(1)' }}
                    leave={{ opacity: '0', transform: 'translateY(15px) scale(1.05)' }}
                    renderFunction={(style, loc) => {
                      return (
                        <div>
                          <div
                            class="theme-buttons"
                            style={{ opacity: style.opacity, transition: style.transition }}
                          >
                            {Object.keys(themes).map((theme) => (
                              <ui-button
                                class={`link ${this.currentTheme === theme ? 'active' : ''}`}
                                onClick={() => this.changeTheme(theme)}
                              >
                                {theme}
                              </ui-button>
                            ))}
                            <svg
                              class="drip"
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              viewBox="0 0 30.4 50"
                            >
                              <path
                                d="M29.1,29.4L29.1,29.4c0,0-9.9-25.4-10.9-27.4s-3-2-3-2l0,0c0,0-2,0-3,2C11.3,3.9,2.4,26.6,1.4,29.1c0,0,0,0,0,0.1
	c0,0.1-0.1,0.2-0.1,0.2l0,0C0.6,31.1,0.2,33,0.2,35c0,8.3,6.7,15,15,15s15-6.7,15-15C30.2,33,29.8,31.1,29.1,29.4z M5.3,40.7
	c-4.1-6.3,0.1-12.9,0.1-12.9c0.6-1.1,2-1.2,2.6-0.3c0.4,0.6-1.2,3.5-1.5,6.4c-0.2,2.2,0.3,4,2,6.2C9.6,41.6,7,43.4,5.3,40.7z"
                              />
                            </svg>
                          </div>
                          <stencil-route-switch
                            location={loc ? { ...loc } : location}
                            scrollTopOffset={0}
                          >
                            <stencil-route
                              url="/"
                              component="app-home"
                              exact={true}
                              componentProps={{ styles: style }}
                            />
                            <stencil-route
                              url="/projects"
                              component="app-page-projects"
                              exact={true}
                              componentProps={{ styles: style }}
                            />
                            <stencil-route
                              componentProps={{ styles: style }}
                              routeRender={(_) => (
                                <transition-mount-wrapper mounted={true} styles={style}>
                                  <app-page-404 />
                                </transition-mount-wrapper>
                              )}
                            />
                          </stencil-route-switch>
                        </div>
                      );
                    }}
                  />
                </div>
              )}
            />
          </stencil-router>
        </main>
      </div>
    );
  }
}
