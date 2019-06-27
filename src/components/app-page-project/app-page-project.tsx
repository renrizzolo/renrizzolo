import { Component, Prop, State, h } from '@stencil/core';
import { projects, Project } from '../app-page-projects/projects';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-page-project',
  styleUrl: 'app-page-project.css',
  shadow: true,
})
export class AppPageProject {
  @Prop()
  styles?: { [key: string]: string };
  @Prop()
  match: MatchResults;
  @Prop()
  mounted: boolean;
  @State()
  isMounted: boolean = false;
  @State()
  project: any;
  @State()
  next: Project;
  @State()
  prev: Project;

  componentDidLoad() {
    this.isMounted = true;
  }
  // @Watch('match')
  // watchMatch(oldVal, newVal) {
  //   console.log('match change', newVal);
  //   if (oldVal !== newVal) {
  //     this.project = projects.filter((proj) => proj.slug === newVal.params.slug)[0];
  //     this.next = projects.filter((proj) => proj.id === this.project.id + 1)[0];
  //   }
  // }
  // componentDidRender() {
  //   console.log('will update match', this.match);
  // }
  render() {
    if (this.match && this.match.params.slug) {
      this.project = projects.filter((proj) => proj.slug === this.match.params.slug)[0];
      this.next = this.project
        ? projects.filter((proj) => proj.id === this.project.id + 1)[0]
        : null;
      this.prev = this.project
        ? projects.filter((proj) => proj.id === this.project.id - 1)[0]
        : null;

      return (
        <div class="app-page-project">
          <app-background>
            <app-wave class="wave--flipped" />

            <ui-container>
              <ui-button url="/projects" class="abs abs--top-left">
                Back
              </ui-button>
              {this.next && (
                <ui-button
                  url={`/project/${this.next.slug}`}
                  class="link-next color--alt abs abs--right abs--middle flex-center"
                >
                  <svg
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 50 50"
                    style={{ width: '18', height: '18' }}
                  >
                    <path
                      d="M48,25c0-0.6-0.2-1.1-0.6-1.4l0,0L37,13.3l0,0c-0.4-0.4-0.9-0.6-1.4-0.6c-1.1,0-2,0.9-2,2c0,0.6,0.2,1.1,0.6,1.4l0,0
	l6.9,6.9H4c-1.1,0-2,0.9-2,2s0.9,2,2,2h37.2l-6.9,6.9l0,0c-0.4,0.4-0.6,0.9-0.6,1.4c0,1.1,0.9,2,2,2c0.6,0,1.1-0.2,1.4-0.6l0,0
	l10.3-10.3l0,0C47.8,26.1,48,25.6,48,25z"
                      fill="currentColor"
                    />
                  </svg>
                </ui-button>
              )}
              {this.prev && (
                <ui-button
                  url={`/project/${this.prev.slug}`}
                  class="link-prev color--alt abs abs--left  abs--middle flex-center"
                >
                  <svg
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 50 50"
                    style={{ width: '18', height: '18', transform: 'rotate(180deg)' }}
                  >
                    <path
                      d="M48,25c0-0.6-0.2-1.1-0.6-1.4l0,0L37,13.3l0,0c-0.4-0.4-0.9-0.6-1.4-0.6c-1.1,0-2,0.9-2,2c0,0.6,0.2,1.1,0.6,1.4l0,0
	l6.9,6.9H4c-1.1,0-2,0.9-2,2s0.9,2,2,2h37.2l-6.9,6.9l0,0c-0.4,0.4-0.6,0.9-0.6,1.4c0,1.1,0.9,2,2,2c0.6,0,1.1-0.2,1.4-0.6l0,0
	l10.3-10.3l0,0C47.8,26.1,48,25.6,48,25z"
                      fill="currentColor"
                    />
                  </svg>
                </ui-button>
              )}
              {this.project ? (
                <transition-group
                  from={{ opacity: '0' }}
                  enter={{ opacity: '1' }}
                  leave={{ opacity: '0' }}
                  config={{ duration: 500, delay: 200, timing: 'ease-in' }}
                  mounted={true}
                  keys={(item) =>  (item.$ ? item.$.key : item.h ? item.h.key : item.$key$)}
                  items={[(mounted, delay) => <project-item key={this.project.id} post={this.project} fullSize mounted={mounted} delay={delay} />]}
                />
              ) : (
                <h1>
                  <code>404: not found.</code>
                </h1>
              )}
            </ui-container>
          </app-background>
        </div>
      );
    } else {
      return <app-page-404 />;
    }
  }
}
