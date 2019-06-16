import { Component, h, Prop, State, Listen, ComponentInterface} from '@stencil/core';
import { LocationSegments, RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome implements ComponentInterface {
  @State() 
  animationState: string;

  @State()
  pageState: string[] = [];

  @Listen('pageEnter')
  onPageEnter(e: CustomEvent<LocationSegments>) {
    this.pageState = [...this.pageState, `Page enter ${e.detail.pathname}`];
  }

  @Listen('pageLeave')
  onPageLeave(e: CustomEvent<LocationSegments>) {
    this.pageState = [...this.pageState, `Page leave ${e.detail.pathname}`];
  }
  @Prop()
  mounted: boolean;
  @State()
  isMounted: boolean = false;

  @Prop() history: RouterHistory;
  @Prop() styles?: { [key: string]: string };
  @Prop() location: LocationSegments;

  componentDidLoad(){
    this.animationState = 'animate-in';
  }
  componentDidUnload(){
    this.animationState = 'animate-out';

  }
  render() {
    return (
      <div style={this.styles}>
          <app-wave/>
        <img class="ren-bg" src="assets/renrizzolo-profile-c.jpg" />
        <app-background>

          <renrizzolo-logo />
          <div class="intro-text">

          <p >I'm a front-end developer from Melbourne, Australia ✌️</p>
            <stencil-route-link url="/profile/ren">link</stencil-route-link>
            <stencil-route-link  url="/">2</stencil-route-link>
          </div>            

          <div class="footer">
            <a href="https://twitter.com/ren_riz">twitter</a>&nbsp;
            <a href="https://github.com/renrizzolo">gitHub</a>
          </div>
        </app-background>
      </div>
    );
  }
}
