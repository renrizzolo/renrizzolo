import { Component, Prop, State, h } from '@stencil/core';
import { projects, Project } from '../app-page-projects/projects';
import { MatchResults } from '@stencil/router';
import arrow from '../../icons/arrow.json';

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
      this.project = projects.sort(({ id }, { id: idb }) => (id < idb ? 1 : -1)).filter((proj) => proj.slug === this.match.params.slug)[0];
      const index = projects.findIndex((proj) => proj.id === this.project.id);

      this.next = index !== -1 ? projects[index + 1] : null;
      this.prev = index !== -1 ? projects[index - 1] : null;

      return (
        <div class="app-page-project">
          <app-background>
            <app-wave class="wave--flipped" />

            <ui-container>
              <ui-button url="/projects" button class="abs abs--top-left">
                Back
              </ui-button>
              {this.next && (
                <ui-button
                  button
                  icon={arrow}
                  url={`/project/${this.next.slug}`}
                  class="link-next color--alt abs abs--right abs--middle flex-center"
                />
              )}
              {this.prev && (
                <ui-button
                  button
                  icon={arrow}
                  url={`/project/${this.prev.slug}`}
                  class="link-prev color--alt abs abs--left  abs--middle flex-center"
                />
              )}
              {this.project ? (
                <div>
                  <h1>{this.project.heading}</h1>
                  <h3>{this.project.subHeading}</h3>

                  <transition-group
                    from={{ opacity: '0' }}
                    enter={{ opacity: '1' }}
                    leave={{ opacity: '0' }}
                    config={{ duration: 500, delay: 200, timing: 'ease-in' }}
                    mounted={true}
                    keys={(item) => (item.$ ? item.$.key : item.h ? item.h.key : item.$key$)}
                    items={[
                      (mounted, delay) => (
                        <project-item
                          key={this.project.id}
                          post={this.project}
                          fullSize
                          mounted={mounted}
                          delay={delay}
                        />
                      ),
                    ]}
                  />
                </div>
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
