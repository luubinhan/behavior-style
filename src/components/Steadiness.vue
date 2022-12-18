<template>
    <article>
      <Heading>Steadiness</Heading>
  
      <div class="mb-6">
        <div class="bg-blue-500 p-2 rounded mb-2">
            Interested in, and places high value, on personal relationships, feelings, human interactions, and affiliation with others.
        </div>
        <div class="bg-blue-500 p-2 rounded mb-2">
            Warm and sensitive to the feelings of others.
        </div>
        <div class="bg-blue-500 p-2 rounded mb-2">
            Perceptive, able to assess a situation in terms of the human emotions involved.
        </div>
        <div class="bg-blue-500 p-2 rounded mb-2">
            Loyal and supportive.
        </div>
      </div>
      <div class="mb-6">
        May be viewed as emotional, sentimental, and too easily persuaded by
others.
      </div>
      <div class="grid grid-cols-3 gap-6">
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
          <div class="font-light">Security</div>
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
          <div class="font-light">Insecurity</div>
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
          <div class="font-light">Service and support. A specialist.</div>
        </div>
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
      <div class="mb-4 pt-4">In general, they may</div>
  
      <div
        v-for="(item, index) in general"
        :key="index"
        class="mb-1 rounded bg-violet-400 p-2"
      >
        {{ item }}
      </div>
      <section class="">
          <div class="text-xl mb-2 font-bold pt-6">Use of Emotional Intelligence</div>
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
          good_use: "patient",
          poor_use: "hesitant",
          best_approach: "explain why and who first",
        },
        {
          good_use: "respectful",
          poor_use: "vague",
          best_approach: "ask instead of telling",
        },
        {
          good_use: "willing",
          poor_use: "compliant",
          best_approach: "share your feelings",
        },
        {
          good_use: "empathetic",
          poor_use: "conforming",
          best_approach: "draw out their opinions",
        },
        {
          good_use: "agreeable",
          poor_use: "dependent",
          best_approach: "explore personal life",
        },
        {
          good_use: "dependable",
          poor_use: "unsure",
          best_approach: "define expectations",
        },
        {
          good_use: "concerned",
          poor_use: "laid back",
          best_approach: "strive for harmony",
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
          value: "Tentative, considerate, and organised.",
        },
        {
          label: "Time orientation",
          value: "Refers to past events and relationships with others over time.",
        },
        {
          label: "Handshake",
          value: "Sincere",
        },
        {
          label: "Office",
          value: "Pictures in the office may be of possessions and family.",
        },
        {
          label: "Dress",
          value: "Appropriate but for comfort rather than fashion.",
        },
        {
          label: "Manners",
          value: "Very courteous and welcoming.",
        },
        {
          label: "Eye contact",
          value: "Warm, friendly, sincere.",
        },
        {
          label: "Body Language",
          value:
            "Relaxed and attentive.",
        },
        {
          label: "Handling disagreements",
          value: "Prefers to smooth over the situation rather than rush in with an aggressive decision.",
        },
      ],
      communication: [
        {
          label: "Management style",
          value: "Organising",
        },
        {
          label: "Communication style",
          value: "Listening",
        },
        {
          label: "Wants to know",
          value: "How others may feel about the matter, who else will be involved in it, past experiences in similar situations, etc.",
        },
        {
          label: "Written communication style",
          value:
            "informal, chatty, and friendly. May include names and make references to others and to past events.",
        },
      ],
      general: [
        "listen and may not talk a lot.",
        "be content with things as they are.",
        "question in order to clarify.",
        "strive to maintain the status quo.",
        "talk in a slow but firm voice.",
        "not change pace easily or rapidly.",
        "make tentative statements.",
        "be thorough in finishing tasks.",
        "be very security conscious.",
        "appear to lack imagination.",
        "appear convinced (but don’t assume they are!)",
      ],
    }),
  };
  </script>