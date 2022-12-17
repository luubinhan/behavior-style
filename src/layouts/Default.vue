<template>
  <div class="container mx-auto">

    <!-- Header & Navigation -->
    <header class="p-6 flex flex-col md:flex-row items-center justify-between text-center">
      <strong>
        <g-link to="/" class="text-2xl">{{ $static.metadata.siteName }}</g-link>
      </strong>
    </header>

    <!-- Page Content -->
    <main class="p-6">
      <slot/>
    </main>

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
/* Add any Global Styles Here */

.active--exact { /* Active Nav Link */
  @apply text-gray-900;
}
</style>