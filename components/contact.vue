<template>
  <!-- <div>
    <div class="flex justify-between">
      <img src="/icons/github.svg" alt="Github" />
      <img src="/icons/mail.svg" alt="Email" />
      <img src="/icons/phone.svg" alt="Phone" />
      <img src="/icons/twitter.svg" alt="Twitter" />
    </div>
    <form  class="mt-10" data-netlify="true" method="post">
      <h2 class="font-bold text-2xl">Send Me A Message</h2>
      <div class="bg-white rounded-lg px-3 py-6 flex flex-col gap-4 mt-14">
        <Cinput name="name" label="Name" type="text" />
        <Cinput name="email" label="Email" type="email" />
        <Cinput name="subject" label="Subject" type="text" />
        <Ctextbox />
        <button type="submit"
          class="bg-primary rounded-lg uppercase font-semibold py-3 text-center text-white"
        >
          Send Message
        </button>
      </div>
    </form>
  </div> -->
  <form name="contact" method="POST" data-netlify="true">
    <p>
      <label>Your Name: <input type="text" name="name" /></label>
    </p>
    <p>
      <label>Your Email: <input type="email" name="email" /></label>
    </p>
    <p>
      <label
        >Your Role:
        <select name="role[]" multiple>
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select></label
      >
    </p>
    <p>
      <label>Message: <textarea name="message"></textarea></label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
</template>

<script setup lang="ts"></script>

<style scoped></style>
