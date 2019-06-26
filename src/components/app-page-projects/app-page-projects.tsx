import { Component, Prop, State, h } from '@stencil/core';
import { projects, Project } from './projects';

@Component({
  tag: 'app-page-projects',
  styleUrl: 'app-page-projects.css',
  shadow: true,
})
export class AppPageProjects {
  @Prop()
  styles?: { [key: string]: string };
  mounted: boolean;

  @State()
  isMounted: boolean = false;
  @State()
  items: Project[] = [...projects];
  @State()
  filteredBy: string = '';
  @State()
  tags: string[] = [];

  componentWillLoad() {
    this.isMounted = false;
  }

  componentDidLoad() {
    this.items = [...projects];
    // get tags
    projects.map(
      (proj) =>
        proj.tags && proj.tags.map((tag) => this.tags.indexOf(tag) === -1 && this.tags.push(tag))
    );
    // delay before items come in
    // (for route transition to finishe)
    setTimeout(() => {
      this.isMounted = true;
    }, 400);
  }

  resetFilter = () => {
    this.filteredBy = '';
    this.items = [...projects];
  };

  filterItems = (k: string, v: string) => {
    this.filteredBy = `${k}|${v}`;
    const temp = projects.filter((item) => {
      if (Array.isArray(item[k])) {
        return item[k].indexOf(v) !== -1;
      } else {
        return item[k] === v;
      }
    });
    this.items = [...temp];
  };

  render() {
    const items = this.items.map((project) => (mounted, delay) => (
      <project-item mounted={mounted} delay={delay} key={project.id} post={project} />
    ));
    return (
      <div style={this.styles} class="app-page-projects">
        <app-background>
          <app-wave class="wave--flipped" />

          <ui-container>
            <ui-button url="/" class="abs abs--top-left">
              Back
            </ui-button>
            <h1>Projects</h1>
            <div class="app-page-projects--filters">
              <ui-button
                class={`${this.filteredBy === '' ? 'active' : ''}`}
                clickHandler={() => this.resetFilter()}
              >
                All
              </ui-button>
              <ui-button
                class={`${this.filteredBy === 'category|library' ? 'active' : ''}`}
                clickHandler={() => this.filterItems('category', 'library')}
              >
                Libraries & plugins
              </ui-button>

              <ui-button
                class={`${this.filteredBy === 'category|website' ? 'active' : ''}`}
                clickHandler={() => this.filterItems('category', 'website')}
              >
                Websites & Web Apps
              </ui-button>
            </div>
            <div class="app-page-projects--filters">
              {this.tags.sort().map((tag) => (
                <ui-button
                  class={`link ${this.filteredBy === `tags|${tag}` ? 'active' : ''}`}
                  clickHandler={() => this.filterItems('tags', tag)}
                >
                  #{tag}
                </ui-button>
              ))}
            </div>
            {items && (
              <transition-group
                trail={true}
                keys={(_, i) => i}
                items={items}
                wrapper="ui-grid"
                wrapperProps={{ cols: 3, gap: 2 }}
                config={{ duration: 350, timing: 'ease-in-out', delay: 100 }}
                from={{ opacity: '0', transform: 'translateY(5px)' }}
                enter={{ opacity: '1', transform: 'translateY(0px)' }}
                leave={{ opacity: '0', transform: 'translateY(-5px)' }}
                mounted={this.isMounted}
              />
            )}
          </ui-container>
        </app-background>
      </div>
    );
  }
}
