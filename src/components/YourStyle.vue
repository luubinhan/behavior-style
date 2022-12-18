<template>
  <section class="text-center">
    <Card class="mb-6">
        <Steadiness v-if="yourStyle === 'a'" />
        <Dominance v-if="yourStyle === 'b'" />
        <Compliance v-if="yourStyle === 'c'" />
        <Influence v-if="yourStyle === 'd'" />
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
import Steadiness from "@/components/Steadiness"
import Dominance from "@/components/Dominance"
import Compliance from "@/components/Compliance"
import Influence from "@/components/Influence"

export default {
  props: ["yourStyle"],
  components: {
    Card,
    Steadiness,
    Dominance,
    Compliance,
    Influence
  }
};
</script>