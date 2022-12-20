<template>
  <Card>
    <article>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <h3 class="text-right font-bold">
          {{ name }}
        </h3>
        <div class="font-bold">#{{ index }}</div>
      </div>

      <div v-for="(answer, key) in answers" :key="`${key}-${answer}`" class="p-4" :class="{'bg-violet-600': ['b','d'].includes(key)}">
        <div class="grid grid-cols-2 gap-4">
          <div class="text-right">
            <h6>
              {{ answer }}
            </h6>
          </div>
          <div >
            <b-select
              :placeholder="placeholder"
              @input="(value) => handleChange(value, key)"
              size="is-small"
            >
              <option
                v-for="point in [1, 2, 3, 4]"
                :value="point"
                :key="point"
                :disabled="selectedPoint.includes(point)"
              >
                {{ point }}
              </option>
            </b-select>
          </div>
        </div>
      </div>
    </article>
  </Card>
</template>

<script>
import _each from "lodash/each";
import Card from "@/components/Card";

export default {
  components: {
    Card,
  },
  props: ["answers", "name", "index", "lang"],
  data: () => ({
    selected: {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
    },
    selectedPoint: [],
  }),
  computed: {
    placeholder() {
      if (this.lang === 'vi') {
        return 'Chọn'
      }
      
      return 'Most appropriate'
    }
  },
  methods: {
    handleChange(value, key) {
      this.selected[key] = value;
      let temp = [];
      _each(this.selected, (value, key) => {
        if (value > 0) {
          temp = [...temp, value];
        }
      });
      this.selectedPoint = temp;
      this.$emit("submit", this.selected);
    },
  },
};
</script>

<style scoped>
.bg-violet-600 {
    background: #30345e;
}
</style>