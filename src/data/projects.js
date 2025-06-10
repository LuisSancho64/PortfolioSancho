import gadmaImage from '../assets/gadma.png';
import smedImage from '../assets/smed.png';

const data = [
  {
    id: '1',
    title: 'GADMA Web Site',
    description:
      'Redesign of the Ambato Municipality web portal, using modern technologies to change the appearance of the page in such a way that it looks modern and at the same time is functional with the services it already had.',
    image: {
      src: gadmaImage,
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://ambato.gob.ec/',
    },
    technologies: [
      '#typescript',
      '#javascript',
      '#WordPress',
      '#Oracle',
      '#Node JS',
      '#CSS',

    ],
  },
  {
    id: '2',
    title: 'SMED Medical System Integrated',
    description:
      'An integrated medical system for the Technical University of Ambato that meets services and functionalities of several health departments.',
    image: {
      src: smedImage,
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      repo: 'https://github.com/tolypash/react-native-yoco',
    },
    technologies: [
      '#Blazor',
      '#C#',
      '#Bootstrap',
      '#Clean Architechture',
      '#WASM',
      '#CSS',
      '#NET Core',
      '#payments',
      '#sdk',
    ],
  },
  {
    id: '3',
    title: 'Bank Simulator',
    description:
      'The implemented bank simulator is a system that allows to simulate investments and consult amortization tables in different formats in addition to being 100 percent customizable.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1671564532/portfolio/projects/Syntho/Screenshot_2022-12-20_at_21.26.17_1_c59hzo.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://apps.apple.com/us/app/syntho/id1615419392',
    },
    technologies: [
      '#typescript',
      '#react-native',
      '#react-native-web',
      '#mobx-state-tree',
      '#expo',
      '#mysql workbench',
      '#react-navigation',
      '#sentry',
    ],
  }/*,
  {
    id: '4',
    title: 'Minfin - Currency Rates',
    description:
      'Minfin Currency - application with all necessary information about currency: from currency rates - to the nearest places where you can exchange currency in your city.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1671563302/portfolio/projects/minfin/Screenshot_2022-12-20_at_21.06.43_vl5h6k.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://apps.apple.com/us/app/minfin-currency-rates/id1574863878',
    },
    technologies: [
      '#typescript',
      '#react-native',
      '#mobx-keystone',
      '#i18next',
      '#firebase-analytics',
      '#google-maps',
    ],
  },
  {
    id: '5',
    title: 'Apiko Marketplace',
    description:
      'An online marketplace made with React. The project was developed on 8th Apiko Intensive.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348072/portfolio/projects/react-marketplace/apiko-marketplace-lg_xppe9n.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      repo: 'https://github.com/vsnaichuk/apiko-marketplace-app',
    },
    technologies: [
      '#react',
      '#redux',
      '#socket.io',
      '#scss',
      '#formik',
      '#react-window',
      '#restapi',
    ],
  },
  {
    id: '6',
    title: 'eCommerce Mobile App',
    description:
      'A Mobile eCommerce application built with React Native that includes cart functionality, push notifications, user authentication and user orders',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/rn-shop/rn-shop-lg_fofglf.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      repo: 'https://github.com/vsnaichuk/RN-shop',
    },
    technologies: [
      '#react-native',
      'expo',
      '#redux',
      '#redux-toolkit',
      '#react-navigation',
      '#nodejs',
      '#express',
      '#mongodb',
    ],
  },/*/
];

export default data;