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
        <Cinput name="name" label="Name" type="text" />
        <Cinput name="email" label="Email" type="email" />
        <Cinput name="subject" label="Subject" type="text" />
        <Ctextbox />
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
  const formData = {
    name: "Chisom",
    email: "chisomgbata@gmail.com",
    subject: "Test Mail To see how things works out",
    body: "Hello from the other side, I must have seen that I have changed to tell you I am sorry for breaking your heart but when you call I am not really tell you apart anymore oahh oahhh",
  };

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
        ...formData,
      }),
    })
      .then(() => alert("Success!"))
      .catch((err) => alert(`Error: %s, ${err}`))
      .finally(() => {
        console.log("formData: %s", JSON.stringify(formData));
      });
  }
</script>

<style scoped></style>
