<template>
  <header class="w-full h-64 sm:h-custom-header bg-black text-white relative">
    <div class="absolute inset-x-0 top-0 h-full flex justify-center">
      <div
        class="h-full w-full bg-no-repeat bg-contain bg-center opacity-25"
        style="max-width: 640px;"
        lazy-background="https://res.cloudinary.com/qzig/image/upload/w_640,f_auto/v1598084043/personal-website/technology-1283624_640_ehp1la.jpg"
      />
    </div>
    <Nav />
    <div class="h-full flex justify-center items-center">
      <h2 class="z-10 text-center text-2xl md:text-4xl font-bold">DEVELOPPEUR FREELANCE</h2>
    </div>
    <div class="container container-p absolute inset-x-0 bottom-0 flex justify-center">
      <Arrow :size="50" color="text-primary" />
    </div>
    
  </header>
</template>