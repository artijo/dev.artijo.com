export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'ARTIJO • DEV',
    subtitle: 'Web Developer & Tech Enthusiast',
    description: `I'm a web developer and a tech enthusiast. I write about web development, programming, and tech.`,
    image: {
        src: '/preview.jpg',
        alt: 'artijo.dev preview image'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Posts',
            href: '/post'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Privacy Policy',
            href: 'https://privacy.artijo.com/'
        },
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/artijo'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/artijo_'
        }
    ],
    hero: {
        title: "Hi, I'm Artijo! 👋",
        text: "I'm a web developer and a tech enthusiast. I write about web development, programming, and tech.",
        // image: {
        //     src: '/hero.jpeg',
        //     alt: 'A person sitting at a desk in front of a computer'
        // },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
