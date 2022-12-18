<template>
  <article>
    <Heading>Dominance</Heading>

    <div class="mb-6">
      <div class="bg-blue-500 p-2 rounded mb-2">
        Places great emphasis on action and results.
      </div>
      <div class="bg-blue-500 p-2 rounded mb-2">
        Decisive, direct, and pragmatic.
      </div>
      <div class="bg-blue-500 p-2 rounded mb-2">
        Likes to get things done quickly and hates taking time over things.
      </div>
      <div class="bg-blue-500 p-2 rounded mb-2">
        Translates ideas into action.
      </div>
      <div class="bg-blue-500 p-2 rounded mb-2">Dynamic and resourceful.</div>
    </div>
    <div class="mb-6">
      May be accused of looking only at the short term and neglecting long-range
      implications. This tendency sometimes exposes them to criticism from
      others who may see them as too impulsive, simplistic, acting before they
      think.
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
        <div class="font-light">Power and authority</div>
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
        <div class="font-light">Failure</div>
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
        <div class="font-light">Driving for results</div>
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
        good_use: "decisive",
        poor_use: "pushy",
        best_approach: "tell what and when first",
      },
      {
        good_use: "independent",
        poor_use: "poor team player",
        best_approach: "keep fast paced",
      },
      {
        good_use: "practical",
        poor_use: "tough",
        best_approach: "be business-like",
      },
      {
        good_use: "determined",
        poor_use: "demanding",
        best_approach: "don't waste time",
      },
      {
        good_use: "efficient",
        poor_use: "dominating",
        best_approach: "give some freedom",
      },
      {
        good_use: "assertive",
        poor_use: "aggressive",
        best_approach: "talk results",
      },
      {
        good_use: "a risk taker",
        poor_use: "cuts corners",
        best_approach: "find shortcuts",
      },
      {
        good_use: "direct",
        poor_use: "inflexible",
        best_approach: "",
      },
      {
        good_use: "solves problems",
        poor_use: "insensitive",
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
        value: "Tries to dominate or take over, direct.",
      },
      {
        label: "Time orientation",
        value: "Here and now",
      },
      {
        label: "Handshake",
        value: "Strong, assertive.",
      },
      {
        label: "Office",
        value: "The office and desk are probably disorganised.",
      },
      {
        label: "Dress",
        value: "Generally, not concerned, but will dress appropriately.",
      },
      {
        label: "Manners",
        value: "Impatient, rude, and abrupt.",
      },
      {
        label: "Eye contact",
        value: "Direct.",
      },
      {
        label: "Body Language",
        value:
          "Restless and fidgety, usually looks at the speaker and leans forward when interested; may lean back or look away when waiting or when bored.",
      },
      {
        label: "Handling disagreements",
        value: "Will not avoid conflict, may even welcome it.",
      },
    ],
    communication: [
      {
        label: "Management style",
        value: "Directing",
      },
      {
        label: "Communication style",
        value: "Telling",
      },
      {
        label: "Wants to know",
        value: "What are we going to do? and How soon can we do it?",
      },
      {
        label: "Written communication style",
        value:
          "inclined to be brief, crisp, and vague, resents having to take the time to write and will often scribble a brief reply on the sender's original message before returning it.",
      },
    ],
    general: [
      "be direct by nature.",
      "appear to be forceful.",
      "may not give a lot of time.",
      "be running late.",
      "be, or appear to be, rude or blunt.",
      "interrupt, may even take phone calls.",
      "appear non-attentive.",
      "override people.",
      "emphasise points through challenging.",
      "statements be critical and fault finding.",
      "appear aggressive and try to dominate.",
    ],
  }),
};
</script>