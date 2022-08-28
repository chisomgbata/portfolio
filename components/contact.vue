<template>
  <div>
    <div class="flex justify-between">
      <img src="/icons/github.svg" alt="Github" />
      <img src="/icons/mail.svg" alt="Email" />
      <img src="/icons/phone.svg" alt="Phone" />
      <img src="/icons/twitter.svg" alt="Twitter" />
    </div>
    <form @submit.prevent="sendMessage()" class="mt-10">
      <h2 class="font-bold text-2xl">Send Me A Message</h2>
      <div class="bg-white rounded-lg px-3 py-6 flex flex-col gap-4 mt-14">
        <Cinput name="name" label="Name" type="text" />
        <Cinput name="email" label="Email" type="email" />
        <Cinput name="subject" label="Subject" type="text" />
        <button
          class="bg-primary rounded-lg uppercase font-semibold py-3 text-center text-white"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
  const name = "Contact Us";
  function sendMessage() {
    alert("hello world");
  }
</script>

<style scoped></style>
