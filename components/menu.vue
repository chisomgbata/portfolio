<template>
  <div>
    <ul class="flex gap-11">
      <li v-for="link in links">
        <MenuItem :link="link" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  const links = [
    {
      name: "contact",
      icon: "Contact.svg",
    },
  ];
</script>
