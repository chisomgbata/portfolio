<template>
  <div class="w-full">
    <div class="flex gap-2 items-center">
      <span class="bg-primary p-2 rounded-full"
        ><img :src="`/icons/${skill.type}.svg`" :alt="skill.type"
      /></span>
      <h2 class="text-base font-semibold">{{ skill.type }}</h2>
    </div>
    <div class="mt-10 md:mt-16 flex flex-col gap-10 text-sm">
      <div class="flex flex-col gap-2" v-for="item in skill.skill">
        <div class="flex justify-between items-baseline">
          <span class=""
            ><img :src="`/icons/${item.iconLink}.svg`" :alt="item.name"
          /></span>
          <p>{{ item.name }}</p>
        </div>
        <div class="w-full rounded-xl h-1 bg-primary"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  interface skill {
    type: string;
    skill: {
      iconLink: string;
      name: string;
    }[];
  }
  defineProps<{
    skill: skill;
  }>();
</script>
