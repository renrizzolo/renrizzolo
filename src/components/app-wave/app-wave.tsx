import { Component, Element, Prop, State, h } from "@stencil/core";

@Component({
  tag: "app-wave",
  styleUrl: "app-wave.css",
  shadow: false,
})
export class AppWave {
  @Prop() class: string;
  @State() disableWave: string = localStorage.getItem("disableWave") || "false";
  @State() fillColor: string;
  @Element() el!: HTMLElement;

  toggleWave = () => {
    this.disableWave === "true" ? this.startWave() : this.stopWave();
  };

  stopWave = () => {
    this.disableWave = "true";
    localStorage.setItem("disableWave", "true");
  };

  startWave = () => {
    this.disableWave = "false";
    localStorage.setItem("disableWave", "false");
  };

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
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      this.disableWave = "true";
      localStorage.setItem("disableWave", "true");
    }
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", () => {
        if (mediaQuery.matches) {
          this.disableWave = "true";
          localStorage.setItem("disableWave", "true");
        } else {
          this.disableWave = "false";
          localStorage.setItem("disableWave", "false");
        }
      });
    }
  }

  render() {
    return (
      <div>
        <ui-button
          class={`button-disable-wave abs--bottom-left`}
          clickHandler={this.toggleWave}
        >
          {this.disableWave === "true" ? "Play" : "Staaaaahhhp"}
        </ui-button>
        <div class={"wave-container"}>
          {Array.from(Array(3)).map((_, i) => (
            <div class={`wave ${this.class}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1920 1080"
                width="1920"
                height="1080"
                preserveAspectRatio="xMidYMid meet"
                style={{
                  width: "100%",
                  height: "100%",
                  transform: "translate3d(0px, 0px, 0px)",
                  contentVisibility: "visible",
                }}
              >
                <g>
                  <g
                    class={`wave-animate-base wave-animate ${
                      this.disableWave === "true" ? "wave-animate-paused" : ""
                    } wave-${i + 1}`}
                    opacity="1"
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(0,0,0)"
                        fill-opacity="1"
                        d=" M0.08,100.08 C0.08,100.08 300.08,100.08 300.08,100.08 C300.08,100.08 300.08,58.08 300.08,58.08 C300.08,58.08 288.08,63.08 261.58,68.58 C216.9,77.86 164.28,52.95 117.08,45.08 C63.08,36.08 0.08,58.08 0.08,58.08 C0.08,58.08 0.08,100.08 0.08,100.08z"
                      ></path>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,150.07899475097656,68.08300018310547)"
                      >
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="4"
                          stroke="rgb(0,0,0)"
                          stroke-opacity="1"
                          stroke-width="1"
                          d=" M-150,32 C-150,32 150,32 150,32 C150,32 149.99899291992188,-10 149.99899291992188,-10 C149.99899291992188,-10 138,-5 111.5,0.5 C66.81700134277344,9.77299976348877 14.20300006866455,-15.133000373840332 -33,-23 C-87,-32 -150.00100708007812,-10 -150.00100708007812,-10 C-150.00100708007812,-10 -150,32 -150,32z"
                        ></path>
                      </g>
                    </g>
                    <g opacity="1" transform="matrix(1,0,0,1,-300,0)">
                      <path
                        fill="rgb(0,0,0)"
                        fill-opacity="1"
                        d=" M0.08,100.08 C0.08,100.08 300.08,100.08 300.08,100.08 C300.08,100.08 300.08,58.08 300.08,58.08 C300.08,58.08 288.08,63.08 261.58,68.58 C216.9,77.86 164.28,52.95 117.08,45.08 C63.08,36.08 0.08,58.08 0.08,58.08 C0.08,58.08 0.08,100.08 0.08,100.08z"
                      ></path>
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,150.07899475097656,68.08300018310547)"
                      >
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="4"
                          stroke="rgb(0,0,0)"
                          stroke-opacity="1"
                          stroke-width="1"
                          d=" M-150,32 C-150,32 150,32 150,32 C150,32 149.99899291992188,-10 149.99899291992188,-10 C149.99899291992188,-10 138,-5 111.5,0.5 C66.81700134277344,9.77299976348877 14.20300006866455,-15.133000373840332 -33,-23 C-87,-32 -150.00100708007812,-10 -150.00100708007812,-10 C-150.00100708007812,-10 -150,32 -150,32z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

//the original css background image svg
// const Wave = (props) => (
//   <div
//     class={`wave ${props.class}`}
//     style={{
//       backgroundImage: `url(\"data:image/svg+xml;utf8,<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 300 100' style='enable-background:new 0 0 300 100;' xml:space='preserve'><path fill='${
//         props.fillColor
//       }' d='M0,100l0-42c0,0,63-22,117-13c47.2,7.9,99.8,32.8,144.5,23.5C288,63,300,58,300,58l0,42H0z'></path></svg>\")`,
//     }}
//   />
// );
