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
      name: "home",
      icon: "Home.svg",
    },
    {
      name: "Skills",
      icon: "Services.svg",
    },
    {
      name: "Portfolio",
      icon: "Portfolio.svg",
    },
    {
      name: "contact",
      icon: "Contact.svg",
    },
  ];
</script>
