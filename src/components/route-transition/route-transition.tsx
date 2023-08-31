import {
  Component,
  ComponentInterface,
  Prop,
  State,
  Element,
  Watch,
  forceUpdate,
} from "@stencil/core";
import { LocationSegments } from "@stencil/router";

let lastKey = "";
let lastEvent = "";

@Component({
  tag: "route-transition",
  shadow: false,
})
export class RouteTransition implements ComponentInterface {
  @Element() el!: any;

  @Prop()
  items: LocationSegments;
  @Prop()
  keys: string;
  @Prop()
  config: { duration: number; timing: string } = {
    duration: 300,
    timing: "ease",
  };
  @Prop()
  from: { [key: string]: string };
  @Prop()
  enter: { [key: string]: string };
  @Prop()
  leave: { [key: string]: string };
  @Prop()
  renderFunction?: (
    style: { [key: string]: string },
    loc: LocationSegments,
    lastEvent: string
  ) => any;

  @Watch("keys")
  keyWatcher(newValue: string) {
    if (lastKey !== newValue && lastEvent !== "pageLeave") {
      this._setEvent("pageLeave", this.localPageSegments);
    }

    if (lastKey !== newValue && lastEvent !== "pageEnter") {
      //let the unmount transition run

      setTimeout(() => {
        this._setEvent("pageEnter", this.currentPageLocation);
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
    event: "pageEnter" | "pageEntered" | "pageLeave" | "pageLeft",
    location: LocationSegments
  ) => {
    if (lastEvent === event && lastKey === location.key) return;

    if (event === "pageEnter") {
      this.loc = this.localPageSegments;
    } else if (event === "pageLeave") {
      this.loc = location;
    } else if (event === "pageLeft") {
      this.loc = this.currentPageLocation;
    } else if (event === "pageEntered" && lastEvent !== "pageEntered") {
      // this is hackyyy
      // forcing update because the location doesn't change
      setTimeout(() => {
        forceUpdate(this.el);
        // why tho
      }, 50);
    }

    lastEvent = event;
    lastKey = location && location.key;
  };

  componentWillLoad() {
    if (!this.items) {
      throw Error("Please add items to <route-transition />!");
    }
    this.localPageSegments = this.currentPageLocation;
    lastKey = this.currentPageLocation.key;
    this._setEvent("pageEnter", this.currentPageLocation);
  }

  componentDidLoad() {
    // app loaded
    if (lastKey === this.currentPageLocation.key) {
      setTimeout(() => {
        this._setEvent("pageEntered", this.currentPageLocation);
      }, 250);
    }
  }

  componentDidUnload() {
    if (lastKey !== this.currentPageLocation.key) {
      this._setEvent("pageLeave", this.localPageSegments);
    }
  }

  componentDidUpdate() {
    // new page 'finished' entering
    if (
      lastKey === this.localPageSegments.key &&
      lastEvent !== "pageEntered" &&
      lastEvent !== "pageLeave"
    ) {
      // this is not ok
      // clearly there's a race condition
      setTimeout(() => {
        this._setEvent("pageEntered", this.currentPageLocation);
      }, 250);
    }
  }

  getStyle() {
    let style = {};
    if (lastEvent === "pageEnter") {
      style = this.from;
    }
    if (lastEvent === "pageEntered") {
      style = this.enter;
    }
    if (lastEvent === "pageLeave") {
      style = this.leave;
    }
    style = {
      transition: `${this.config.duration}ms ${this.config.timing}`,
      ...style,
    };
    return style;
  }

  render() {
    const style = this.getStyle();
    return this.renderFunction(style, this.loc, lastEvent);
  }
}
