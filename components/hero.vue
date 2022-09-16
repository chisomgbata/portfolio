<template>
  <div class="mt-6 md:mt-24 shadow-sm shadow-primary">
    <section
      class="bg-white dark:bg-darkContent rounded-lg py-12 px-5 md:flex w-full md:px-16 md:py-20 md:justify-between overflow-hidden"
    >
      <div class="flex-1">
        <h1 class="text-2xl font-bold md:text-5xl">
          I’m Chigbata Chisom
          <span class="text-primary">Full-Stack</span>
          Developer
        </h1>
        <p class="mt-8 text-gray">
          I am a 19 year old full-Stack<br />
          Developer, I am profiencient with <br />
          Javascript and Php, love <br />
          TailwindCSS, Vue and Laravel
        </p>
        <div class="flex gap-9 mt-10 items-center">
          <a
            href="#contact"
            class="bg-primary rounded-lg py-4 px-8 text-white font-semibold shadow-sm shadow-primary"
          >
            Hire Me
          </a>
          <a
            href="/docs/chisom-chigbata-cv.pdf"
            download="chisom-chigbata"
            class=" "
            >Download Cv</a
          >
        </div>
      </div>
      <div class="hidden md:block w-[325px] h-[325px]">
        <img
          src="/images/profile.png"
          alt="Chigbata Chisom"
          class="object-contain"
        />
      </div>
    </section>
  </div>
</template>
