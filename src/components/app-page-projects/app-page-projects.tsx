import { Component, Prop, State, h } from '@stencil/core';
import { projects, Project } from './projects';
import arrow from '../../icons/arrow.json';
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
  initialItems: Project[] = [...projects];
  @State()
  itemElements: any[];
  @State()
  filteredBy: string = '';
  @State()
  tags: string[] = [];

  componentWillLoad() {
    this.isMounted = false;
    this.initialItems = this.sortByDate(projects);
    this.items = [...this.initialItems];
    this.getItems();

    // get tags
    this.initialItems.map(
      (proj) =>
        proj.tags && proj.tags.map((tag) => this.tags.indexOf(tag) === -1 && this.tags.push(tag))
    );
    // delay before items come in
    // (for route transition to finishe)
    setTimeout(() => {
      this.isMounted = true;
    }, 400);
  }
  
  sortByDate = (projects) => {
    //sort by date published
    return projects.sort(({ datePublished }, { datePublished: datePublishedB }) => {
      console.log('srt', datePublished, datePublishedB, datePublished < datePublishedB);
      return new Date(datePublishedB).getTime() - new Date(datePublished).getTime();
    })
  }
  resetFilter = () => {
    this.filteredBy = '';
    this.items = this.initialItems;
    this.getItems();
  };

  filterItems = (k: string, v: string) => {
    this.filteredBy = `${k}|${v}`;
    const temp = this.initialItems.filter((item) => {
      if (Array.isArray(item[k])) {
        return item[k].indexOf(v) !== -1;
      } else {
        return item[k] === v;
      }
    });
    this.items = [...temp];
    this.getItems();
  };

  getKeyFromH(res, i) {
    return res && typeof res === 'object'
      ? res.h
        ? res.h.key
        : res.$
          ? res.$.key
          : res.$attrs$
            ? res.$attrs$.key
            : res.$key$
      : 'undefined' + i;
  }
  getItems() {
    const items = this.items
      .filter((project) => new Date(project.datePublished).getTime() < new Date().getTime() )
      .map((project) => (mounted, delay) => (
        //don't show items > today's date
        <project-item mounted={mounted} delay={delay} key={Number(project.id)} post={project} />
    ));
    this.itemElements = [...items];
  }

  render() {

    return (
      <div style={this.styles} class="app-page-projects">
        <app-background>
          <app-wave class="wave--flipped" />

          <ui-container>
            <ui-button button icon={arrow} iconPos="left" url="/" class="flex-center link-back abs abs--top-left">
              Back
            </ui-button>
            <div class="app-page-projects--header">
              <h1>Projects</h1>
              <p>A selection of projects I've designed & developed.</p>
            </div>
            <div class="app-page-projects--filters">
              <ui-button
                button
                class={`${this.filteredBy === '' ? 'active' : ''}`}
                clickHandler={() => this.resetFilter()}
              >
                All
              </ui-button>
              <ui-button
                button
                class={`${this.filteredBy === 'category|library' ? 'active' : ''}`}
                clickHandler={() => this.filterItems('category', 'library')}
              >
                Libraries & plugins
              </ui-button>

              <ui-button
                button
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

            <transition-group
              trail={true}
              keys={(item, i, fn) => {
                console.log(i, fn);
                let res;
                if (typeof item === 'function') {
                  res = item();
                } else {
                  res = item;
                }
                // dev, production and prerender elements store
                // keys in different places
                // so check for all possibilities...
                const actual = this.getKeyFromH(res, i)
           
                console.log('actual key', actual, res)
                return `${JSON.stringify(actual)}`;
              }} 
              items={this.itemElements}
              // extraStyle={(_, i) => (i === 0 && {gridColumn: 'span 2'})}
              wrapper="ui-grid"
              wrapperProps={{ cols: 3, gap: 3, class: 'first-span-2' }}
              config={{ duration: 350, timing: 'ease-in-out', delay: 100 }}
              from={{ opacity: '0', transform: 'translateY(5px)' }}
              enter={{ opacity: '1', transform: 'translateY(0px)' }}
              leave={{ opacity: '0', transform: 'translateY(-5px)' }}
              mounted={this.items && this.items.length && this.isMounted}
            />
          </ui-container>
        </app-background>
      </div>
    );
  }
}
