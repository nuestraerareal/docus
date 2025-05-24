// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'DiMex',
    description: 'El diccionario de los mexicanos.',
    image: 'https://github.com/nuestraerareal/docus/blob/cfeb981e43619eb6373cf70ffc10585217920fa2/public/cover.png',

    socials: {
      twitter: 'theunusher',
      github: 'nuestraerareal',
    },

    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
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
