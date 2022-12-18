<template>
  <Layout>
    <Card v-if="currentStep === 0">
      <h1 class="text-xl mb-4">
        The following questionnaire will enable you to reflect on how you think
        you behave and will give an indication of your behavioural style.
      </h1>
      <div class="font-bold mb-4">There are no right and wrong responses!</div>
      <div class="mb-4">
        Allocate a 4 to the word or phrase that is most like you or that you
        relate to most. Allocate a 3 to the next most like you, then a 2 and
        then a 1 to the least like you.
      </div>
      <div class="rounded-xl p-4 bg-violet-400 mb-8">
        <div class="flex justify-between">
          <div>Least</div>
          <div>Most</div>
        </div>
        <b-slider
          :min="1"
          :max="4"
          :value="4"
          :tooltip="false"
          :ticks="true"
          size="is-large"
          :indicator="false"
          type="is-warning"
        >
          <b-slider-tick :value="1">1</b-slider-tick>
          <b-slider-tick :value="2">2</b-slider-tick>
          <b-slider-tick :value="3">3</b-slider-tick>
          <b-slider-tick :value="4">4</b-slider-tick>
        </b-slider>
      </div>
      <div class="text-center">
        <b-button type="is-warning" @click="currentStep = 1">Start</b-button>
      </div>
    </Card>

    <section v-if="currentStep === 1">
      <b-carousel
        v-model="carousel"
        :autoplay="false"
        progress-type="is-warning"
        :progress="true"
        :repeat="false"
        :arrow="false"
        animated="fade"
      >
        <b-carousel-item v-for="(options, index) in data" :key="index" class="pt-8">
          <question
            :answers="options"
            name="Question"
            :index="`${index + 1}`"
            @submit="(result) => updateResult(result, index)"
          />
        </b-carousel-item>
      </b-carousel>
      <div class="text-center pt-12">
        <b-button type="is-warning" @click="calculateFinalResult">
          View Result
        </b-button>
      </div>
    </section>
    <section v-if="currentStep === 2">
      <YourStyle :your-style="yourStyle" class="mb-8" />
      <div class="text-center">
        <b-button type="is-warning" @click="reset">Reset</b-button>
      </div>
    </section>
  </Layout>
</template>

<script>
import _each from "lodash/each";
import _max from "lodash/max";
import Question from "@/components/Question";
import YourStyle from "@/components/YourStyle";
import Card from "@/components/Card";
import data from "../data";

export default {
  components: {
    Question,
    YourStyle,
    Card,
  },
  metaInfo: {
    title: "Home",
  },
  data: () => ({
    data,
    carousel: 0,
    finalResult: {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
    },
    results: [],
    currentStep: 1,
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
      this.currentStep = 2;
      this.finalResult = this.results.reduce(
        (result, currentValue) => {
          Object.keys(currentValue).forEach((key) => {
            result[key] = result[key] + currentValue[key];
          });
          return result;
        },
        { a: 0, b: 0, c: 0, d: 0 }
      );

      console.log(this.currentStep);
    },
    reset() {
      this.currentStep = 0;
      this.carousel = 0;
      this.finalResult = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
      };
      this.results = [];
    },
  },
};
</script>

<style>
.b-slider .b-slider-thumb-wrapper {
  display: none;
}
</style>