import { Component, h, Prop } from '@stencil/core';


@Component({
  tag: 'project-item',
  styleUrl: 'project-item.css',
  shadow: true,
})

export class ProjectItem {
  @Prop()
  post: {
    id: number,
    slug: string,
    coverImage: string,
    title: string,
  };

  render() {
    const post = {
      id: 1,
      slug: 'project1',
      coverImage: 'https://unsplash.it/400/200/?random',
      title: 'Project One',
    };

    return (
      <div
        class="project-item--container"
        key={`post-${post.id}`}
      >
        {post.coverImage &&
          <div class="project-item--image__wrapper">
          <stencil-route-link url={`/project/${post.slug}`}>
          <div class="project-item--image__overlay" />
              <figure itemprop="image" itemtype="https://schema.org/ImageObject" class="project-item--figure">
                <img
                  class="project-item--image"
                  alt={post.title}
                  src={post.coverImage}
                />
              </figure>
          </stencil-route-link>
          </div>
        }
        <div class={'project-item--heading__overlay'} />
        <section class="project-item--section">
          <h1 class="project-item--heading">
            <stencil-route-link url={`/post/${post.slug}`}>
            {post.title}
            </stencil-route-link>
          </h1>
        </section>
      </div>
    )
  }
}