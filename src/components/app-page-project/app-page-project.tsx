import { Component, Prop, State, h } from '@stencil/core';
import { projects } from '../app-page-projects/projects';
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
  @State()
  isMounted: boolean = false;

  componentDidLoad() {
    this.isMounted = true;
  }

  render() {
    console.log('this.isMounted', this.isMounted);
    console.log('this.styles', this.styles);

    if (this.match && this.match.params.slug) {
      const project = projects.filter((proj) => proj.slug === this.match.params.slug)[0];
      console.log(project);
      if (project) {
        return (
          <div class="app-page-project">
            <app-background>
              <app-wave class="wave--flipped" />

              <ui-container>
                <ui-button url="/projects" class="abs abs--top-left">
                  Back
                </ui-button>

                <h1>{project.heading}</h1>
                <project-item post={project} fullSize />
              </ui-container>
            </app-background>
          </div>
        );
      } else {
        return <app-page-404 />;
      }
    }
  }
}
