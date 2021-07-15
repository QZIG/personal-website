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
          <li><Polygone />Email&nbsp;: <a href="mailto:xaviercochennec@gmail.com" rel="noreferrer">xaviercochennec@gmail.com</a></li>
          <li><Polygone />Téléphone&nbsp;: <a href="tel:+33675727702" rel="noreferrer">+33 6 75 72 77 02</a></li>
        </ul>

        <ul class="rs flex items-center">
          <li><a href="https://github.com/QZIG" target="_blank" rel="noreferrer">
            <img src="~assets/logos/GitHub-Mark-32px.png" width="25" alt="logo github">
          </a></li>
          <li><a href="https://www.linkedin.com/in/xavier-cochennec-49b679a7/" target="_blank" rel="noreferrer">
            <img src="~assets/logos/LI-In-Bug.png" width="25" alt="logo linkedin">
          </a></li>
        </ul>

        <ul>
          <li><Polygone />Projet sur la blockchain Solana&nbsp;: <a href="https://alupicoin.com" target="_blank" rel="noreferrer">alupicoin.com</a></li>
          <li><a href="https://github.com/alupicoin" target="_blank" rel="noreferrer">
            <img src="~assets/logos/GitHub-Mark-32px.png" width="25" alt="logo github">
          </a></li>
        </ul>
      </div>
      <div id="me" class="hidden md:flex justify-center items-center -mt-16" style="min-width: 300px;">
        <img src="https://res.cloudinary.com/qzig/image/upload/w_400,f_auto/v1598084044/personal-website/me_yszxq0.png" alt="ma photo">
      </div>
    </section>

    <section>
      <Title text="Compétences" />
      <div class="mt-8 max-w-screen-md">
        <Skillbar label="VueJS / NuxtJS" color="bg-green-400" buttonColor="bg-green-700" :value="90" />
        <Skillbar label="NodeJS / ExpressJS / NestJS" color="bg-orange-400" buttonColor="bg-orange-700" :value="70" />
        <Skillbar label="ReactJS / Redux / Redux-Thunk / React-Native" color="bg-blue-400" buttonColor="bg-blue-700" :value="80" />
        <Skillbar label="Wordpress / Spip / Symfony 3&4" color="bg-red-400" buttonColor="bg-red-700" :value="60" />
        <Skillbar label="Firebase / Strapi / Prismic" color="bg-yellow-400" buttonColor="bg-yellow-700" :value="85" />
        <Skillbar label="MySQL / PostgreSQL / NoSQL" color="bg-pink-400" buttonColor="bg-pink-700" :value="70" />
        <Skillbar label="Python / Flask / Django / FastAPI" color="bg-purple-400" buttonColor="bg-purple-700" :value="50" />
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

        <Loisir class="md:mr-2 mb-8 md:mb-0" title="esport" image="https://res.cloudinary.com/qzig/image/upload/w_500,f_auto/v1598084044/personal-website/esport_jt8phs.jpg" />
        
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
