import { Component, State, h, Event, EventEmitter, Element, Host } from '@stencil/core';
import { themes } from './themes';

const transitionConfig = {
  config: {
    duration: 600,
    timing: 'cubic-bezier(0.21, 0.88, 0.57, 0.95)',
    delay: 50,
  },
  from: { opacity: '0', transform: 'translateY(-3%)' },
  enter: { opacity: '1', transform: 'translateY(0px)' },
  leave: { opacity: '0', transform: 'translateY(2%)' },
};

const projectTransitionConfig = {
  config: {
    duration: 600,
    timing: 'cubic-bezier(0.21, 0.88, 0.57, 0.95)',
    delay: 50,
  },
  from: { opacity: '0', transform: 'translateX(-3%)' },
  enter: { opacity: '1', transform: 'translateX(0px)' },
  leave: { opacity: '0', transform: 'translateX(2%)' },
};

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @State()
  currentTheme: string = 'florence';
  @State()
  play: boolean = false;
  @Event() themeUpdated: EventEmitter;
  @Element() el!: HTMLElement;

  changeTheme = (theme) => {
    const root = document.documentElement;
    themes[theme].forEach(({ key, value }) => {
      root.style.setProperty(key, value);
    });
    localStorage.setItem('theme', theme);
    this.currentTheme = theme;
    // emit new theme event so
    // SVG wave can compute
    // the new value
    this.themeUpdated.emit(themes[theme]);
  };
  componentDidLoad() {
    this.changeTheme(localStorage.getItem('theme') || 'florence');
  }
  toolBarEnter = () => {
    this.play = true;
    console.log('play = true', this.play);
  };
  toolBarLeave = () => {
    this.play = false;
    console.log('play = false', this.play);
  };
  render() {
    return (
      <Host>
        <div>
          <main>
            <stencil-router>
              <stencil-route
                routeRender={({ history: { location } }) => (
                  <route-transition
                    items={location}
                    keys={location.key}
                    config={{ duration: 850, timing: 'cubic-bezier(0.21, 0.88, 0.57, 0.95)' }}
                    from={{ opacity: '1', transform: 'translateY(0%)' }}
                    enter={{ opacity: '1', transform: 'translateY(-100%)' }}
                    leave={{ opacity: '1', transform: 'translateY(0%)' }}
                    renderFunction={(style, loc, lastEvent) => {
                      console.log('lastEvent', lastEvent);

                      return (
                        <div class={lastEvent !== 'enter' ? 'hide-overflow' : ''}>
                          <div
                            onMouseEnter={this.toolBarEnter}
                            onMouseLeave={this.toolBarLeave}
                            class="theme-buttons"
                            style={{ opacity: lastEvent === 'pageEntered' ? '1' : '0' }}
                          >
                            {Object.keys(themes).map((theme) => (
                              <ui-button
                                class={`link ${this.currentTheme === theme ? 'active' : ''}`}
                                clickHandler={() => this.changeTheme(theme)}
                              >
                                {theme}
                              </ui-button>
                            ))}
                            <drip-icon play={this.play} />

                            {/* <svg
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
                          </svg> */}
                          </div>
                          <stencil-route-switch
                            location={loc ? { ...loc } : location}
                            scrollTopOffset={0}
                          >
                            <stencil-route
                              url="/"
                              component="app-home"
                              exact={true}
                              componentProps={{ styles: {} }}
                              routeRender={(props) => (
                                <transition-mount-wrapper mounted={true} styles={style}>
                                  <transition-group
                                    {...transitionConfig}
                                    mounted={
                                      lastEvent === 'pageEntered' &&
                                      props.history.location.key === loc.key
                                    }
                                    items={[<app-home />]}
                                  />
                                </transition-mount-wrapper>
                              )}
                            />
                            <stencil-route
                              url="/projects"
                              component="app-page-projects"
                              exact={false}
                              componentProps={{ styles: {} }}
                              routeRender={(props) => (
                                <transition-mount-wrapper mounted={true} styles={style}>
                                  <transition-group
                                    wrapperProps={{ id: '/projects' }}
                                    {...transitionConfig}
                                    mounted={
                                      lastEvent === 'pageEntered' &&
                                      props.history.location.key === loc.key
                                    }
                                    items={[<app-page-projects />]}
                                  />
                                </transition-mount-wrapper>
                              )}
                            />
                            <stencil-route
                              url="/project/:slug"
                              component="app-page-project"
                              componentProps={{ styles: {} }}
                              routeRender={(props) => {
                                const match = { ...props.match };

                                return (
                                  <transition-mount-wrapper mounted={true} styles={style}>
                                    <transition-group
                                      {...projectTransitionConfig}
                                      mounted={
                                        lastEvent === 'pageEntered' &&
                                        props.history.location.key === loc.key
                                      }
                                      wrapperProps={{ id: `/project/${match.params.slug}` }}
                                      keys={(item) =>
                                        item.$ ? item.$.key : item.h ? item.h.key : item.$key$
                                      }
                                      items={
                                        props.history.location.key === loc.key
                                          ? [
                                              <app-page-project
                                                match={match}
                                                key={match.params.slug}
                                                mounted={props.history.location.key === loc.key}
                                              />,
                                            ]
                                          : []
                                      }
                                    />
                                  </transition-mount-wrapper>
                                );
                              }}
                            />
                            <stencil-route
                              componentProps={{ styles: {} }}
                              routeRender={(props) => (
                                <transition-mount-wrapper mounted={true} styles={style}>
                                  <transition-group
                                    {...transitionConfig}
                                    mounted={
                                      lastEvent === 'pageEntered' &&
                                      props.history.location.key === loc.key
                                    }
                                    items={[<app-page-404 />]}
                                  />
                                </transition-mount-wrapper>
                              )}
                            />
                          </stencil-route-switch>
                        </div>
                      );
                    }}
                  />
                )}
              />
            </stencil-router>
          </main>
        </div>
      </Host>
    );
  }
}
