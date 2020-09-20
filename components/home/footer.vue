<template lang="pug">
  footer.mt-12.w-full.bg-black
    div.container.container-p.text-white
      p
        | Site développé avec
        |
        a(href="https://nuxtjs.org" target="_blank" rel="noreferrer") Nuxtjs
        |
        | et
        |
        a(href="https://tailwindcss.com/" target="_blank" rel="noreferrer") Tailwindcss
        | , hébergé sur
        |
        a(href="https://www.netlify.com/" target="_blank" rel="noreferrer") Netlify

      p
        | Image du header faite par
        |
        a(href="https://pixabay.com/fr/users/Pexels-2286921/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1283624" target="_blank" rel="noreferrer") Pexels
        |
        | de <a href="https://pixabay.com/fr/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1283624" target="_blank" rel="noreferrer">Pixabay</a></p>
  
      p Les autres images sont ma propriété.

</template>

<style lang="css" scoped>
a {
  @apply text-primary;
}
</style>