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
      const published = projects
        .filter((project) => new Date(project.datePublished).getTime() < new Date().getTime())
        .sort(({ datePublished }, { datePublished: datePublishedB }) =>
        (new Date(datePublishedB).getTime() - new Date(datePublished).getTime()));

      this.project = published
        .filter((proj) => proj.slug === this.match.params.slug)[0];
      console.log(published)
      const index = this.project ? published

            .findIndex((proj) => proj.id === this.project.id) : null;
      console.log('imdex', index)
      this.next = index !== -1 ? published[index + 1] : null;
      this.prev = index !== -1 ? published[index - 1] : null;

      return this.project ? (
        <div class="app-page-project">
          <app-background>
            <app-wave class="wave--flipped" />

            <ui-container>
              <ui-button button icon={arrow} iconPos="left" url="/projects" class="flex-center link-back abs abs--top-left">
                Back
            </ui-button>
       {/*        {this.next && (
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
              )} */}
              {this.project ? (
                <div itemscope itemtype="http://schema.org/Article">
                  <h1 itemprop="name headline">{this.project.heading}</h1>
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
                          type="full-size"
                          next={this.next}
                          prev={this.prev}
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
      ) : <app-page-404 />;
    } else {
      return <app-page-404 />;
    }
  }
}
