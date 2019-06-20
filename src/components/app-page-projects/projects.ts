export interface Project {
  id: number;
  slug: string;
  coverImage?: string;
  heading: string;
  subHeading?: string;
  link?: string;
  tags?: string[];
  category?: string;
  details?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'react-native-sectioned-multi-select',
    coverImage: '/assets/projects/rnsms.png',
    heading: 'React Native Sectioned Multi Select',
    subHeading: 'A highly configurable select component for React Native',
    link: '',
    tags: ['React Native', 'Javscript'],
    category: 'library',
    details:
      '<p>A sectioned select modal component designed for child/parent lists (e.g category:sub-category)</p>\
      <p>This is my most popular open source project with 1200+ weekly downloads on NPM.</p>\
      <p><a href="https://github.com/renrizzolo/react-native-sectioned-multi-select">View repository</a>',
  },
  {
    id: 2,
    slug: 'react-native-swipeable-rating',
    coverImage: '/assets/projects/rnsr.png',
    heading: 'React Native Swipeable Rating',
    subHeading: 'A React Native star rating component with swipe & tap support',
    link: '',
    tags: ['React Native', 'Javscript'],
    category: 'library',
  },
  {
    id: 3,
    slug: 'casual-sparks',
    coverImage: '/assets/projects/casual-sparks.png',
    heading: 'Casual Sparks',
    subHeading: 'Record label website with custom Sound Cloud player',
    link: 'https://casualsparks.com',
    tags: ['Javscript', 'React', 'Gatsby'],
    category: 'website',
    details:
      '<p>A React + Gatsby site styled with SCSS, with some React Spring for animations.</p>\
      <p>I utilzied the React Context API to sync the release items play state to the global SoundCloud player.</p>\
      <p>The SoundCloud player includes playlist support, seeking and keyboard control.</p>\
      <p>The site is deployed on Netlify and uses Netlify CMS for creating & updating the markdown files.</p>',
  },
  {
    id: 4,
    slug: 'ren-rizzolo',
    coverImage: '/assets/projects/renrizzolo-web.png',
    heading: 'Ren Rizzolo',
    subHeading:
      'Simple portfolio site with custom route transitions component and colour theme picker',
    link: 'https://renrizzolo.com',
    tags: ['Javscript', 'Stencil JS', 'Web Components', 'CSS variables'],
    category: 'website',
    details: '<pre><code>InternalError: too much recursion</code></pre>',
  },
];
