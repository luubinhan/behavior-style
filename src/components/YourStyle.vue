<template>
  <section class="text-center">
    <Card class="mb-6">
      <Compliance :data="data" />
    </Card>
    <div class="text-xs" v-if="lang === 'vi'">
      <i>
        Hành vi của bạn có thể thay đổi theo ngữ cảnh, hoàn cảnh, người mà bạn
        tiếp xúc, nó có thể là sự trộn lẫn giữa các cách ứng xử khác nhau chứ
        không thiên hẳn về một hành vi. Tuy nhiên trong hầu hết các trường hợp
        đây sẽ là cách ứng xử hàng đầu của bạn, ưu tiên hơn so với những cách
        ứng xử khác.
      </i>
    </div>
    <div class="text-xs" v-else>
      <i>
        Your DISC style can change according to the context, your circumstances
        and the people that you are with, and you will blend all the styles
        together rather than having one clearly defined style. However, in most
        situations, this style will be your leading style and will take
        precedence.
      </i>
    </div>
  </section>
</template>

<script>
import Card from "@/components/Card";
import Steadiness from "@/components/Steadiness";
import Dominance from "@/components/Dominance";
import Compliance from "@/components/Compliance";
import Influence from "@/components/Influence";
import DataCompliance from "../data/compliance";
import DataComplianceVi from "../data/compliance.vi";
import DataDominance from "../data/dominance";
import DataDominanceVi from "../data/dominance.vi";
import DataSteadiness from "../data/steadiness";
import DataSteadinessVi from "../data/steadiness.vi";
import DataInfluence from "../data/influence";
import DataInfluenceVi from "../data/influence.vi";

export default {
  props: ["yourStyle", "lang"],
  components: {
    Card,
    Steadiness,
    Dominance,
    Compliance,
    Influence,
  },
  data: () => ({
    DataCompliance,
    DataDominance,
  }),
  computed: {
    data() {
      if (this.lang !== "en") {
        switch (this.yourStyle) {
          case "a":
            return DataSteadiness;
          case "b":
            return DataDominance;
          case "c":
            return DataCompliance;
          case "d":
            return DataInfluence;
        }
      }

      if (this.lang === "vi") {
        switch (this.yourStyle) {
          case "a":
            return DataSteadinessVi;
          case "b":
            return DataDominanceVi;
          case "c":
            return DataComplianceVi;
          case "d":
            return DataInfluenceVi;
        }
      }
      return {};
    },
  },
};
</script>