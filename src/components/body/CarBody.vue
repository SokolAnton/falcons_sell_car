<template>
  <main class="main">
    <CarBodyWhatYouNeed></CarBodyWhatYouNeed>
    <OurPartners></OurPartners>
    <WhatPartnersSay></WhatPartnersSay>
    <WhatIWant></WhatIWant>
  </main>
</template>

<script>
import CarBodyWhatYouNeed from "./CarBodyWhatYouNeed.vue";
import OurPartners from "./OurPartners.vue";
import WhatIWant from "./WhatIWant.vue";
import WhatPartnersSay from "./WhatPartnersSay.vue";
export default {
  components: { CarBodyWhatYouNeed, OurPartners, WhatIWant, WhatPartnersSay },
};
</script>

<style>
.main {
  padding-top: 120px;
  background-color: #1a1a1a;
}
</style>
