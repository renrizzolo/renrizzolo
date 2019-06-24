import { Component, h, Prop } from '@stencil/core';
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

  render() {
    const post = this.post;
    const url = !this.fullSize ? `/project/${post.slug}` : null;
    !this.post && null;
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
            config={{ duration: 600, timing: 'ease', delay: 0 }}
            mounted={true}
            from={{transform: 'translateX(-5px)'}}
            enter={{ transform: 'translateX(0px)'}}
            leave={{ transform: 'translateX(5px)' }}
            items={[<div class="tags-container">
            {post.tags && post.tags.map((tag) => <span class="tag">{tag}</span>)}
          </div>]}
          />
          {!this.fullSize && (
            <h1 class="project-item--heading">
              <stencil-route-link url={url}>{post.heading}</stencil-route-link>
            </h1>
          )}

          <div>
            <p class="project-item--subheading">{post.subHeading}</p>
            {this.fullSize && <div innerHTML={post.details} />}
          </div>
        </section>
      </div>
    );
  }
}
