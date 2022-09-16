<template>
  <div>
    <div class="relative">
      <input
        :id="name"
        :name="name"
        :type="type"
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        class="peer h-10 w-full border-b-2 dark:bg-darkContent bg-white border-gray-300 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-primary"
        placeholder="placeHolder"
      />
      <label
        :for="name"
        class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm duration-500"
        >{{ label }}</label
      >
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    name: string;
    label: string;

    type: "text" | "email" | "password";
    modelValue: string;
  }>();
  defineEmits(["update:modelValue"]);
</script>
