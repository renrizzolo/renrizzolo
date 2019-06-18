import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
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
                    from={{ opacity: '0', transform: 'translateY(15px) scale(1.05)' }}
                    enter={{ opacity: '1', transform: 'translateY(0px) scale(1)' }}
                    leave={{ opacity: '0', transform: 'translateY(15px) scale(1.05)' }}
                    renderFunction={(style, loc) => {
                      return (
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
