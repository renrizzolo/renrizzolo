import { Component, h, Prop, State } from '@stencil/core';
import { Project } from '../app-page-projects/projects';
import arrow from '../../icons/arrow.json';

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
  @Prop()
  next: Project;
  @Prop()
  prev: Project;
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
    window.scrollTo(0, 0);
  }

  render() {
    const post = this.post;
    const url = !this.fullSize && post ? `/project/${post.slug}` : null;
    return post ? (
      <article
        class={`project-item--container ${this.fullSize ? 'full-size' : ''}`}
        key={`post-${post.id}`}
      >
    
        {post.coverImage && (
          <div class="project-item--image__wrapper">
            {!this.fullSize ? (
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
            ) : (
              <div>
                <figure
                  itemprop="image"
                  itemtype="https://schema.org/ImageObject"
                  class="project-item--figure"
                >
                  
                  <img class="project-item--image" alt={post.heading} src={post.coverImage} />
                </figure>
              </div>
            )}
          </div>
        )}
        <div class={'project-item--heading__overlay'} />
        <section class="project-item--info">
          {this.prev && (
            <ui-button
              button
              icon={arrow}
              url={`/project/${this.prev.slug}`}
              class="link-prev abs abs--left flex-center"
            />
          )}
          {this.next && (
            <ui-button
              button
              icon={arrow}
              url={`/project/${this.next.slug}`}
              class="link-next abs abs--right flex-center"
            />
          )}
          <div class="tags-container">
            {post.tags &&
              post.tags.map((tag) => (
                <span key={tag} class="tag">
                  {tag}
                </span>
              ))}
          </div>
          {!this.fullSize && (
            <transition-group
              config={{ duration: 250, timing: 'woosh', delay: 150 }}
              mounted={this.ready}
              from={{ opacity: '0', transform: 'translateX(7px)' }}
              enter={{ opacity: '1', transform: 'translateX(0px)' }}
              leave={{ opacity: '0', transform: 'translateX(7px)' }}
              items={[
                <h1 class="project-item--heading">
                  <stencil-route-link url={url}>{post.heading}</stencil-route-link>
                </h1>,
              ]}
            />
          )}
          <div>
            {!this.fullSize && (
              <transition-group
                wrapper={'span'}
                keys={(item) => (item.$ ? item.$.key : item.h ? item.h.key : item.$key$)}
                config={{ duration: 550, timing: 'ease', delay: 150 }}
                mounted={this.ready}
                trail
                from={{ opacity: '0', transform: 'translateX(5px)' }}
                enter={{ opacity: '1', transform: 'translateX(0px)' }}
                leave={{ opacity: '0', transform: 'translateX(5px)' }}
                items={[<p class="project-item--subheading">{post.subHeading}</p>]}
              />
            )}

            {this.fullSize && (
              <div>
                <section class="details">
                  <div innerHTML={post.details} />
                </section>
                {post.link && (
                  <ui-button button external icon={{}} href={post.link}>
                    View
                  </ui-button>
                )}
              </div>
            )}
          </div>
        </section>
      </article>
    ) : (
      'loading'
    );
  }
}
