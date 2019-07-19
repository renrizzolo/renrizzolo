import { Component, h, Prop, Element, State, Watch } from '@stencil/core';
import lottie, { AnimationItem } from 'lottie-web';

@Component({
  tag: 'drip-icon',
  styleUrl: 'drip-icon.css',
  shadow: false,
})
export class DripIcon {
  @Prop() play: boolean;
  @Element() el!: HTMLElement;
  @State() animation: AnimationItem;

  @Watch('play')
  watchPlay(o, _) {
    o === true ? this.animation && this.animation.play() : this.animation && this.animation.pause();
  }
  
  componentDidLoad() {

    const data = { "v": "5.5.1", "fr": 24, "ip": 0, "op": 18, "w": 60, "h": 60, "nm": "Comp 2", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 2, "ty": 4, "nm": "drip Outlines", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [30.209, 37.85, 0], "ix": 2 }, "a": { "a": 0, "k": [15.5, 25, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 3, "s": [{ "i": [[1.699, 2.639], [0, 0], [-0.593, -0.868], [0.275, -2.862], [-1.723, -2.199]], "o": [[-4.073, -6.331], [0.573, -1.066], [0.412, 0.606], [-0.216, 2.243], [1.224, 1.562]], "v": [[-9.934, 15.718], [-9.879, 2.781], [-7.291, 2.451], [-8.778, 8.837], [-6.796, 15.057]], "c": true }] }, { "i": { "x": 0.833, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 8, "s": [{ "i": [[1.698, 2.249], [0, 0], [-0.593, -0.74], [0.276, -2.438], [-1.723, -1.874]], "o": [[-4.073, -5.394], [0.573, -0.908], [0.412, 0.516], [-0.216, 1.911], [1.224, 1.331]], "v": [[-10.809, 13.876], [-10.254, 4.229], [-7.666, 3.947], [-9.153, 9.389], [-7.671, 13.313]], "c": true }] }, { "t": 15, "s": [{ "i": [[1.699, 2.639], [0, 0], [-0.593, -0.868], [0.275, -2.862], [-1.723, -2.199]], "o": [[-4.073, -6.331], [0.573, -1.066], [0.412, 0.606], [-0.216, 2.243], [1.224, 1.562]], "v": [[-9.934, 15.718], [-9.879, 2.781], [-7.291, 2.451], [-8.778, 8.837], [-6.796, 15.057]], "c": true }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ind": 1, "ty": "sh", "ix": 2, "ks": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 3, "s": [{ "i": [[0.698, 1.73], [0, 0], [1, 2], [0, 0], [0, 0], [1, -2], [0.978, -2.506], [0.007, -0.017], [0, 0], [0, 0], [0, -1.986], [-8.284, 0], [0, 8.284]], "o": [[0, 0], [0, 0], [-1, -2], [0, 0], [0, 0], [-0.945, 1.89], [-0.008, 0.018], [-0.042, 0.109], [0, 0], [-0.701, 1.734], [0, 8.284], [8.284, 0], [0, -1.981]], "v": [[13.909, 4.402], [13.916, 4.397], [3.009, -22.989], [0.008, -24.989], [0, -25], [-3, -23], [-13.815, 4.15], [-13.837, 4.204], [-13.908, 4.386], [-13.904, 4.388], [-15, 10], [0, 25], [15, 10]], "c": true }] }, { "i": { "x": 0.833, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 8, "s": [{ "i": [[0.698, 1.73], [0, 0], [1, 2], [0, 0], [0, 0], [1, -2], [0.978, -2.506], [0.007, -0.017], [0, 0], [0, 0], [0, -1.986], [-8.284, 0], [0, 8.284]], "o": [[0, 0], [0, 0], [-1, -2], [0, 0], [0, 0], [-0.945, 1.89], [-0.008, 0.018], [-0.042, 0.109], [0, 0], [-0.701, 1.734], [0, 8.284], [8.284, 0], [0, -1.981]], "v": [[13.909, 4.402], [13.916, 4.397], [2.976, -20.239], [-0.025, -22.239], [-0.033, -22.25], [-3.033, -20.25], [-13.815, 4.15], [-13.837, 4.204], [-13.908, 4.386], [-13.904, 4.388], [-15, 10], [-0.024, 21.375], [15, 10]], "c": true }] }, { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 15, "s": [{ "i": [[0.698, 1.73], [0, 0], [1, 2], [0, 0], [0, 0], [1, -2], [0.978, -2.506], [0.007, -0.017], [0, 0], [0, 0], [0, -1.986], [-8.284, 0], [0, 8.284]], "o": [[0, 0], [0, 0], [-1, -2], [0, 0], [0, 0], [-0.945, 1.89], [-0.008, 0.018], [-0.042, 0.109], [0, 0], [-0.701, 1.734], [0, 8.284], [8.284, 0], [0, -1.981]], "v": [[13.909, 4.402], [13.916, 4.397], [3.009, -22.989], [0.008, -24.989], [0, -25], [-3, -23], [-13.815, 4.15], [-13.837, 4.204], [-13.908, 4.386], [-13.904, 4.388], [-15, 10], [0, 25], [15, 10]], "c": true }] }, { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 22, "s": [{ "i": [[0.698, 1.73], [0, 0], [1, 2], [0, 0], [0, 0], [1, -2], [0.978, -2.506], [0.007, -0.017], [0, 0], [0, 0], [0, -1.986], [-8.284, 0], [0, 8.284]], "o": [[0, 0], [0, 0], [-1, -2], [0, 0], [0, 0], [-0.945, 1.89], [-0.008, 0.018], [-0.042, 0.109], [0, 0], [-0.701, 1.734], [0, 8.284], [8.284, 0], [0, -1.981]], "v": [[13.909, 4.402], [13.916, 4.397], [3.009, -22.989], [0.008, -24.989], [0, -25], [-3, -23], [-13.815, 4.15], [-13.837, 4.204], [-13.908, 4.386], [-13.904, 4.388], [-15, 10], [0, 25], [15, 10]], "c": true }] }, { "t": 29, "s": [{ "i": [[0.698, 1.73], [0, 0], [1, 2], [0, 0], [0, 0], [1, -2], [0.978, -2.506], [0.007, -0.017], [0, 0], [0, 0], [0, -1.986], [-8.284, 0], [0, 8.284]], "o": [[0, 0], [0, 0], [-1, -2], [0, 0], [0, 0], [-0.945, 1.89], [-0.008, 0.018], [-0.042, 0.109], [0, 0], [-0.701, 1.734], [0, 8.284], [8.284, 0], [0, -1.981]], "v": [[13.909, 4.402], [13.916, 4.397], [3.009, -22.989], [0.008, -24.989], [0, -25], [-3, -23], [-13.815, 4.15], [-13.837, 4.204], [-13.908, 4.386], [-13.904, 4.388], [-15, 10], [-0.024, 21.375], [15, 10]], "c": true }] }], "ix": 2 }, "nm": "Path 2", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "mm", "mm": 1, "nm": "Merge Paths 1", "mn": "ADBE Vector Filter - Merge", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0, 0, 0, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 1 }, "o": { "x": 0.333, "y": 0.033 }, "t": 0, "s": [15.291, 18.453], "to": [0, 0.53], "ti": [0, -0.333] }, { "i": { "x": 0.833, "y": 0.979 }, "o": { "x": 0.333, "y": 0 }, "t": 8, "s": [15.291, 25.079], "to": [0, 0.078], "ti": [0, -0.163] }, { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0.035 }, "t": 18, "s": [15.291, 18.453], "to": [0, 0.53], "ti": [0, -0.255] }, { "t": 29, "s": [15.291, 27.079] }], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 6, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 600, "st": 0, "bm": 0 }], "markers": [] }
    const container = this.el.querySelector('.drip');

    console.log(container)
    this.animation = lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      animationData: data,
    });

  }

  componentWillUnload() {
    lottie.destroy();
  }

  render() {
    return(
      <div>
        <div id="drip" class="drip"/>
      </div>
    )
  }
}