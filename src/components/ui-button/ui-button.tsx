import { Component, h, Prop, State, Element } from '@stencil/core';
import lottie, { AnimationItem } from 'lottie-web';


@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.css',
  shadow: false,
})
export class UiButton {
  @Prop()
  class?: string;
  @Prop()
  clickHandler?: (event: MouseEvent) => any;
  @Prop()
  href?: string;
  @Prop()
  url?: string;
  @Prop()
  button?: boolean;
  @Prop()
  external?: boolean;
  @Prop()
  icon?: object;
  @Prop()
  iconPos?: string = 'right';
  @Prop()
  iconClass?: string;

  @State()
  animation: AnimationItem;

  @Element() 
  el!: HTMLElement;

  
  componentDidLoad() {
    if(this.icon){
      const data = { "v": "5.5.1", "fr": 24, "ip": 0, "op": 11, "w": 60, "h": 60, "nm": "Comp 3", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 1, "ty": 4, "nm": "external-link Outlines", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [34.535, 25.377, 0], "ix": 2 }, "a": { "a": 0, "k": [25, 25, 0], "ix": 1 }, "s": { "a": 0, "k": [101.917, 101.917, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 3, "s": [{ "i": [[0.417, 0.417], [0.546, 0], [0, 0], [0.416, -0.417], [-0.833, -0.833], [-0.546, 0], [0, 0], [0, 0], [-0.834, -0.833], [-0.833, 0.833], [0, 0], [0, 0], [-0.416, -0.416], [-0.834, 0.833], [0, 0.546], [0, 0], [0, 0], [0, 0]], "o": [[-0.416, -0.416], [0, 0], [-0.546, 0], [-0.833, 0.833], [0.416, 0.417], [0, 0], [0, 0], [-0.834, 0.833], [0.833, 0.833], [0, 0], [0, 0], [0, 0.546], [0.833, 0.833], [0.416, -0.416], [0, 0], [0, 0], [0, 0], [0, -0.545]], "v": [[14.411, -14.412], [12.904, -15.037], [-2.704, -15.037], [-4.212, -14.412], [-4.212, -11.395], [-2.704, -10.77], [7.753, -10.77], [-12.159, 9.143], [-12.159, 12.16], [-9.142, 12.16], [10.77, -7.753], [10.77, 2.704], [11.395, 4.212], [14.413, 4.212], [15.036, 2.704], [15.038, 2.704], [15.038, -12.905], [15.036, -12.905]], "c": true }] }, { "t": 8, "s": [{ "i": [[0.417, 0.417], [0.546, 0], [0, 0], [0.416, -0.417], [-0.833, -0.833], [-0.546, 0], [0, 0], [0, 0], [-0.834, -0.833], [-0.833, 0.833], [0, 0], [0, 0], [-0.416, -0.416], [-0.834, 0.833], [0, 0.546], [0, 0], [0, 0], [0, 0]], "o": [[-0.416, -0.416], [0, 0], [-0.546, 0], [-0.833, 0.833], [0.416, 0.417], [0, 0], [0, 0], [-0.834, 0.833], [0.833, 0.833], [0, 0], [0, 0], [0, 0.546], [0.833, 0.833], [0.416, -0.416], [0, 0], [0, 0], [0, 0], [0, -0.545]], "v": [[14.411, -14.412], [12.904, -15.037], [-2.704, -15.037], [-4.212, -14.412], [-4.212, -11.395], [-2.704, -10.77], [7.753, -10.77], [-14.204, 11.187], [-14.204, 14.204], [-11.187, 14.204], [10.77, -7.753], [10.77, 2.704], [11.395, 4.212], [14.413, 4.212], [15.036, 2.704], [15.038, 2.704], [15.038, -12.905], [15.036, -12.905]], "c": true }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0, 0, 0, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 1, "k": [{ "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 2, "s": [25.6, 24.416], "to": [1.194, -1.197], "ti": [-1.194, 1.197] }, { "i": { "x": 0.667, "y": 0.667 }, "o": { "x": 0.167, "y": 0.167 }, "t": 9, "s": [32.763, 17.234], "to": [0, 0], "ti": [0, 0] }, { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 15, "s": [32.763, 17.234], "to": [-2.088, 2.021], "ti": [2.088, -2.021] }, { "t": 20, "s": [20.233, 29.362] }], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.333, 0.333], "y": [0, 0] }, "t": 4, "s": [81, 81] }, { "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.167, 0.167], "y": [0, 0] }, "t": 10, "s": [100, 100] }, { "i": { "x": [0.667, 0.667], "y": [1, 1] }, "o": { "x": [0.333, 0.333], "y": [0, 0] }, "t": 15, "s": [100, 100] }, { "t": 20, "s": [79.685, 79.685] }], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 0, "s": [{ "i": [[0, 0], [0.573, 0], [0, 0], [0, 0.574], [0, 0], [-0.574, 0], [0, 0], [0, 1.104], [1.105, 0], [0, 0], [0, -2.786], [0, 0], [-2.785, 0], [0, 0], [0, 2.785], [0, 0], [1.104, 0], [0, -1.105]], "o": [[0, 0.573], [0, 0], [-0.574, 0], [0, 0], [0, -0.574], [0, 0], [1.105, 0], [0, -1.105], [0, 0], [-2.786, 0], [0, 0], [0, 2.785], [0, 0], [2.785, 0], [0, 0], [0, -1.105], [-1.104, 0], [0, 0]], "v": [[2.226, 14.652], [1.183, 15.695], [-14.673, 15.717], [-15.717, 14.673], [-15.752, 1.026], [-14.708, -0.018], [-14.757, -0.035], [-12.757, -2.035], [-14.757, -4.035], [-14.708, -4.018], [-19.752, 1.026], [-19.717, 14.674], [-14.674, 19.717], [1.183, 19.695], [6.226, 14.652], [6.167, 13.746], [4.167, 11.746], [2.167, 13.746]], "c": true }] }, { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 4, "s": [{ "i": [[0, 0], [0.573, 0], [0, 0], [0, 0.574], [0, 0], [-0.574, 0], [0, 0], [0, 1.104], [1.105, 0], [0, 0], [0, -2.786], [0, 0], [-2.785, 0], [0, 0], [0, 2.785], [0, 0], [1.104, 0], [0, -1.105]], "o": [[0, 0.573], [0, 0], [-0.574, 0], [0, 0], [0, -0.574], [0, 0], [1.105, 0], [0, -1.105], [0, 0], [-2.786, 0], [0, 0], [0, 2.785], [0, 0], [2.785, 0], [0, 0], [0, -1.105], [-1.104, 0], [0, 0]], "v": [[15.717, 14.674], [14.674, 15.717], [-14.673, 15.717], [-15.717, 14.673], [-15.717, -14.673], [-14.673, -15.717], [-14.722, -15.734], [-12.722, -17.734], [-14.722, -19.734], [-14.673, -19.717], [-19.717, -14.673], [-19.717, 14.674], [-14.674, 19.717], [14.674, 19.717], [19.717, 14.674], [19.658, 13.768], [17.658, 11.768], [15.658, 13.768]], "c": true }] }, { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 8, "s": [{ "i": [[0, 0], [0.573, 0], [0, 0], [0, 0.574], [0, 0], [-0.574, 0], [0, 0], [0, 1.104], [1.105, 0], [0, 0], [0, -2.786], [0, 0], [-2.785, 0], [0, 0], [0, 2.785], [0, 0], [1.104, 0], [0, -1.105]], "o": [[0, 0.573], [0, 0], [-0.574, 0], [0, 0], [0, -0.574], [0, 0], [1.105, 0], [0, -1.105], [0, 0], [-2.786, 0], [0, 0], [0, 2.785], [0, 0], [2.785, 0], [0, 0], [0, -1.105], [-1.104, 0], [0, 0]], "v": [[15.717, 14.674], [14.674, 15.717], [-14.673, 15.717], [-15.717, 14.673], [-15.717, -14.673], [-14.673, -15.717], [4.779, -15.717], [6.779, -17.717], [4.779, -19.717], [-14.673, -19.717], [-19.717, -14.673], [-19.717, 14.674], [-14.674, 19.717], [14.674, 19.717], [19.717, 14.674], [19.717, -4.875], [17.717, -6.875], [15.717, -4.875]], "c": true }] }, { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 17, "s": [{ "i": [[0, 0], [0.573, 0], [0, 0], [0, 0.574], [0, 0], [-0.574, 0], [0, 0], [0, 1.104], [1.105, 0], [0, 0], [0, -2.786], [0, 0], [-2.785, 0], [0, 0], [0, 2.785], [0, 0], [1.104, 0], [0, -1.105]], "o": [[0, 0.573], [0, 0], [-0.574, 0], [0, 0], [0, -0.574], [0, 0], [1.105, 0], [0, -1.105], [0, 0], [-2.786, 0], [0, 0], [0, 2.785], [0, 0], [2.785, 0], [0, 0], [0, -1.105], [-1.104, 0], [0, 0]], "v": [[15.717, 14.674], [14.674, 15.717], [-14.673, 15.717], [-15.717, 14.673], [-15.717, -14.673], [-14.673, -15.717], [4.779, -15.717], [6.779, -17.717], [4.779, -19.717], [-14.673, -19.717], [-19.717, -14.673], [-19.717, 14.674], [-14.674, 19.717], [14.674, 19.717], [19.717, 14.674], [19.717, -4.875], [17.717, -6.875], [15.717, -4.875]], "c": true }] }, { "t": 21, "s": [{ "i": [[0, 0], [0.573, 0], [0, 0], [0, 0.574], [0, 0], [-0.574, 0], [0, 0], [0, 1.104], [1.105, 0], [0, 0], [0, -2.786], [0, 0], [-2.785, 0], [0, 0], [0, 2.785], [0, 0], [1.104, 0], [0, -1.105]], "o": [[0, 0.573], [0, 0], [-0.574, 0], [0, 0], [0, -0.574], [0, 0], [1.105, 0], [0, -1.105], [0, 0], [-2.786, 0], [0, 0], [0, 2.785], [0, 0], [2.785, 0], [0, 0], [0, -1.105], [-1.104, 0], [0, 0]], "v": [[15.717, 14.674], [14.674, 15.717], [-14.673, 15.717], [-15.717, 14.673], [-15.717, -14.673], [-14.673, -15.717], [17.029, -15.684], [19.029, -17.684], [17.029, -19.684], [-14.673, -19.717], [-19.717, -14.673], [-19.717, 14.674], [-14.674, 19.717], [14.674, 19.717], [19.717, 14.674], [19.746, -17.5], [17.746, -19.5], [15.746, -17.5]], "c": true }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0, 0, 0, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [20.551, 29.545], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 2", "np": 2, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": -2, "op": 598, "st": -2, "bm": 0 }], "markers": [] }
      const icon = this.el.querySelector('.icon')
      console.log(icon)
      this.animation = lottie.loadAnimation({
        container: icon,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: this.external ? data : this.icon,
      });
      this.animation.setSpeed(1.5)
    }
  }
  enter = () => {
    if (!this.icon) return;
    this.animation.setDirection(1);
    this.animation.play();
  }
  exit = () => {
    if (!this.icon) return;
    this.animation.setDirection(-1);
    this.animation.play();
  }

  render() {
    return this.url ? (
      <stencil-route-link class={`${this.button && 'route-link-button'} ${this.class}`} url={this.url} onClick={this.clickHandler} onMouseEnter={this.enter} onMouseLeave={this.exit}>
        {this.iconPos === 'left' && this.icon && <span class={`icon ${this.iconClass} ${this.external && 'link-icon'}`} />}
        <slot>

        </slot>
        {this.iconPos === 'right' && this.icon && <span class={`icon ${this.iconClass} ${this.external && 'link-icon'}`} />}

      </stencil-route-link>
    ) : (
      <a
        onMouseEnter={this.enter} onMouseLeave={this.exit}
        class={`${this.button && 'button'} ${this.class}`}
        href={this.href}
        onClick={this.clickHandler}
        target={this.external ? '_blank' : '_self'}
      >
          <slot>
          </slot>
            {this.icon && <span class={`icon ${this.iconClass} ${this.external && 'link-icon'}`} />}
      </a>
    );
  }
}
