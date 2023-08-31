import {
  Component,
  State,
  h,
  Event,
  EventEmitter,
  Element,
  Host,
} from "@stencil/core";
import { themes } from "./themes";

const transitionConfig = {
  config: {
    duration: 600,
    timing: "cubic-bezier(0.21, 0.88, 0.57, 0.95)",
    delay: 50,
  },
  from: { opacity: "0", transform: "translateY(-3%)" },
  enter: { opacity: "1", transform: "translateY(0px)" },
  leave: { opacity: "0", transform: "translateY(2%)" },
};

const projectTransitionConfig = {
  config: {
    duration: 600,
    timing: "cubic-bezier(0.21, 0.88, 0.57, 0.95)",
    delay: 50,
  },
  from: { opacity: "0", transform: "translateX(-3%)" },
  enter: { opacity: "1", transform: "translateX(0px)" },
  leave: { opacity: "0", transform: "translateX(2%)" },
};

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true,
})
export class AppRoot {
  @State()
  currentTheme: string = "florence";
  @State()
  play: boolean = false;
  @Event() themeUpdated: EventEmitter;
  @Element() el!: HTMLElement;

  changeTheme = (theme: keyof typeof themes) => {
    const root = document.documentElement;
    // set the theme meta colour
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute?.(
        "color",
        themes[theme].find(({ key }) => key === "--color-secondary").value
      );
    themes[theme].forEach(({ key, value }) => {
      root.style.setProperty(key, value);
    });

    localStorage.setItem("theme", theme);
    this.currentTheme = theme;
    // emit new theme event so
    // SVG wave can compute
    // the new value
    this.themeUpdated.emit(themes[theme]);
  };

  componentWillLoad() {
    this.changeTheme(
      (localStorage.getItem("theme") as keyof typeof themes) || "florence"
    );
  }

  toolBarEnter = () => {
    this.play = true;
  };

  toolBarLeave = () => {
    this.play = false;
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
                    config={{
                      duration: 850,
                      timing: "cubic-bezier(0.21, 0.88, 0.57, 0.95)",
                    }}
                    from={{ opacity: "1", transform: "translateY(0%)" }}
                    enter={{ opacity: "1", transform: "translateY(-100%)" }}
                    leave={{ opacity: "1", transform: "translateY(0%)" }}
                    renderFunction={(style, loc, lastEvent) => {
                      console.log("lastEvent", lastEvent);

                      return (
                        <div
                          class={lastEvent !== "enter" ? "hide-overflow" : ""}
                        >
                          <div
                            onMouseEnter={this.toolBarEnter}
                            onMouseLeave={this.toolBarLeave}
                            class="theme-buttons"
                            style={{
                              opacity: lastEvent === "pageEntered" ? "1" : "0",
                            }}
                          >
                            {(
                              Object.keys(themes) as (keyof typeof themes)[]
                            ).map((theme) => (
                              <ui-button
                                class={`link ${
                                  this.currentTheme === theme ? "active" : ""
                                }`}
                                clickHandler={() => this.changeTheme(theme)}
                              >
                                {theme}
                              </ui-button>
                            ))}
                            <drip-icon play={this.play} />
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
                                <transition-mount-wrapper
                                  mounted={true}
                                  styles={style}
                                >
                                  <transition-group
                                    {...transitionConfig}
                                    mounted={
                                      lastEvent === "pageEntered" &&
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
                                <transition-mount-wrapper
                                  mounted={true}
                                  styles={style}
                                >
                                  <transition-group
                                    wrapperProps={{ id: "/projects" }}
                                    {...transitionConfig}
                                    mounted={
                                      lastEvent === "pageEntered" &&
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
                                  <transition-mount-wrapper
                                    mounted={true}
                                    styles={style}
                                  >
                                    <transition-group
                                      {...projectTransitionConfig}
                                      mounted={
                                        lastEvent === "pageEntered" &&
                                        props.history.location.key === loc.key
                                      }
                                      wrapperProps={{
                                        id: `/project/${match.params.slug}`,
                                      }}
                                      keys={(item) =>
                                        item.$
                                          ? item.$.key
                                          : item.h
                                          ? item.h.key
                                          : item.$key$
                                      }
                                      items={
                                        props.history.location.key === loc.key
                                          ? [
                                              <app-page-project
                                                match={match}
                                                key={match.params.slug}
                                                mounted={
                                                  props.history.location.key ===
                                                  loc.key
                                                }
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
                              url="/blogtest"
                              component="blog-redirect"
                            />

                            <stencil-route
                              componentProps={{ styles: {} }}
                              routeRender={(props) => (
                                <transition-mount-wrapper
                                  mounted={true}
                                  styles={style}
                                >
                                  <transition-group
                                    {...transitionConfig}
                                    mounted={
                                      lastEvent === "pageEntered" &&
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
