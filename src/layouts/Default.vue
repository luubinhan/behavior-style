<template>
  <div class="my-container">
    <!-- Header & Navigation -->
    <div class="text-center pt-32 mb-4">
      <a href="https://luubinhan.github.io/blog/" target="_blank">
        <img src="https://luubinhan.github.io/blog/assets/img/logo-main.3e2a7b64.png" alt="" width="120" class="mx-auto">
      </a>
    </div>
    <header
      class="
        
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
      © by <a href="https://luubinhan.github.io/" target="_blank">luckyluu</a>
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