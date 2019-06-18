/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  LocationSegments,
} from '@stencil/router';

export namespace Components {
  interface AppBackground {}
  interface AppHome {
    'styles'?: { [key: string]: string };
  }
  interface AppPage404 {}
  interface AppPageProjects {
    'mounted': boolean;
    'styles'?: { [key: string]: string };
  }
  interface AppRoot {}
  interface AppWave {
    'class': string;
  }
  interface ProjectItem {
    'post': {
      id: number;
      slug: string;
      coverImage?: string;
      heading: string;
      subHeading?: string;
      link?: string;
    };
  }
  interface RenrizzoloLogo {}
  interface RouteTransition {
    'config': { duration: number; timing: string };
    'enter': { [key: string]: string };
    'from': { [key: string]: string };
    'items': LocationSegments;
    'keys': string;
    'leave': { [key: string]: string };
    'renderFunction'?: (style: { [key: string]: string }, loc: LocationSegments) => any;
  }
  interface TransitionGroup {
    'class'?: string;
    'config': {
      duration: number;
      fromDuration?: number;
      leaveDuration?: number;
      timing: string;
      delay?: number;
    };
    'enter': { [key: string]: string };
    'from': { [key: string]: string };
    'items': any[];
    'keys': string;
    'leave': { [key: string]: string };
    'mounted': boolean;
    'renderFunction'?: (style: { [key: string]: string }, loc: []) => any;
    'wrapper': string;
    'wrapperProps': object;
  }
  interface TransitionMountWrapper {
    'mounted': boolean;
    'styles': {};
  }
  interface UiButton {
    'class'?: string;
    'href'?: string;
    'onClick'?: (event: MouseEvent) => any;
    'url'?: string;
  }
  interface UiGrid {
    'class'?: string;
    'cols': 1 | 2 | 3 | 4;
    'gap': 0 | 1 | 2 | 3 | 4;
  }
}

declare global {


  interface HTMLAppBackgroundElement extends Components.AppBackground, HTMLStencilElement {}
  var HTMLAppBackgroundElement: {
    prototype: HTMLAppBackgroundElement;
    new (): HTMLAppBackgroundElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppPage404Element extends Components.AppPage404, HTMLStencilElement {}
  var HTMLAppPage404Element: {
    prototype: HTMLAppPage404Element;
    new (): HTMLAppPage404Element;
  };

  interface HTMLAppPageProjectsElement extends Components.AppPageProjects, HTMLStencilElement {}
  var HTMLAppPageProjectsElement: {
    prototype: HTMLAppPageProjectsElement;
    new (): HTMLAppPageProjectsElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppWaveElement extends Components.AppWave, HTMLStencilElement {}
  var HTMLAppWaveElement: {
    prototype: HTMLAppWaveElement;
    new (): HTMLAppWaveElement;
  };

  interface HTMLProjectItemElement extends Components.ProjectItem, HTMLStencilElement {}
  var HTMLProjectItemElement: {
    prototype: HTMLProjectItemElement;
    new (): HTMLProjectItemElement;
  };

  interface HTMLRenrizzoloLogoElement extends Components.RenrizzoloLogo, HTMLStencilElement {}
  var HTMLRenrizzoloLogoElement: {
    prototype: HTMLRenrizzoloLogoElement;
    new (): HTMLRenrizzoloLogoElement;
  };

  interface HTMLRouteTransitionElement extends Components.RouteTransition, HTMLStencilElement {}
  var HTMLRouteTransitionElement: {
    prototype: HTMLRouteTransitionElement;
    new (): HTMLRouteTransitionElement;
  };

  interface HTMLTransitionGroupElement extends Components.TransitionGroup, HTMLStencilElement {}
  var HTMLTransitionGroupElement: {
    prototype: HTMLTransitionGroupElement;
    new (): HTMLTransitionGroupElement;
  };

  interface HTMLTransitionMountWrapperElement extends Components.TransitionMountWrapper, HTMLStencilElement {}
  var HTMLTransitionMountWrapperElement: {
    prototype: HTMLTransitionMountWrapperElement;
    new (): HTMLTransitionMountWrapperElement;
  };

  interface HTMLUiButtonElement extends Components.UiButton, HTMLStencilElement {}
  var HTMLUiButtonElement: {
    prototype: HTMLUiButtonElement;
    new (): HTMLUiButtonElement;
  };

  interface HTMLUiGridElement extends Components.UiGrid, HTMLStencilElement {}
  var HTMLUiGridElement: {
    prototype: HTMLUiGridElement;
    new (): HTMLUiGridElement;
  };
  interface HTMLElementTagNameMap {
    'app-background': HTMLAppBackgroundElement;
    'app-home': HTMLAppHomeElement;
    'app-page-404': HTMLAppPage404Element;
    'app-page-projects': HTMLAppPageProjectsElement;
    'app-root': HTMLAppRootElement;
    'app-wave': HTMLAppWaveElement;
    'project-item': HTMLProjectItemElement;
    'renrizzolo-logo': HTMLRenrizzoloLogoElement;
    'route-transition': HTMLRouteTransitionElement;
    'transition-group': HTMLTransitionGroupElement;
    'transition-mount-wrapper': HTMLTransitionMountWrapperElement;
    'ui-button': HTMLUiButtonElement;
    'ui-grid': HTMLUiGridElement;
  }
}

declare namespace LocalJSX {
  interface AppBackground extends JSXBase.HTMLAttributes<HTMLAppBackgroundElement> {}
  interface AppHome extends JSXBase.HTMLAttributes<HTMLAppHomeElement> {
    'styles'?: { [key: string]: string };
  }
  interface AppPage404 extends JSXBase.HTMLAttributes<HTMLAppPage404Element> {}
  interface AppPageProjects extends JSXBase.HTMLAttributes<HTMLAppPageProjectsElement> {
    'mounted'?: boolean;
    'styles'?: { [key: string]: string };
  }
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface AppWave extends JSXBase.HTMLAttributes<HTMLAppWaveElement> {
    'class'?: string;
  }
  interface ProjectItem extends JSXBase.HTMLAttributes<HTMLProjectItemElement> {
    'post'?: {
      id: number;
      slug: string;
      coverImage?: string;
      heading: string;
      subHeading?: string;
      link?: string;
    };
  }
  interface RenrizzoloLogo extends JSXBase.HTMLAttributes<HTMLRenrizzoloLogoElement> {}
  interface RouteTransition extends JSXBase.HTMLAttributes<HTMLRouteTransitionElement> {
    'config'?: { duration: number; timing: string };
    'enter'?: { [key: string]: string };
    'from'?: { [key: string]: string };
    'items'?: LocationSegments;
    'keys'?: string;
    'leave'?: { [key: string]: string };
    'renderFunction'?: (style: { [key: string]: string }, loc: LocationSegments) => any;
  }
  interface TransitionGroup extends JSXBase.HTMLAttributes<HTMLTransitionGroupElement> {
    'class'?: string;
    'config'?: {
      duration: number;
      fromDuration?: number;
      leaveDuration?: number;
      timing: string;
      delay?: number;
    };
    'enter'?: { [key: string]: string };
    'from'?: { [key: string]: string };
    'items'?: any[];
    'keys'?: string;
    'leave'?: { [key: string]: string };
    'mounted'?: boolean;
    'renderFunction'?: (style: { [key: string]: string }, loc: []) => any;
    'wrapper'?: string;
    'wrapperProps'?: object;
  }
  interface TransitionMountWrapper extends JSXBase.HTMLAttributes<HTMLTransitionMountWrapperElement> {
    'mounted'?: boolean;
    'styles'?: {};
  }
  interface UiButton extends JSXBase.HTMLAttributes<HTMLUiButtonElement> {
    'class'?: string;
    'href'?: string;
    'onClick'?: (event: MouseEvent) => any;
    'url'?: string;
  }
  interface UiGrid extends JSXBase.HTMLAttributes<HTMLUiGridElement> {
    'class'?: string;
    'cols'?: 1 | 2 | 3 | 4;
    'gap'?: 0 | 1 | 2 | 3 | 4;
  }

  interface IntrinsicElements {
    'app-background': AppBackground;
    'app-home': AppHome;
    'app-page-404': AppPage404;
    'app-page-projects': AppPageProjects;
    'app-root': AppRoot;
    'app-wave': AppWave;
    'project-item': ProjectItem;
    'renrizzolo-logo': RenrizzoloLogo;
    'route-transition': RouteTransition;
    'transition-group': TransitionGroup;
    'transition-mount-wrapper': TransitionMountWrapper;
    'ui-button': UiButton;
    'ui-grid': UiGrid;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


