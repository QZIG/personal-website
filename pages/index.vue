<template>
  <div class="container container-p">
    <section class="md:flex md:justify-between">
      <div style="max-width: 500px;">
        <Title text="A propos" />

        <p><span class="font-bold">XAVIER COCHENNEC</span>, développeur full-stack PHP et Javascript</p>

        <p>
          Après plus de 10 ans en tant que prestataire informatique auprès de grands groupes internationaux, je me lance à présent en tant que développeur web freelance.

          Dans le cadre de projets personnels, j’ai déjà développé ou repris plusieurs sites (internet et intranet) pour des connaissances et associations.

          Autodidacte et polyvalent, je suis touche-à-tout et très curieux des nouvelles technologies avec une appétence particulière pour Javascript et la JAMstack.

          Dans le cadre de votre projet, nous étudierons quelle sera la meilleur solution à adopter, comment la mettre en place, et je vous donnerai toutes les clés pour que vous puissiez être autonome après sa mise en production.
        </p>
      
        <ul>
          <li><Polygone />Email&nbsp;: <a href="mailto:xaviercochennec@gmail.com">xaviercochennec@gmail.com</a></li>
          <li><Polygone />Téléphone&nbsp;: <a>+33 6 75 72 77 02</a></li>
          <li><Polygone />Codeur.com&nbsp;: <a href="https://www.codeur.com/-xavier_cochennec" target="_blank">codeur.com/&dash;xavier_cochennec</a></li>
        </ul>

        <ul class="rs flex items-center">
          <li><a href="https://twitter.com/PEC_QZIG" target="_blank">
            <img src="~assets/logos/Twitter_Social_Icon_Rounded_Square_Color.png" width="25" alt="logo twitter">
          </a></li>
          <li><a href="https://github.com/QZIG" target="_blank">
            <img src="~assets/logos/GitHub-Mark-32px.png" width="25" alt="logo github">
          </a></li>
          <li><a href="https://www.linkedin.com/in/xavier-cochennec-49b679a7/" target="_blank">
            <img src="~assets/logos/LI-In-Bug.png" width="25" alt="logo linkedin">
          </a></li>
        </ul>
      </div>
      <div id="me" class="hidden md:block">
        <img src="https://res.cloudinary.com/qzig/image/upload/w_400,f_auto/v1598084044/personal-website/me_yszxq0.png" alt="ma photo">
      </div>
    </section>

    <section>
      <Title text="Compétences" />
      <div class="mt-8 max-w-screen-md">
        <Skillbar label="VueJS / NuxtJS" color="bg-green-400" buttonColor="bg-green-700" :value="90" />
        <Skillbar label="NodeJS / ExpressJS" color="bg-orange-400" buttonColor="bg-orange-700" :value="70" />
        <Skillbar label="ReactJS / Redux / Redux-Thunk / React-Native" color="bg-blue-400" buttonColor="bg-bg-700" :value="80" />
        <Skillbar label="Wordpress / Spip / Symfony 3&4" color="bg-red-400" buttonColor="bg-red-700" :value="60" />
        <Skillbar label="Firebase / Strapi / Prismic" color="bg-yellow-400" buttonColor="bg-yellow-700" :value="85" />
        <Skillbar label="MySQL / PostgreSQL / NoSQL" color="bg-pink-400" buttonColor="bg-pink-700" :value="70" />
      </div>
    </section>

    <section>
      <Title text="Langues" />
      <div class="mt-8 flex flex-col items-center md:flex-row md:justify-evenly">
        <Skilllang class="mb-8 md:mb-0" :value="100" color="text-primary" label="français" />
        <Skilllang :value="66" color="text-green-500" label="anglais" />
      </div>
    </section>

    <section>
      <Title text="Loisirs" />
      <div class="mt-8 md:flex justify-between items-center">

        <Loisir class="md:mr-2 mb-8 md:mb-0" title="e-sport" image="https://res.cloudinary.com/qzig/image/upload/w_500,f_auto/v1598084044/personal-website/esport_jt8phs.jpg" opacity="bg-opacity-25" />
        
        <Loisir class="md:ml-2" title="voyages" image="https://res.cloudinary.com/qzig/image/upload/w_500,f_auto/v1598084044/personal-website/voyages_mzyqoy.jpg" />

      </div>

      <div class="mt-8 md:flex justify-between items-center">

        <Loisir class="md:mr-2 mb-8 md:mb-0" title="gastronomie du monde" image="https://res.cloudinary.com/qzig/image/upload/w_500,f_auto/v1598084044/personal-website/gastronomie_sgk6qi.jpg" />
        
        <Loisir class="md:ml-2" title="bd" image="https://res.cloudinary.com/qzig/image/upload/w_500,f_auto/v1598084044/personal-website/bd_t7m10x.jpg" />

      </div>
    </section>
  </div>
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
  mounted () {
    const me = document.getElementById('me')
    const addMargin = () => {
      if (window.innerWidth > 767 && window.innerWidth < 1014) {
        const i = ((1014 - window.innerWidth) * 100) / (1014 - 767)
        me.style.marginTop = Math.floor(i) + 'px'
      } else me.style.marginTop = '-1.5rem'
    }
    window.onload = () => {
      addMargin()
    }
    window.onresize = () => {
      addMargin()
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
</style>
