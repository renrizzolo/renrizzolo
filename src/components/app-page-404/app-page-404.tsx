import { Component, h } from "@stencil/core";

@Component({
  tag: "app-page-404",
  styleUrl: "app-page-404.css",
  shadow: true,
})
export class catch404 {
  render() {
    return (
      <app-background>
        <ui-container>
          <div class="page-404">
            <h1>404</h1>
            <p>Sorry, that page wasn't found.</p>
            <ui-button url="/" button>
              Back to land
            </ui-button>
          </div>
        </ui-container>
      </app-background>
    );
  }
}
