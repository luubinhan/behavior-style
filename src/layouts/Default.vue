<template>
  <div class="my-container">
    <!-- Header & Navigation -->
    <header
      class="
        pt-32
        text-4xl     
        text-center
        font-bold
        pb-16
      "
    >
      {{ $static.metadata.siteName }}
    </header>

    <!-- Page Content -->
    <main>
      <slot />
    </main>
    <footer class="text-center py-8">
      © by luckyluu
    </footer>
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
.my-container {
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
}
</style>

<style>
html {
  background: #343a63 !important;
}

body {
  color: white !important;
  font-family: 'Montserrat', sans-serif !important;
}
</style>