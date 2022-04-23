import { Component, h, Prop, State } from "@stencil/core";
import { Project } from "../app-page-projects/projects";
import arrow from "../../icons/arrow.json";

@Component({
  tag: "project-item",
  styleUrl: "project-item.css",
  shadow: true,
})
export class ProjectItem {
  @Prop()
  type: string = "";
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
    const url = !this.type && post ? `/project/${post.slug}` : null;
    return post ? (
      <article
        class={`project-item--container ${this.type}`}
        key={`post-${post.id}`}
      >
        {post.coverImage && (
          <div class="project-item--image__wrapper">
            {!this.type ? (
              <stencil-route-link url={url}>
                <div class="project-item--image__overlay" />
                <figure
                  itemprop="image"
                  itemtype="https://schema.org/ImageObject"
                  class="project-item--figure"
                >
                  <img
                    class="project-item--image"
                    alt={post.heading}
                    src={post.coverImage}
                  />
                </figure>
              </stencil-route-link>
            ) : (
              <div>
                <figure
                  itemprop="image"
                  itemtype="https://schema.org/ImageObject"
                  class="project-item--figure"
                >
                  <img
                    class="project-item--image"
                    alt={post.heading}
                    src={post.coverImage}
                  />
                </figure>
              </div>
            )}
          </div>
        )}
        <div class={"project-item--heading__overlay"}></div>
        <svg class="wave-clip-svg" width="0" height="0">
          <defs>
            <clipPath id="wave-clip" clipPathUnits="objectBoundingBox">
              <path
                transform="scale(0.0013, 0.00254)"
                d="M0,109.5c0,0,96.9-26.7,329.5,6.6C492,139.4,625.1,160,775.7,150.8c144.9-8.9,248.3-33.7,248.3-33.7V512H0L0,109.5z"
              />
            </clipPath>
          </defs>
        </svg>
        <section class="project-item--info">
          {this.prev && (
            <ui-button
              button
              title={`Previous: ${this.prev.heading}`}
              iconPos={"left"}
              icon={arrow}
              url={`/project/${this.prev.slug}`}
              class="link-prev abs abs--left flex-center"
            >
              <div class="link-info">Previous: {this.prev.heading}</div>
              <div class="project-item--preview-container prev">
                <project-item type="preview" post={this.prev} mounted={true} />
              </div>
            </ui-button>
          )}
          {this.next && (
            <ui-button
              button
              icon={arrow}
              title={`Next: ${this.next.heading}`}
              url={`/project/${this.next.slug}`}
              class="link-next abs abs--right flex-center"
            >
              <div class="link-info">Next: {this.next.heading}</div>
              <div class="project-item--preview-container next">
                <project-item type="preview" post={this.next} mounted={true} />
              </div>
            </ui-button>
          )}
          <div class="tags-container">
            {post.tags &&
              post.tags.map((tag) => (
                <span key={tag} class="hash-tag">
                  #{tag}
                </span>
              ))}
          </div>
          {this.type !== "full-size" && (
            <transition-group
              config={{ duration: 250, timing: "woosh", delay: 150 }}
              mounted={this.ready}
              from={{ opacity: "0", transform: "translateX(7px)" }}
              enter={{ opacity: "1", transform: "translateX(0px)" }}
              leave={{ opacity: "0", transform: "translateX(7px)" }}
              items={[
                <h4 class="project-item--heading">
                  {!this.type ? (
                    <stencil-route-link url={url}>
                      {post.heading}
                    </stencil-route-link>
                  ) : (
                    post.heading
                  )}
                </h4>,
              ]}
            />
          )}
          <div>
            {!this.type && (
              <transition-group
                wrapper={"span"}
                keys={(item) =>
                  item.$ ? item.$.key : item.h ? item.h.key : item.$key$
                }
                config={{ duration: 550, timing: "ease", delay: 150 }}
                mounted={this.ready}
                trail
                from={{ opacity: "0", transform: "translateX(5px)" }}
                enter={{ opacity: "1", transform: "translateX(0px)" }}
                leave={{ opacity: "0", transform: "translateX(5px)" }}
                items={[
                  <p class="project-item--subheading">{post.subHeading}</p>,
                ]}
              />
            )}

            {this.type === "full-size" && (
              <div itemprop="articleBody">
                <section class="details">
                  <div innerHTML={post.details} />
                </section>
                {post.link && (
                  <ui-button
                    class="color--dark project-link"
                    external
                    icon={{}}
                    href={post.link}
                  >
                    View
                  </ui-button>
                )}
              </div>
            )}
          </div>
        </section>
      </article>
    ) : (
      "loading"
    );
  }
}
