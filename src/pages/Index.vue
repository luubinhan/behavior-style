<template>
  <Layout>
    <h1 class="text-2xl mb-2">
      The following questionnaire will enable you to reflect on how you think
      you behave and will give an indication of your behavioural style.
    </h1>
    <div>There are no right and wrong responses!</div>
    <div>
      Consider each group of four words or descriptive phrases A to D. Select
      the most appropriate number in the drop down menu next to each word or
      descriptive phrase. Allocate a 4 to the word or phrase that is most like
      you or that you relate to most. Allocate a 3 to the next most like you,
      then a 2 and then a 1 to the least like you.
    </div>
    <div>
      Make sure each group of words or descriptive phrases (A to D) has a 4, 3,
      2 and 1 (<strong>no duplicates</strong>).
    </div>
    <div class="flex justify-between">
      <div>
        Least
      </div>
      <div>
        Most
      </div>
    </div>
    <b-slider :min="1" :max="4" :tooltip="false" :ticks="true" size="is-large" :indicator="false" :disabled="true">
      <b-slider-tick :value="1">1</b-slider-tick>
      <b-slider-tick :value="2">2</b-slider-tick>
      <b-slider-tick :value="3">3</b-slider-tick>
      <b-slider-tick :value="4">4</b-slider-tick>
    </b-slider>
    <YourStyle :your-style="yourStyle" />
    <section>
      <button @click="calculateFinalResult">Result</button>
      <div v-for="(options, index) in data" :key="index">
        <question
          :answers="options"
          :name="`Question #${index + 1}`"
          @submit="(result) => updateResult(result, index)"
        />
      </div>
    </section>
  </Layout>
</template>

<script>
import _each from "lodash/each";
import _max from "lodash/max";
import Question from "@/components/Question";
import YourStyle from "@/components/YourStyle";
import data from "../data";

export default {
  components: {
    Question,
    YourStyle,
  },
  metaInfo: {
    title: "Home",
  },
  data: () => ({
    data,
    finalResult: {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
    },
    results: [],
  }),
  computed: {
    yourStyle() {
      let style = "";
      const points = [
        this.finalResult.a,
        this.finalResult.b,
        this.finalResult.c,
        this.finalResult.d,
      ];
      const maxPoint = _max(points);
      _each(this.finalResult, (value, key) => {
        if (value === maxPoint && maxPoint > 0) style = key;
      });

      return style;
    },
  },
  methods: {
    updateResult(result, index) {
      this.results[index] = result;
    },
    calculateFinalResult() {
      this.finalResult = this.results.reduce(
        (result, currentValue) => {
          Object.keys(currentValue).forEach((key) => {
            result[key] = result[key] + currentValue[key];
          });
          return result;
        },
        { a: 0, b: 0, c: 0, d: 0 }
      );
    },
  },
};
</script>

<style>
.b-slider.is-disabled .b-slider-thumb-wrapper{
  display: none;
}
</style>