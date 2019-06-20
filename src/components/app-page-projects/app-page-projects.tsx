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
  items: Project[] = projects;
  filteredBy: string = '';
  tags: string[] = [];

  componentDidLoad() {
    this.isMounted = true;
    projects.map(
      (proj) =>
        proj.tags && proj.tags.map((tag) => this.tags.indexOf(tag) === -1 && this.tags.push(tag))
    );
  }

  toggle = () => {
    this.isMounted = !this.isMounted;
  };

  add = () => {
    this.items = [...this.items, <h1>new item{this.items.length}</h1>];
  };

  remove = () => {
    const newA = this.items.slice(0, this.items.length - 1);
    console.log(newA);

    this.items = [...newA];
  };
  resetFilter = () => {
    this.isMounted = false;
    this.filteredBy = '';
    setTimeout(() => {
      this.items = [...projects];
      this.isMounted = true;
    }, projects.length * 100 * 2);
  };

  filterItems = (k: string, v: string) => {
    this.isMounted = false;
    this.filteredBy = `${k}|${v}`;
    setTimeout(() => {
      this.items = [
        ...projects.filter((item) => {
          if (Array.isArray(item[k])) {
            console.log(item[k], item[k].indexOf(v));

            return item[k].indexOf(v) !== -1;
          } else {
            return item[k] === v;
          }
        }),
      ];
      this.isMounted = true;
    }, this.items.length * 100 * 2);
  };
  render() {
    console.log('this.isMounted', this.isMounted);
    console.log('this.styles', this.styles);

    console.log('tags', this.tags);

    // const items = this.filterItems(projects, '', '');
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
                onClick={() => this.resetFilter()}
              >
                All
              </ui-button>
              <ui-button
                class={`${this.filteredBy === 'category|library' ? 'active' : ''}`}
                onClick={() => this.filterItems('category', 'library')}
              >
                Libraries
              </ui-button>

              <ui-button
                class={`${this.filteredBy === 'category|website' ? 'active' : ''}`}
                onClick={() => this.filterItems('category', 'website')}
              >
                Websites
              </ui-button>
            </div>
            <div class="app-page-projects--filters">
              {this.tags.map((tag) => (
                <ui-button
                  class={`link ${this.filteredBy === `tags|${tag}` ? 'active' : ''}`}
                  onClick={() => this.filterItems('tags', tag)}
                >
                  #{tag}
                </ui-button>
              ))}
            </div>
            <transition-group
              items={this.items.map((project) => (
                <project-item post={project} />
              ))}
              wrapper="ui-grid"
              wrapperProps={{ cols: 3, gap: 2 }}
              config={{ duration: 600, timing: 'ease', delay: 100 }}
              from={{ transitionDuration: '300ms', opacity: '0', transform: 'translateY(50px)' }}
              enter={{ opacity: '1', transform: 'translateY(0px)' }}
              leave={{ opacity: '0', transform: 'translateY(35px)' }}
              mounted={this.isMounted}
            />
          </ui-container>
        </app-background>
      </div>
    );
  }
}
