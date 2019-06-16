import { Component, Prop, State,  h, } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true
})
export class AppProfile {
  @Prop() 
  match: MatchResults;
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
  // componentWillUpdate() {
  //   if (!mounted)
  //     return this.unMountStyle() // call outro animation when mounted prop is false
  //   this.setState({ // remount the node when the mounted prop is true
  //     show: true
  //   })
  //   setTimeout(this.mountStyle, 10) // call the into animation
  // }
  // componentDidUpdate() {
  //   console.log(this.mounted);
    
  //   if (!this.mounted) { // remove the node on transition end when the mounted prop is false
  //     setTimeout(() => {
  //       console.log('unmount on update');

  //       this.isMounted = true;
  //     }, 1600)
  //   }
  // }
  componentDidLoad() {
    this.isMounted = true;
  }
  // componentDidLoad(){
  //   console.log('styles', this.styles,);
  //   setTimeout(() => {
  //     console.log('unmount on load');

  //     this.isMounted = true;
      
  //   }, 600);
  // }
  // componentWillUnload(){
  //   setTimeout(() => {
  //     console.log('unmount on will unload');
      
  //   this.isMounted = false;
  //   }, 600)
  // }
  // transitionEnd() {
  //   console.log('transition ended');
    
  //   if (!this.mounted) { // remove the node on transition end when the mounted prop is false
  //     this.isMounted = false;
  //   }
  // }
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
    if (this.match && this.match.params.name) {
      return (
        <div style={this.styles}>
           
          <app-background>
            <div class="app-profile">
              <app-wave class="wave--flipped" />
              <transition-group
                class="class"
                items={this.items}
                config={{ duration: 600, timing: 'ease', delay: 300 }}
                from={{transitionDuration: '300ms', opacity: '0', transform: 'translateX(-15px)' }}
                enter={{ opacity: '1', transform: 'translateX(0px)' }}
                leave={{ opacity: '0', transform: 'translateX(35px)' }}
                mounted={this.isMounted}
              >
              </transition-group>
            <p>
                <a onClick={this.toggle}>Toggle items</a>            </p>

                <p>
                <a onClick={this.add}>add item</a>            </p>

                  <p>
            <a onClick={this.remove}>remove item</a>
            </p>
            <stencil-route-link url="/">Back</stencil-route-link>
              <p>
                Hello! My name is {this.normalize(this.match.params.name)}.
              </p>
            </div>
          </app-background>
        </div>
      );
    }
  }
}
