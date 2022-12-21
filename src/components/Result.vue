<template>
  <article>
    <Heading>{{ data.labels[0] }}</Heading>

    <div class="mb-6">
      <div class="bg-blue-500 p-2 rounded mb-2 relative" v-for="(info, index) in data.intro" :key="index">
        <span class="counter">0{{ index + 1 }}</span>
        <span class="pl-16">
        {{ info }}
      </span>
      </div>
    </div>
    <div class="mb-6">
      {{ data.labels[1] }}
    </div>
    <div class="grid grid-cols-3 gap-6 <md:grid-cols-1">
      <div class="rounded-2xl bg-violet-400 p-4" v-for="(feature, index) in data.features" :key="index">
        <div class="flex align-center justify-center">
          <div
            class="
              text-6xl
              mb-4
              rounded-full
              bg-yellow-100
              border border-yellow-200
              pt-5
              h-100px
              w-100px
            "
          >
            {{ feature.icon }}
          </div>
        </div>

        <div class="font-bold">{{ feature.label }}</div>
        <div class="font-light">{{ feature.value }}</div>
      </div>
    </div>

    <div class="text-xl mb-2 font-bold pt-6 <md:(text-left text-2xl)">{{ data.labels[2] }}</div>

    <div
      class="grid grid-cols-3 gap-4 mb-1 <md:(grid-cols-1 gap-2 pb-4)"
      v-for="(ob, index) in data.observable"
      :key="index"
    >
      <div class="text-right font-bold <md:text-left">{{ ob.label }}</div>
      <div class="text-left col-span-2">{{ ob.value }}</div>
    </div>

    <div class="text-xl mb-2 font-bold pt-6 <md:(text-left text-2xl)">{{ data.labels[3] }}</div>

    <div
      class="grid grid-cols-3 gap-4 mb-1 <md:(grid-cols-1 gap-2 pb-4)"
      v-for="(ob, index) in data.communication"
      :key="index"
    >
      <div class="text-right font-bold <md:text-left">{{ ob.label }}</div>
      <div class="text-left col-span-2">{{ ob.value }}</div>
    </div>
    <div class="mb-4 pt-4">{{ data.labels[4] }}</div>

    <div
      v-for="(item, index) in data.general"
      :key="index"
      class="mb-1 rounded bg-violet-400 p-2"
    >
      {{ item }}
    </div>
    <section class="">
      <div class="text-xl mb-2 font-bold pt-6 <md:(text-left text-2xl)">
        {{ data.labels[5] }}
      </div>
      <b-table class="text-left" :data="data.data" :columns="data.columns"></b-table>
    </section>
  </article>
</template>
    
<script>
import Heading from "@/components/Heading";

export default {
  props: ["data"],
  components: {
    Heading,
  },
};
</script>

<style scoped>
.counter {
  -webkit-text-stroke-width: 2px;
  -moz-text-stroke-width: 2px;
  -webkit-text-stroke-color: #111827;
  -moz-text-stroke-color: #111827;
  color: transparent;
  text-shadow: 3px 3px #ffebc7;
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 5px;
  position: absolute;
  left: 11px;
  top: 0;
  display: flex;
  bottom: 0;
  align-items: center;
}
</style>