import projectsJson from '../../api/projects.json'

export interface Project {
  id: number | string;
  slug: string;
  coverImage?: string;
  heading: string;
  subHeading?: string;
  link?: string;
  tags?: string[];
  category?: string;
  details?: string;
}
export const projects: Project[] = projectsJson;

// this is my CMS

// export const projectz: Project[] = [
//   {
//     id: 1,
//     slug: 'react-native-sectioned-multi-select',
//     coverImage: '/assets/projects/rnsms.png',
//     heading: 'React Native Sectioned Multi Select',
//     subHeading: 'A highly configurable select component for React Native',
//     link: 'https://npmjs.com/package/react-native-sectioned-multi-select',
//     tags: ['React Native', 'Javscript'],
//     category: 'library',
//     details:
//       '<p>A sectioned select modal component designed for child/parent lists (e.g category:sub-category)</p>\
//       <p>This is my most popular open source project with 1200+ weekly downloads on NPM.</p>',
//   },
//   {
//     id: 2,
//     slug: 'react-native-swipeable-rating',
//     coverImage: '/assets/projects/rnsr.png',
//     heading: 'React Native Swipeable Rating',
//     subHeading: 'A React Native star rating component with swipe & tap support',
//     link: 'https://npmjs.com/package/react-native-swipeable-rating',
//     tags: ['React Native', 'Javscript'],
//     category: 'library',
//     details:
//       '<p>A star rating component for React Native.</p>\
//       <p>Stars can be either tapped or swiped through to select the desired rating.</p>',
//   },
//   {
//     id: 3,
//     slug: 'casual-sparks',
//     coverImage: '/assets/projects/casual-sparks.png',
//     heading: 'Casual Sparks',
//     subHeading: 'Record label website with custom Sound Cloud player',
//     link: 'https://casualsparks.com',
//     tags: ['Javscript', 'React', 'Gatsby'],
//     category: 'website',
//     details:
//       '<p>A React + Gatsby site styled with SCSS, with some React Spring for animations.</p>\
//       <p>I utilzied the React Context API to sync the release items play state to the global SoundCloud player.</p>\
//       <p>The SoundCloud player includes playlist support, seeking and keyboard control.</p>\
//       <p>The site is deployed on Netlify and uses Netlify CMS for creating & updating the markdown files.</p>',
//   },
//   {
//     id: 4,
//     slug: 'ren-rizzolo',
//     coverImage: '/assets/projects/renrizzolo-web.png',
//     heading: 'Ren Rizzolo',
//     subHeading:
//       'Simple portfolio site with custom route transitions component and colour theme picker',
//     link: 'https://renrizzolo.com',
//     tags: ['Javscript', 'Stencil JS', 'CSS variables'],
//     category: 'website',
//     details: '<pre><code>InternalError: too much recursion</code></pre>', // jokes
//   },
//   {
//     id: 5,
//     slug: 'property-weekly',
//     coverImage: '/assets/projects/property-weekly.png',
//     heading: 'Property Weekly',
//     subHeading: 'Bespoke Realestate website built on WordPress',
//     link: 'https://propertyWeekly.net.au',
//     tags: ['WordPress', 'Bootstrap', 'Jquery', 'SCSS', 'grunt'],
//     category: 'website',
//     details:
//       '<p>Fully custom WordPress theme + plugins + widgets. Uses the RealestateView API for Australian Realestate listing data. Listings search with map view. Virtual pages for property listings. PDFJS based print edition browser.</p>',
//   },
//   {
//     id: 6,
//     slug: 'subscribe-jewishnews',
//     coverImage: '/assets/projects/subscribe-jewishnews.png',
//     heading: 'Jewish News Subscriptions',
//     subHeading: 'Subscriptions platform for The Australian Jewish News',
//     link: 'https://subscribe.jewishnews.net.au',
//     tags: ['Bootstrap', 'Jquery', 'SCSS', 'grunt'],
//     category: 'website',
//     details:
//       '<p>Online & print subscriptions website built with membership framework Amember. Uses Stripe for payments with recurring subscriptions. Grants digital access to apps & online epaper through an API.</p>',
//   },
//   {
//     id: 7,
//     slug: 'pdfs-jewishnews',
//     coverImage: '/assets/projects/pdfs-screen.png',
//     heading: 'Jewish News PDFs',
//     subHeading: 'PDF repository for finding & disseminating supplements & tear sheets.',
//     link: '',
//     tags: ['nodeJS', 'postgresQL', 'React', 'Apollo', 'graphql', 'AWS'],
//     category: 'Website',
//     details:
//       '<p>React PWA with code splitting & server side rendering.</p>\
//       <p>PDF viewer & catalog, S3 storage, server side pdf processing/compression/collation, thumbnail generation, postgresql -> graphql schema via Postgraphile, JWT authentication, link shortening.</p>',
//   },
//   {
//     id: 8,
//     slug: 'lightgallery-for-gutenberg',
//     coverImage: '/assets/projects/lightgallery-for-gutenberg.png',
//     heading: 'Lightgallery for Gutenberg',
//     subHeading: 'WordPress Gutenberg gallery plugin',
//     link: 'https://github.com/renrizzolo/light-gallery-for-gutenberg',
//     tags: ['WordPress', 'PHP', 'React', 'Gutenberg'],
//     category: 'library',
//     details: '<p>Slider and full screen gallery plugin for Wordpress Gutenberg editor. </p>',
//   },
// ];
