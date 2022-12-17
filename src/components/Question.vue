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
import _each from 'lodash/each'

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
        let temp = []
        _each(this.selected, (value, key) => {
            if (value > 0) {
                temp = [...temp, value]
            }
        })
        this.selectedPoint = temp
        this.$emit('submit', this.selected)
    },
  },
};
</script>