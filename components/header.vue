<template>
  <header class="flex bg-white justify-between p-4 rounded-lg">
    <img src="/images/Logo.svg" alt="Chisom.Dev" />
    <nav class="hidden md:block">
      <Menu />
    </nav>
    <button class="md:hidden rounded-full bg-offwhite p-3">
      <p class="sr-only">Open Menu</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  </header>
</template>
