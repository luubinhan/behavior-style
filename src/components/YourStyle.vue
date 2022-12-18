<template>
  <section class="text-center">
    <Card class="mb-6">
        <div v-if="yourStyle === 'a'" class="text-3xl mb-4">Steadiness</div>
        <div v-if="yourStyle === 'b'" class="text-3xl mb-4">Dominance</div>
        <div v-if="yourStyle === 'c'" class="text-3xl mb-4">Compliance</div>
        <div v-if="yourStyle === 'd'" class="text-3xl mb-4">Influence</div>
    </Card>
    <div class="text-xs">
      <i>
        Your DISC style can change according to the context, your circumstances
        and the people that you are with, and you will blend all the styles
        together rather than having one clearly defined style. However, in most
        situations, this style will be your leading style and will take
        precedence.
      </i>
    </div>
  </section>
</template>

<script>
import Card from "@/components/Card";

export default {
  props: ["yourStyle"],
  components: {
    Card
  }
};
</script>