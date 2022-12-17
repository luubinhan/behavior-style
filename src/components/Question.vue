<template>
  <article>
    <h3>
      {{ name }}
    </h3>
    <div v-for="(answer, key) in answers" :key="`${key}-${answer}`">
      <h6>
        {{ answer }}
      </h6>
      <b-select placeholder="Most appropriate" @input="value => handleChange(value, key)">
        <option v-for="point in [1,2,3,4]" :value="point" :key="point" :disabled="selectedPoint.includes(point)">
          {{ point }}
        </option>
      </b-select>
    </div>
  </article>
</template>

<script>
export default {
  props: ["answers", "name"],
  data: () => ({
    selected: {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
    },
    selectedPoint: [],
  }),
  methods: {
    handleChange(value, key) {
        this.selected[key] = value;
        this.selectedPoint = [...this.selectedPoint, value]
        this.$emit('submit', this.selected)
    },
  },
};
</script>