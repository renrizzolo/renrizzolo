import { Component, ComponentInterface, Prop, State, Element, Watch } from '@stencil/core';
import { LocationSegments } from '@stencil/router';

let lastKey = '';
let lastEvent = '';

@Component({
  tag: 'route-transition',
  shadow: false,
})
export class RouteTransition implements ComponentInterface {
  @Element() el!: any;

  @Prop()
  items: LocationSegments;
  @Prop()
  keys: string;
  @Prop()
  config: { duration: number; timing: string };
  @Prop()
  from: { [key: string]: string };
  @Prop()
  enter: { [key: string]: string };
  @Prop()
  leave: { [key: string]: string };
  @Prop()
  renderFunction?: (style: { [key: string]: string }, loc: LocationSegments) => any;

  @Watch('keys')
  keyWatcher(newValue: string, oldValue: string) {
    console.log('new key', newValue, oldValue);
    if (lastKey !== newValue && lastEvent !== 'pageLeave') {
      console.log(
        'page: will leave',
        this.localPageSegments.pathname,
        lastKey,
        this.currentPageLocation.key
      );
      this._setEvent('pageLeave', this.localPageSegments);
    }

    if (lastKey !== newValue && lastEvent !== 'pageEnter') {
      //let the unmount transition run
      setTimeout(() => {
        console.log(
          'page: has entered with delay',
          this.currentPageLocation.pathname,
          lastKey,
          this.currentPageLocation.key
        );
        this._setEvent('pageEnter', this.currentPageLocation);
      }, this.config.duration);

      this.localPageSegments = this.currentPageLocation;
    }
  }

  @State()
  loc: LocationSegments;

  private localPageSegments: LocationSegments | null = null;

  private get currentPageLocation(): LocationSegments {
    return this.items;
  }
  private _setEvent = (
    event: 'pageEnter' | 'pageEntered' | 'pageLeave' | 'pageLeft',
    location: LocationSegments
  ) => {
    if (lastEvent === event && lastKey === location.key) return;

    if (event === 'pageEnter') {
      this.loc = this.localPageSegments;

      console.log('location is now pageEnter', this.loc);
    } else if (event === 'pageLeave') {
      this.loc = location;
      console.log('location is now pageLeave', this.loc);
    } else if (event === 'pageLeft') {
      this.loc = this.currentPageLocation;
      console.log('location is now pageLeft', this.loc);
    } else if (event === 'pageEntered' && lastEvent !== 'pageEntered') {
      // this is hackyyy
      // forcing update because the location doesn't change
      setTimeout(() => {
        this.el.forceUpdate();
        // why tho
      }, 50);

      console.log('location is now pageEntered', this.loc);
    }

    lastEvent = event;
    lastKey = location.key;
  };

  componentWillLoad() {
    if (!this.items) {
      throw Error('Please add items to <route-transition />!');
    }
    this.localPageSegments = this.currentPageLocation;
    lastKey = this.currentPageLocation.key;
    this._setEvent('pageEnter', this.currentPageLocation);
  }

  componentDidLoad() {
    // app loaded
    if (lastKey === this.currentPageLocation.key) {
      console.log('page: did load', this.currentPageLocation.pathname);

      this._setEvent('pageEntered', this.currentPageLocation);
    }
  }

  componentDidUnload() {
    if (lastKey !== this.currentPageLocation.key) {
      console.log('page: did unload', this.currentPageLocation.pathname);

      this._setEvent('pageLeave', this.localPageSegments);
    }
  }

  componentDidUpdate() {
    // new page 'finished' entering
    if (
      lastKey === this.currentPageLocation.key &&
      lastEvent !== 'pageEntered' &&
      lastEvent !== 'pageLeave'
    ) {
      console.log('page enter same key');
      // this is not ok
      // clearly there's a race condition
      setTimeout(() => {
        this._setEvent('pageEntered', this.currentPageLocation);
      }, 50);
    }
  }

  getStyle() {
    let style = this.from;
    if (lastEvent === 'pageEnter') {
      style = this.from;
    }
    if (lastEvent === 'pageEntered') {
      style = this.enter;
    }
    if (lastEvent === 'pageLeave') {
      style = this.leave;
    }
    style = { transition: `${this.config.duration}ms ${this.config.timing}`, ...style };
    return style;
  }

  render() {
    const style = this.getStyle();

    console.group('Route render');
    console.log(`applying ${lastEvent} to ${this.loc.pathname}`);

    console.log('render loc', style, this.loc);
    console.groupEnd();
    return this.renderFunction(style, this.loc);
  }
}
