import { r as registerInstance, B as Build, h, d as getElement } from './chunk-1de4f7ca.js';
import { l as lottie } from './chunk-7c035745.js';

class AppWave {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    // just leaving this here...
    // I was using the svg in background image
    // (to do repeat-x for infinite x scrolling animation)
    // and some hacks were required to add the correct fill colour
    // Then I decided to try doing the animation with Lottie
    //
    // @Listen('themeUpdated', { target: 'window' })
    // themeUpdated(event: CustomEvent) {
    //   console.log('Received the custom todoCompleted event: ', event.detail);
    //   this.updateFillColor();
    // }
    // updateFillColor() {
    //   this.fillColor = getComputedStyle(document.documentElement)
    //     .getPropertyValue('--color-secondary')
    //     .replace('#', '%23');
    // }
    componentDidLoad() {
        // thank u svg for being sandboxed 😏
        // this.updateFillColor();
        if (Build.isBrowser) {
            // prettier-ignore
            const data = { "v": "5.5.1", "fr": 24, "ip": 0, "op": 170, "w": 1920, "h": 1080, "nm": "Comp 1", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 3, "ty": 4, "nm": "wave Outlines", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.167, "y": 0.167 }, "t": 0, "s": [960, 759.75, 0], "to": [320.001, 0.042, 0], "ti": [-320.001, -0.042, 0] }, { "t": 171, "s": [2880.003, 760, 0] }], "ix": 2 }, "a": { "a": 0, "k": [150, 50, 0], "ix": 1 }, "s": { "a": 0, "k": [640, 640, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [26.5, -5.5], [47.203, 7.867], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [-44.683, 9.273], [-54, -9], [0, 0]], "v": [[-150, 32], [150, 32], [149.999, -10], [111.5, 0.5], [-33, -23], [-150.001, -10]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0, 0, 0, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 2", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [150.079, 68.083], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 7, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0, 0, 0, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "rp", "c": { "a": 0, "k": 2, "ix": 1 }, "o": { "a": 0, "k": 0, "ix": 2 }, "m": 2, "ix": 7, "tr": { "ty": "tr", "p": { "a": 0, "k": [-300, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "so": { "a": 0, "k": 100, "ix": 5 }, "eo": { "a": 0, "k": 100, "ix": 6 }, "nm": "Transform" }, "nm": "Repeater 1", "mn": "ADBE Vector Filter - Repeater", "hd": false }], "ip": 0, "op": 600, "st": 0, "bm": 0 }], "markers": [] };
            // prettier-ignore
            const data2 = { "v": "5.5.1", "fr": 24, "ip": 0, "op": 170, "w": 1920, "h": 1080, "nm": "Comp 1", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 3, "ty": 4, "nm": "wave Outlines 2", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.167, "y": 0.167 }, "t": 0, "s": [960, 759.75, 0], "to": [320.001, 0.042, 0], "ti": [-320.001, -0.042, 0] }, { "t": 171, "s": [2880.003, 760, 0] }], "ix": 2 }, "a": { "a": 0, "k": [150, 50, 0], "ix": 1 }, "s": { "a": 0, "k": [640, 640, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [26.5, -5.5], [47.203, 7.867], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [-44.683, 9.273], [-54, -9], [0, 0]], "v": [[-150, 32], [150, 32], [149.999, -10], [111.5, 0.5], [-33, -23], [-150.001, -10]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0, 0, 0, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 2", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [150.079, 68.083], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 7, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0, 0, 0, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "rp", "c": { "a": 0, "k": 2, "ix": 1 }, "o": { "a": 0, "k": 0, "ix": 2 }, "m": 2, "ix": 7, "tr": { "ty": "tr", "p": { "a": 0, "k": [-300, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "so": { "a": 0, "k": 100, "ix": 5 }, "eo": { "a": 0, "k": 100, "ix": 6 }, "nm": "Transform" }, "nm": "Repeater 1", "mn": "ADBE Vector Filter - Repeater", "hd": false }], "ip": 0, "op": 600, "st": 0, "bm": 0 }], "markers": [] };
            // const data2 = { "v": "5.5.1", "fr": 24, "ip": 0, "op": 170, "w": 1920, "h": 1080, "nm": "Comp 1", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 3, "ty": 4, "nm": "wave 2", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.167, "y": 0.167 }, "t": 0, "s": [960, 759.75, 0], "to": [348.001, 88.042, 0], "ti": [-320.001, -0.042, 0] }, { "t": 171, "s": [2880.003, 760, 0] }], "ix": 2 }, "a": { "a": 0, "k": [150, 50, 0], "ix": 1 }, "s": { "a": 0, "k": [640, 640, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [26.5, -5.5], [47.203, 7.867], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [-44.683, 9.273], [-54, -9], [0, 0]], "v": [[-150, 32], [150, 32], [149.999, -10], [111.5, 0.5], [-33, -23], [-150.001, -10]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0, 0, 0, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 2", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [150.079, 68.083], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 7, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0, 0, 0, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "rp", "c": { "a": 0, "k": 2, "ix": 1 }, "o": { "a": 0, "k": 0, "ix": 2 }, "m": 2, "ix": 7, "tr": { "ty": "tr", "p": { "a": 0, "k": [-300, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "so": { "a": 0, "k": 100, "ix": 5 }, "eo": { "a": 0, "k": 100, "ix": 6 }, "nm": "Transform" }, "nm": "Repeater 1", "mn": "ADBE Vector Filter - Repeater", "hd": false }], "ip": 0, "op": 600, "st": 0, "bm": 0 }], "markers": [] }
            // prettier-ignore
            const data3 = { "v": "5.5.1", "fr": 24, "ip": 0, "op": 170, "w": 1920, "h": 1080, "nm": "Comp 1", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 3, "ty": 4, "nm": "wave 3", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.562, "y": 0.312 }, "o": { "x": 0.189, "y": 0.249 }, "t": 0, "s": [960, 759.75, 0], "to": [136.521, 0.014, 0], "ti": [-291.499, -0.032, 0] }, { "i": { "x": 0.734, "y": 0.832 }, "o": { "x": 0.329, "y": 0.249 }, "t": 60, "s": [1627.955, 759.822, 0], "to": [444.856, 0.048, 0], "ti": [-389.327, -0.039, 0] }, { "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.425, "y": 0.716 }, "t": 121, "s": [3042.908, 759.968, 0], "to": [137.287, 0.014, 0], "ti": [-73.468, -0.007, 0] }, { "t": 170, "s": [3470.003, 760, 0] }], "ix": 2 }, "a": { "a": 0, "k": [150, 50, 0], "ix": 1 }, "s": { "a": 0, "k": [640, 640, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [26.5, -5.5], [47.203, 7.867], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [-44.683, 9.273], [-54, -9], [0, 0]], "v": [[-150, 32], [150, 32], [149.999, -10], [111.5, 0.5], [-33, -23], [-150.001, -10]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0, 0, 0, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 2", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [150.079, 80.083], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [131, 131], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 7, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0, 0, 0, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "rp", "c": { "a": 0, "k": 2, "ix": 1 }, "o": { "a": 0, "k": 0, "ix": 2 }, "m": 2, "ix": 7, "tr": { "ty": "tr", "p": { "a": 0, "k": [-393, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "so": { "a": 0, "k": 100, "ix": 5 }, "eo": { "a": 0, "k": 100, "ix": 6 }, "nm": "Transform" }, "nm": "Repeater 1", "mn": "ADBE Vector Filter - Repeater", "hd": false }], "ip": 0, "op": 600, "st": 0, "bm": 0 }], "markers": [] };
            const elements = this.el.querySelectorAll('.wave');
            console.log(elements[0], elements[1], elements[2]);
            const wave1 = lottie.loadAnimation({
                container: elements[0],
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: data,
            });
            wave1.setSpeed(0.5);
            const wave2 = lottie.loadAnimation({
                container: elements[1],
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: data2,
            });
            wave2.setSpeed(0.45);
            const wave3 = lottie.loadAnimation({
                container: elements[2],
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: data3,
            });
            wave3.setSpeed(0.5);
        }
    }
    render() {
        console.log('waverenders');
        return (h("div", null, h("div", { class: `wave ${this.class}` }), h("div", { class: `wave ${this.class}` }), h("div", { class: `wave ${this.class}` })));
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  --wave-size: 600;\n  --intro-text-translate: 25;\n  z-index: 1;\n}\n.wave.wave--flipped {\n  top: -10px;\n  bottom: unset;\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.wave {\n  /* width: 100%; */\n  /* height: calc(var(--wave-size) * 1px); */\n  position: absolute;\n  bottom: -10px;\n  left: 0;\n  right: 0;\n  mix-blend-mode: screen;\n  /* background-size: calc(var(--wave-size) * 1px * 5); */\n  /* background-repeat: repeat-x; */\n  /* animation: bg-pos 15s linear forwards infinite; */\n}\n.wave svg {\n  min-width: 1000px;\n  width: 100%;\n  height: 100%;\n}\n.wave svg path {\n  fill: var(--color-secondary);\n  stroke: var(--color-secondary);\n}\n.wave:nth-of-type(1) {\n  mix-blend-mode: hue;\n  /* height: calc(var(--wave-size) * 1.1px); */\n}\n.wave:nth-of-type(2) {\n  mix-blend-mode: screen;\n  /* width: calc(var(--wave-size) * 1.2px); */\n  /* background-size: calc(var(--wave-size) * 1.2px * 5); */\n  /* animation: bg-pos-2 15s linear forwards infinite; */\n}\n\n\@-webkit-keyframes bg-pos {\n  0% {\n    background-position: 0% 75%;\n  }\n  50% {\n    background-position: calc(var(--wave-size) * 2px) 75%;\n  }\n  100% {\n    background-position: calc(var(--wave-size) * 1px * 5) 75%;\n  }\n}\n\n\@keyframes bg-pos {\n  0% {\n    background-position: 0% 75%;\n  }\n  50% {\n    background-position: calc(var(--wave-size) * 2px) 75%;\n  }\n  100% {\n    background-position: calc(var(--wave-size) * 1px * 5) 75%;\n  }\n}\n\@-webkit-keyframes bg-pos-2 {\n  0% {\n    background-position: 0% 75%;\n  }\n  50% {\n    background-position: calc(var(--wave-size) * 2px) 75%;\n  }\n  100% {\n    background-position: calc(var(--wave-size) * 1.2px * 5) 75%;\n  }\n}\n\@keyframes bg-pos-2 {\n  0% {\n    background-position: 0% 75%;\n  }\n  50% {\n    background-position: calc(var(--wave-size) * 2px) 75%;\n  }\n  100% {\n    background-position: calc(var(--wave-size) * 1.2px * 5) 75%;\n  }\n}"; }
}

export { AppWave as app_wave };
