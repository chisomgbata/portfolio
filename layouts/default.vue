<template>
  <div class="dark">
    <div
      class="bg-offwhite dark:bg-darkBg text-base text-black dark:text-white font-sans"
    >
      <div class="py-3 w-full md:mx-auto md:w-[768px] px-5 lg:w-[1024px]">
        <Header />
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
