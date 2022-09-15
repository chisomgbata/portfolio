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
      <div class="flex flex-col gap-8 mt-14">
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

        <div>
          <label for="name" class="text-gray text-lg font-medium"
            >Message</label
          >
          <textarea
            name="message"
            class="bg-offwhite dark:bg-darkContent w-full h-40 p-2 outline-none text-gray mt-2 border-b-2 border-primary"
            v-model="formData.body"
          ></textarea>
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
