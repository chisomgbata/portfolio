<template>
  <div class="rounded-lg bg-white py-16 mt-6 px-12">
    <section>
      <h1 class="font-bold text-2xl text-center">My Skills</h1>
      <div class="flex flex-col gap-20 mt-16">
        <div v-for="skill in skills">
          <skill :skill="skill" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  const skills = [
    {
      type: "Language",
      skill: [
        {
          iconLink: "js",
          name: "Javascript",
        },
        {
          iconLink: "php",
          name: "PHP",
        },
      ],
    },
    {
      type: "Tools",
      skill: [
        {
          iconLink: "linux",
          name: "Linux",
        },
        {
          iconLink: "git",
          name: "Git",
        },
      ],
    },
    {
      type: "Frameworks",
      skill: [
        {
          iconLink: "vue",
          name: "Vue",
        },
        {
          iconLink: "laravel",
          name: "Laravel",
        },
      ],
    },
  ];
</script>
