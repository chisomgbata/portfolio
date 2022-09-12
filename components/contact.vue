<template>
  <div>
    <div class="flex justify-between">
      <img src="/icons/github.svg" alt="Github" />
      <img src="/icons/mail.svg" alt="Email" />
      <img src="/icons/phone.svg" alt="Phone" />
      <img src="/icons/twitter.svg" alt="Twitter" />
    </div>
    <form class="mt-10" @submit.prevent="handleSubmit">
      <h2 class="font-bold text-2xl">Send Me A Message</h2>
      <div class="bg-white rounded-lg px-3 py-6 flex flex-col gap-4 mt-14">
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
            class="bg-offwhite rounded-lg w-full min-h-full p-2 outline-none text-gray"
            v-model="formData.body"
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-primary rounded-lg uppercase font-semibold py-3 text-center text-white"
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
