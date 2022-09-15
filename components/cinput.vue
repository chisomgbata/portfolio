<template>
  <div>
    <div class="flex flex-col gap-2">
      <label :for="name" class="text-gray text-lg font-medium">{{
        label
      }}</label>
      <input
        :type="type"
        :name="name"
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        class="border-b-2 border-primary p-2 text-gray h-12 bg-darkContent outline-none"
      />
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
