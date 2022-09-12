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
        class="rounded-lg bg-offwhite p-2 outline-none text-gray h-12"
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
