// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'dicmex',
    description: 'El diccionario de los mexicanos.',
    image: 'https://raw.githubusercontent.com/nuestraerareal/docus/f7bb144beb9fcb30db545237a98c0e146ca707c3/public/cover.png',

    socials: {
      twitter: 'theunusher',
      github: 'nuestraerareal',
    },

    github: {
      dir: '/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuestraerareal',
      edit: true
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    main: {
      padded: true,
      fluid: true
    },

    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },

    footer: {
      credits: {
        icon: '',
        text: 'El diccionario libre.',
        href: ''
      }
    }
  }
})
