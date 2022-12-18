<template>
    <div class="text-3xl mb-4 my-heading font-bold <md:text-2lg"><slot /></div>
</template>

<style scoped>
.my-heading {
    background: linear-gradient(to right, #fb8500, #be6ae5);
    color: transparent;
    background-clip: text;
}
</style>