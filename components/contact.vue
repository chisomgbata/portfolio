<template>
  <div
    id="contact"
    class="bg-white dark:bg-darkContent rounded-lg px-8 py-12 shadow-sm shadow-primary"
  >
    <form class="" @submit.prevent="handleSubmit">
      <div
        class="flex w-full md:items-center justify-between flex-col md:flex-row md:gap-16 gap-6"
      >
        <h2 class="font-bold text-xl md:text-2xl">Send Me A Message</h2>
        <div
          class="flex justify-between w-full md:w-1/3 bg-offwhite dark:bg-darkBg p-4 rounded-lg shadow-lg"
        >
          <a href="https://github.com/chisomgbata"
            ><img src="/icons/github.svg" alt="Github"
          /></a>
          <a href="mailto:chisomgbata@gmail.com"
            ><img src="/icons/mail.svg" alt="Email"
          /></a>
          <a href="tel:+2348148002613"
            ><img src="/icons/phone.svg" alt="Phone"
          /></a>
          <a href="https://twitter.com/chigbatachisom"
            ><img src="/icons/twitter.svg" alt="Twitter"
          /></a>
        </div>
      </div>
      <div class="flex flex-col gap-12 mt-14">
        <Cinput name="name" label="Name" type="text" v-model="formData.name" />
        <Cinput
          name="email"
          label="Email"
          type="email"
          v-model="formData.email"
        />
        <Cinput
          name="subject"
          label="Subject"
          type="text"
          v-model="formData.subject"
        />

        <div class="relative">
          <textarea
            id="message"
            name="message"
            class="peer h-10 w-full border-b-2 dark:bg-darkContent bg-white border-gray-300 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-primary"
            v-model="formData.body"
            placeholder="Message"
          ></textarea>
          <label
            for="message"
            class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >Message</label
          >
        </div>
        <button
          type="submit"
          class="bg-primary rounded-lg uppercase font-semibold py-4 text-center text-white shadow-lg"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  const formData = ref({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  function handleSubmit() {
    // Must post to a path not handled by the SSR.
    // Path must exist
    fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encode({
        "form-name": "contact-form",
        ...formData.value,
      }),
    })
      .then(() => alert("Form Submitted Successfully!"))
      .catch((err) => alert(`Error: %s, ${err}`))
      .finally(() => {
        console.log("formData: %s", JSON.stringify(formData));
      });
  }
</script>

<style scoped></style>
