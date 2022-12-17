<template>
  <section>
    <div v-if="yourStyle === 'a'">Steadiness</div>
    <div v-if="yourStyle === 'b'">Dominance</div>
    <div v-if="yourStyle === 'c'">Compliance</div>
    <div v-if="yourStyle === 'd'">Influence</div>
    <div>
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
export default {
  props: ["yourStyle"],
};
</script>