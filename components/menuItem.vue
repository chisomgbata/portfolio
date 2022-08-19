<template>
  <div>
    <div class="bg-offwhite rounded-full p-3">
      <img :src="`/icons/${link.icon}`" :alt="link.name" />
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    link: {
      name: string;
      icon: string;
    };
  }>();
</script>
