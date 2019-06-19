import { Component, Prop, State, h } from '@stencil/core';

const projects = [
  {
    id: 1,
    slug: 'react-native-sectioned-multi-select',
    coverImage: 'assets/projects/rnsms.png',
    heading: 'React Native Sectioned Multi Select',
    subHeading: 'A highly configurable select component for React Native',
    link: '',
    tags: ['React Native', 'Javscript'],
    category: 'library',
  },
  {
    id: 2,
    slug: 'react-native-swipeable-rating',
    coverImage: 'assets/projects/rnsr.png',
    heading: 'React Native Swipeable Rating',
    subHeading: 'A React Native star rating component with swipe & tap support',
    link: '',
    tags: ['React Native', 'Javscript'],
    category: 'library',
  },
  {
    id: 3,
    slug: 'casual-sparks',
    coverImage: 'assets/projects/casual-sparks.png',
    heading: 'Casual Sparks',
    subHeading: 'Record label website with custom Sound Cloud player',
    link: 'https://casualsparks.com',
    tags: ['Javscript', 'React', 'Gatsby'],
    category: 'website',
  },
  {
    id: 4,
    slug: 'ren-rizzolo',
    coverImage: 'assets/projects/renrizzolo-web.png',
    heading: 'Ren Rizzolo',
    subHeading:
      'Simple portfolio site with custom route transitions component and colour theme picker',
    link: 'https://renrizzolo.com',
    tags: ['Javscript', 'Stencil JS', 'Web Components', 'CSS variables'],
    category: 'website',
  },
];

@Component({
  tag: 'app-page-projects',
  styleUrl: 'app-page-projects.css',
  shadow: true,
})
export class AppPageProjects {
  @Prop()
  styles?: { [key: string]: string };
  @Prop()
  mounted: boolean;
  @State()
  isMounted: boolean = false;
  @State()
  items: any[] = [<h1>new item</h1>, <h1>test item</h1>, <h1>another item</h1>];

  componentDidLoad() {
    this.isMounted = true;
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

  render() {
    console.log('this.isMounted', this.isMounted);
    console.log('this.styles', this.styles);

    return (
      <div style={this.styles} class="app-page-projects">
        <app-background>
          <app-wave class="wave--flipped" />

          <div class="app-page-projects--container">
            <ui-button url="/" class="abs abs--top-left">
              Back
            </ui-button>

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
            <h1>Projects</h1>
            <transition-group
              items={projects.map((project) => (
                <project-item post={project} />
              ))}
              wrapper="ui-grid"
              wrapperProps={{ cols: 3, gap: 2 }}
              config={{ duration: 600, timing: 'ease', delay: 300 }}
              from={{ transitionDuration: '300ms', opacity: '0', transform: 'translateY(50px)' }}
              enter={{ opacity: '1', transform: 'translateY(0px)' }}
              leave={{ opacity: '0', transform: 'translateY(35px)' }}
              mounted={this.isMounted}
            />
          </div>
        </app-background>
      </div>
    );
  }
}
