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
    <div class="grid grid-cols-2 gap-4">
      <div class="text-right font-bold">Motivator</div>
      <div class="text-left">Power and authority</div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div class="text-right font-bold">Basic fear</div>
      <div class="text-left">Failure</div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div class="text-right font-bold">Value to the organisation</div>
      <div class="text-left">Driving for results</div>
    </div>

    <div class="text-xl mb-2 font-bold pt-6">Observable Behaviours</div>

    <div
      class="grid grid-cols-2 gap-4 mb-1"
      v-for="(ob, index) in observable"
      :key="index"
    >
      <div class="text-right font-bold">{{ ob.label }}</div>
      <div class="text-left">{{ ob.value }}</div>
    </div>

    <div class="text-xl mb-2 font-bold pt-6">Communication</div>

    <div
      class="grid grid-cols-2 gap-4 mb-1"
      v-for="(ob, index) in communication"
      :key="index"
    >
      <div class="text-right font-bold">{{ ob.label }}</div>
      <div class="text-left">{{ ob.value }}</div>
    </div>
    <div class="mb-4">In general, they may</div>
  </article>
</template>
  
  <script>
import Heading from "@/components/Heading";

export default {
  components: {
    Heading,
  },
  data: () => ({
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
  }),
};
</script>