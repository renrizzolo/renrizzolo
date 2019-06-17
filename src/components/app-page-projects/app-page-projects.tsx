import { Component, Prop, State,  h, } from '@stencil/core';

@Component({
  tag: 'app-page-projects',
  styleUrl: 'app-page-projects.css',
  shadow: true
})
export class AppPageProjects {
 
  @Prop()
  styles?:{ [key: string]: string};
  @Prop()
  mounted: boolean;
  @State()
  isMounted: boolean = false;
  @State()
  items: any[] = [<h1>new item</h1>, <h1>test item</h1>, <h1>another  item</h1>];

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  componentDidLoad() {
    this.isMounted = true;
  }

  toggle = () => {
    this.isMounted = !this.isMounted;
  }
  add = () => {
    this.items = [...this.items, <h1>new item{this.items.length}</h1>]
  }

  remove = () => {
    const newA = this.items.slice(0, this.items.length - 1);
    console.log(newA);
    
    this.items = [...newA]
  }

  render() {
    console.log('this.isMounted', this.isMounted);
      return (
        <div>
 
              <app-wave class="wave--flipped" />
            
            <div class="app-page-projects">
              <ui-button url="/" class="abs abs--top-left">Back</ui-button>

             {/*  <transition-group
                class="class"
                items={this.items}
                config={{ duration: 600, timing: 'ease', delay: 300 }}
                from={{transitionDuration: '300ms', opacity: '0', transform: 'translateX(-15px)' }}
                enter={{ opacity: '1', transform: 'translateX(0px)' }}
                leave={{ opacity: '0', transform: 'translateX(35px)' }}
                mounted={this.isMounted}
              >
              </transition-group> */}
         {/*    <p>
                <a onClick={this.toggle}>Toggle items</a>            </p>

                <p>
                <a onClick={this.add}>add item</a>            </p>

                  <p>
            <a onClick={this.remove}>remove item</a>
            </p> */}
              <h1>
                Projects
              </h1>
              <ui-grid cols={2} gap={3}>
                {/* <div class="project project-item">
                  <header class="project-item--header">
                    <h3 class="project-item--title">Project title</h3>
                    <a class="project-item--link">https://www.github.com/renrizzolo</a>
                  </header>
                  <section>
                    <img class="project-item--img" src="https://unsplash.it/400/?random"/>
                  </section>
                </div> */}
                <project-item/>
              <project-item />

              </ui-grid>
            </div>
        </div>
      );
  }
}
