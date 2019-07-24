import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ui-grid',
  styleUrl: 'ui-grid.css',
  shadow: false,
})
export class UiGrid {
  @Prop()
  class?: string;
  @Prop()
  cols: 1 | 2 | 3 | 4 = 1;
  @Prop()
  gap: 0 | 1 | 2 | 3 | 4 = 0;

  render() {
    return (
      <div class={`grid grid--cols-${this.cols} grid--gap-${this.gap} ${this.class}`}>
        <slot />
      </div>
    );
  }
}
