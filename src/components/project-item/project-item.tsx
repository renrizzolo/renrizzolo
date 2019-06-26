import { Component, h, Prop, State } from '@stencil/core';
import { Project } from '../app-page-projects/projects';

@Component({
  tag: 'project-item',
  styleUrl: 'project-item.css',
  shadow: true,
})
export class ProjectItem {
  @Prop()
  fullSize: boolean = false;
  @Prop()
  post: Project;
  @Prop()
  mounted: boolean;
  @Prop()
  delay: number;
  @State()
  ready: boolean = false;

  // determines when
  // the parent transition
  // has finished
  // so we can start this
  // component's transitions
  componentDidLoad() {
    setTimeout(() => {
      this.ready = true;
    }, this.delay);
  }

  render() {
    const post = this.post;
    const url = !this.fullSize ? `/project/${post.slug}` : null;
    return (
      <div
        class={`project-item--container ${this.fullSize ? 'full-size' : ''}`}
        key={`post-${post.id}`}
      >
        {post.coverImage && (
          <div class="project-item--image__wrapper">
            <stencil-route-link url={url}>
              <div class="project-item--image__overlay" />
              <figure
                itemprop="image"
                itemtype="https://schema.org/ImageObject"
                class="project-item--figure"
              >
                <img class="project-item--image" alt={post.heading} src={post.coverImage} />
              </figure>
            </stencil-route-link>
          </div>
        )}
        <div class={'project-item--heading__overlay'} />
        <section class="project-item--info">
          <transition-group
            wrapper={'span'}
            wrapperProps={{ class: 'tags-container' }}
            keys={(item) => item.$key$}
            config={{ duration: 550, timing: 'ease', delay: 150 }}
            mounted={this.ready}
            trail
            from={{ opacity: '0', transform: 'translateX(5px)' }}
            enter={{ opacity: '1', transform: 'translateX(0px)' }}
            leave={{ opacity: '0', transform: 'translateX(5px)' }}
            items={
              post.tags &&
              post.tags.map((tag) => (
                <span key={tag} class="tag">
                  {tag}
                </span>
              ))
            }
          />
          <transition-group
            config={{ duration: 250, timing: 'woosh', delay: 150 }}
            mounted={this.ready}
            from={{ opacity: '0', transform: 'translateX(15px)' }}
            enter={{ opacity: '1', transform: 'translateX(0px)' }}
            leave={{ opacity: '0', transform: 'translateX(15px)' }}
            items={[
              this.fullSize ? (
                <h1 class="project-item--heading">{post.heading}</h1>
              ) : (
                <h1 class="project-item--heading">
                  <stencil-route-link url={url}>{post.heading}</stencil-route-link>
                </h1>
              ),
            ]}
          />

          <div>
            <p class="project-item--subheading">{post.subHeading}</p>
            {this.fullSize && <div innerHTML={post.details} />}
          </div>
        </section>
      </div>
    );
  }
}
