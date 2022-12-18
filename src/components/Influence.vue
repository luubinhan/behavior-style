<template>
  <article>
    <Heading>Influence</Heading>

    <div class="mb-6">
      <div class="bg-blue-500 p-2 rounded mb-2">
        Interested in taking people with them, enthusing them with optimism and
        energy.
      </div>
      <div class="bg-blue-500 p-2 rounded mb-2">Open with people.</div>
      <div class="bg-blue-500 p-2 rounded mb-2">
        Willing to make personal investments and so they are generally very good
        with people.
      </div>
      <div class="bg-blue-500 p-2 rounded mb-2">
        Can frighten people by being over-enthusiastic and dominant.
      </div>
      <div class="bg-blue-500 p-2 rounded mb-2">
        Can feel personally let down by people and left out.
      </div>
    </div>
    <div class="mb-6">
      May be viewed as superficial and irresponsible as they can be poor with
      detail and their hunches can go wrong.
    </div>
    <div class="grid grid-cols-3 gap-6 <md:grid-cols-1">
      <div class="rounded-2xl bg-violet-400 p-4">
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
            🚀
          </div>
        </div>

        <div class="font-bold">Motivator</div>
        <div class="font-light">Public praise and recognition</div>
      </div>
      <div class="rounded-2xl bg-violet-400 p-4">
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
            😭
          </div>
        </div>
        <div class="font-bold">Basic fear</div>
        <div class="font-light">Rejection</div>
      </div>
      <div class="rounded-2xl bg-violet-400 p-4">
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
            🏆
          </div>
        </div>
        <div class="font-bold">Value to the organisation</div>
        <div class="font-light">Working with and through people.</div>
      </div>
    </div>

    <div class="text-xl mb-2 font-bold pt-6 <md:(text-left text-2xl)">
      Observable Behaviours
    </div>

    <div
      class="grid grid-cols-2 gap-4 mb-1 <md:(grid-cols-1 gap-2 pb-4)"
      v-for="(ob, index) in observable"
      :key="index"
    >
      <div class="text-right font-bold <md:text-left">{{ ob.label }}</div>
      <div class="text-left">{{ ob.value }}</div>
    </div>

    <div class="text-xl mb-2 font-bold pt-6 <md:(text-left text-2xl)">
      Communication
    </div>

    <div
      class="grid grid-cols-2 gap-4 mb-1 <md:(grid-cols-1 gap-2 pb-4)"
      v-for="(ob, index) in communication"
      :key="index"
    >
      <div class="text-right font-bold <md:text-left">{{ ob.label }}</div>
      <div class="text-left">{{ ob.value }}</div>
    </div>
    <div class="mb-4 pt-4">In general, they may</div>

    <div
      v-for="(item, index) in general"
      :key="index"
      class="mb-1 rounded bg-violet-400 p-2"
    >
      {{ item }}
    </div>
    <section class="">
      <div class="text-xl mb-2 font-bold pt-6 <md:(text-left text-2xl)">
        Use of Emotional Intelligence
      </div>
      <b-table class="text-left" :data="data" :columns="columns"></b-table>
    </section>
  </article>
</template>
    
    <script>
import Heading from "@/components/Heading";

export default {
  components: {
    Heading,
  },
  data: () => ({
    data: [
      {
        good_use: "verbal",
        poor_use: "talkative",
        best_approach: "tell who first",
      },
      {
        good_use: "inspiring",
        poor_use: "easily distracted",
        best_approach: "be enthusiastic",
      },
      {
        good_use: "ambitious",
        poor_use: "impulsive",
        best_approach: "allow for fun",
      },
      {
        good_use: "enthusiastic",
        poor_use: "undisciplined",
        best_approach: "support their creativity",
      },
      {
        good_use: "energetic",
        poor_use: "excitable",
        best_approach: "support their intuition",
      },
      {
        good_use: "confident",
        poor_use: "egotistical",
        best_approach: "talk about people and goals",
      },
      {
        good_use: "friendly",
        poor_use: "emotional",
        best_approach: "handle the details for them",
      },
      {
        good_use: "influential",
        poor_use: "manipulating",
        best_approach: "value feelings and opinions",
      },
      {
        good_use: "decisive",
        poor_use: "overly dramatic",
        best_approach: "",
      },
    ],
    columns: [
      {
        field: "good_use",
        label: "Good use",
      },
      {
        field: "poor_use",
        label: "Poor use",
      },
      {
        field: "best_approach",
        label: "Best approach",
      },
    ],
    observable: [
      {
        label: "Approach",
        value: "Will be exceptionally enthusiastic.",
      },
      {
        label: "Time orientation",
        value: "Future focused.",
      },
      {
        label: "Handshake",
        value: "Prolonged, friendly.",
      },
      {
        label: "Office",
        value:
          "Certificates, pictures, trophies, newspaper clippings relating to themselves on display.",
      },
      {
        label: "Dress",
        value:
          "May be dressed in the latest fashion; colour coordinated and may dress to impress.",
      },
      {
        label: "Manners",
        value:
          "Could appear superficial and impulsive; happy to share their feelings.",
      },
      {
        label: "Eye contact",
        value: "Frequent and friendly.",
      },
      {
        label: "Body Language",
        value: "Animated hand and body movement.",
      },
      {
        label: "Handling disagreements",
        value:
          "Prefers to persuade rather than confront aggressively or demand.",
      },
    ],
    communication: [
      {
        label: "Management style",
        value: "Motivating",
      },
      {
        label: "Communication style",
        value: "Talkative",
      },
      {
        label: "Wants to know",
        value: "What is new, exciting, and innovative.",
      },
      {
        label: "Written communication style",
        value:
          "Inclined to be idea-orientated and are often quite lengthy in making a point. Rather vague and abstract.",
      },
    ],
    general: [
      "be positive and verbal.",
      "be willing to be friendly and very sociable.",
      "be very communicative.",
      "tell stories and anecdotes.",
      "share personal feelings.",
      "be over-enthusiastic, agreeing to every suggestion.",
      "seem to be very interested and yet may delay on a decision.",
      "act impulsively.",
      "be inattentive to detail.",
      "appear to be superficial.",
    ],
  }),
};
</script>