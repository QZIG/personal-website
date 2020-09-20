<template lang="pug">
  div.container.container-p
    section(class="md:flex md:justify-between")
      div(style="max-width: 500px;")

        Title(text="A propos")

        p
          span.font-bold XAVIER COCHENNEC
          | , développeur full-stack PHP et Javascript
        
        p.
          Après plus de 10 ans en tant que prestataire informatique auprès de grands groupes internationaux, je me lance à présent en tant que développeur web freelance.
          Dans le cadre de projets personnels, j’ai déjà développé ou repris plusieurs sites (internet et intranet) pour des connaissances et associations.
          Autodidacte et polyvalent, je suis touche-à-tout et très curieux des nouvelles technologies avec une appétence particulière pour Javascript et la JAMstack.
          Dans le cadre de votre projet, nous étudierons quelle sera la meilleur solution à adopter, comment la mettre en place, et je vous donnerai toutes les clés pour que vous puissiez être autonome après sa mise en production.
        
        ul
          -
            var infos = [
              {
                type: "Email",
                url: "mailto:xaviercochennec@gmail.com",
                text: "xaviercochennec@gmail.com"
              },
              {
                type: "Téléphone",
                url: "tel:+33675727702",
                text: "+33 6 75 72 77 02"
              },
              {
                type: "Codeur.com",
                url: "https://www.codeur.com/-xavier_cochennec",
                text: "codeur.com/-xavier_cochennec"
              }
            ]
          //- pug loop
          each info in infos
            li
              Polygone
              | #{info.type}&nbsp;:
              |
              a(href=info.url rel="noreferrer") #{info.text}
        
        ul(class="rs flex items-center")
          //- vue loop
          li(v-for="(r, index) in rs" :key="index")
            a(:href="r.url" target="_blank" rel="noreferrer")
              img(:src="r.img" width="25" :alt="r.alt")
          
      div#me(class="hidden md:flex justify-center items-center -mt-16" style="min-width: 300px;")
        img(src="https://res.cloudinary.com/qzig/image/upload/w_400,f_auto/v1598084044/personal-website/me_yszxq0.png" alt="ma photo")

    section

      Title(text="Compétences")

      div(class="mt-8 flex flex-col items-center md:flex-row md:justify-evenly")
        Skilllang(class="mb-8 md:mb-0" :value="100" color="text-primary" label="français")
        Skilllang(:value="66" color="text-green-500" label="anglais")

    section
    
      Title(text="Loisirs")

      div(class="mt-8 md:flex justify-between items-center")
        Loisir(class="md:mr-2 mb-8 md:mb-0" title="e-sport" image="https://res.cloudinary.com/qzig/image/upload/w_500,f_auto/v1598084044/personal-website/esport_jt8phs.jpg")
        Loisir(class="md:ml-2" title="voyages" image="https://res.cloudinary.com/qzig/image/upload/w_500,f_auto/v1598084044/personal-website/voyages_mzyqoy.jpg")

      div(class="mt-8 md:flex justify-between items-center")
        Loisir(class="md:mr-2 mb-8 md:mb-0" title="gastronomie du monde" image="https://res.cloudinary.com/qzig/image/upload/w_500,f_auto/v1598084044/personal-website/gastronomie_sgk6qi.jpg")
        Loisir(class="md:ml-2" title="bd" image="https://res.cloudinary.com/qzig/image/upload/w_500,f_auto/v1598084044/personal-website/bd_t7m10x.jpg")

</template>

<script>
export default {
  head: {
    title: 'Xavier Cochennec',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'My personal website !'
      }
    ]
  },
  data () {
    return {
      rs: [
        {
          url: "https://twitter.com/PEC_QZIG",
          img: require("../assets/logos/Twitter_Social_Icon_Rounded_Square_Color.png"),
          alt: "logo twitter"
        },
        {
          url: "https://github.com/QZIG",
          img: require("../assets/logos/GitHub-Mark-32px.png"),
          alt: "logo github"
        },
        {
          url: "https://www.linkedin.com/in/xavier-cochennec-49b679a7/",
          img: require("../assets/logos/LI-In-Bug.png"),
          alt: "logo linkedin"
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
p, ul {
  @apply mt-8;
}
li {
  @apply font-bold;
}
.rs li {
  @apply mr-2;
}
a {
  @apply text-secondary;
}
</style>