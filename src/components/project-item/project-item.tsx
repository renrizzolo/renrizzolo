import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'project-item',
  styleUrl: 'project-item.css',
  shadow: true,
})
export class ProjectItem {
  @Prop()
  post: {
    id: number;
    slug: string;
    coverImage?: string;
    heading: string;
    subHeading?: string;
    link?: string;
    tags?: string[];
    category?: string;
  };

  render() {
    // const post = {
    //   id: 1,
    //   slug: 'project1',
    //   // coverImage: 'https://picsum.photos/id/995/400/200',
    //   heading: 'React Native Sectioned Multi Select',
    //   subHeading: 'A highly configurable select component for React Native',
    // };
    const post = this.post;
    return (
      <div class="project-item--container" key={`post-${post.id}`}>
        {post.coverImage && (
          <div class="project-item--image__wrapper">
            <stencil-route-link url={`/project/${post.slug}`}>
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
          <div class="tags-container">
            {post.tags && post.tags.map((tag) => <span class="tag">{tag}</span>)}
          </div>
          <h1 class="project-item--heading">
            <stencil-route-link url={`/post/${post.slug}`}>{post.heading}</stencil-route-link>
          </h1>
          <p class="project-item--subheading">{post.subHeading}</p>
        </section>
      </div>
    );
  }
}
