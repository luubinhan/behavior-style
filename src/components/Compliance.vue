<template>
  <article>
    <Heading>{{ labels[0] }}</Heading>

    <div class="mb-6">
      <div class="bg-blue-500 p-2 rounded mb-2" v-for="(info, index) in intro" :key="index">
        {{ info }}
      </div>
    </div>
    <div class="mb-6">
      {{ labels[1] }}
    </div>
    <div class="grid grid-cols-3 gap-6 <md:grid-cols-1">
      <div class="rounded-2xl bg-violet-400 p-4" v-for="(feature, index) in features" :key="index">
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
            {{ feature.icon }}
          </div>
        </div>

        <div class="font-bold">{{ feature.label }}</div>
        <div class="font-light">{{ feature.value }}</div>
      </div>
    </div>

    <div class="text-xl mb-2 font-bold pt-6 <md:(text-left text-2xl)">{{ labels[2] }}</div>

    <div
      class="grid grid-cols-2 gap-4 mb-1 <md:(grid-cols-1 gap-2 pb-4)"
      v-for="(ob, index) in observable"
      :key="index"
    >
      <div class="text-right font-bold <md:text-left">{{ ob.label }}</div>
      <div class="text-left">{{ ob.value }}</div>
    </div>

    <div class="text-xl mb-2 font-bold pt-6 <md:(text-left text-2xl)">{{ labels[3] }}</div>

    <div
      class="grid grid-cols-2 gap-4 mb-1 <md:(grid-cols-1 gap-2 pb-4)"
      v-for="(ob, index) in communication"
      :key="index"
    >
      <div class="text-right font-bold <md:text-left">{{ ob.label }}</div>
      <div class="text-left">{{ ob.value }}</div>
    </div>
    <div class="mb-4 pt-4">{{ labels[4] }}</div>

    <div
      v-for="(item, index) in general"
      :key="index"
      class="mb-1 rounded bg-violet-400 p-2"
    >
      {{ item }}
    </div>
    <section class="">
      <div class="text-xl mb-2 font-bold pt-6 <md:(text-left text-2xl)">
        {{ labels[5] }}
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
        good_use: "accurate",
        poor_use: "critical",
        best_approach: "tell how first",
      },
      {
        good_use: "conscientious",
        poor_use: "fussy",
        best_approach: "list pros and cons",
      },
      {
        good_use: "serious",
        poor_use: "moralistic",
        best_approach: "be accurate and logical",
      },
      {
        good_use: "persistent",
        poor_use: "stuffy",
        best_approach: "provide evidence",
      },
      {
        good_use: "organised",
        poor_use: "stubborn",
        best_approach: "provide deadlines",
      },
      {
        good_use: "deliberate",
        poor_use: "indecisive",
        best_approach: "give them time",
      },
      {
        good_use: "cautious",
        poor_use: "",
        best_approach: "don't rush or surprise",
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
    intro: [
      "Interested in, and places a high value, on facts, figures, data, and reason.",
      "Analytical, systematic, and methodical.",
      "Follows an orderly approach in tackling tasks.",
      "Well organised and thorough.",
    ],
    features: [
      {
        icon: '🚀',
        label: 'Motivator',
        value: 'Standard operating procedures.'
      },
      {
        icon: '😭',
        label: 'Basic fear',
        value: 'Conflict'
      },
      {
        icon: '🏆',
        label: 'Value to the organisation',
        value: 'Quality and standards. Technical competence.'
      },
    ],
    labels: [
      "Compliance",
      "May be viewed too cautious, overly structured; someone who does things too much according to the rules.",
      "Observable Behaviours",
      "Communication",
      "In general, they may",
      "Use of Emotional Intelligence"
    ],
    observable: [
      {
        label: "Approach",
        value:
          "Punctual, prepared, and logical; with cautious phrasing of questions.",
      },
      {
        label: "Time orientation",
        value:
          "Analyses past data, considers the present situation, and projects these facts. Views time in a linear or sequential fashion.",
      },
      {
        label: "Handshake",
        value: "Loose and brief.",
      },
      {
        label: "Office",
        value:
          "Very neat, orderly, almost impersonal; desk is often clear apart from your documentation.",
      },
      {
        label: "Dress",
        value:
          "Conservative, neat, smart business clothes; avoids anything too flamboyant and stays neat all day.",
      },
      {
        label: "Manners",
        value: "Very polite, correct, and diplomatic.",
      },
      {
        label: "Eye contact",
        value:
          "Avoids a lot of eye contact, particularly in an aggressive or hostile situation. May be direct when sure of the facts.",
      },
      {
        label: "Body Language",
        value:
          "Tends to be cautious about expressing feelings through gesture or facial expression; may be seen as impersonal or cold.",
      },
      {
        label: "Handling disagreements",
        value:
          "Prefers to avoid conflict unless or until they have supporting evidence.",
      },
    ],
    communication: [
      {
        label: "Management style",
        value: "Rule enforcement.",
      },
      {
        label: "Communication style",
        value: "In writing.",
      },
      {
        label: "Wants to know",
        value:
          "Facts, figures, and data presented in an orderly fashion with documentation and the chance to examine carefully what is being discussed.",
      },
      {
        label: "Written communication style",
        value:
          "Quite formal and precise with data and key points listed. May use an outline style with subheadings, numbered sections, tables, and appendices.",
      },
    ],
    general: [
      "be very systematic and highly logical.",
      "be careful and compliant; something of a perfectionist.",
      "be disciplined with time.",
      "become too immersed in detail.",
      "be unwilling to act without precedent and so appear indecisive.",
      "get defensive when threatened and may yield position to avoid controversy.",
      "not share personal feelings.",
      "be very well be prepared for your visit.",
      "be on time, and will probably have read any material that you have sent beforehand.",
      "give a nervous laugh or cough to gain thinking time.",
    ],
  }),
};
</script>