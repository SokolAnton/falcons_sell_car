<template>
  <div class="salesOffer">
    <div class="container">
      <h2>
        You can register and get a personal discount
        <img src="@/assets/img/discount.png" alt="" /> for checking car at out
        service station
      </h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.salesOffer {
  width: 100%;
  margin-top: 200px;
  padding: 10px 0;
  text-align: center;
  background: linear-gradient(307.72deg, #f3cd06 2.04%, #ec0000 98.59%);
  border-radius: 10px;
  overflow: hidden;
  > h2 {
    text-transform: uppercase;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 200%;
    letter-spacing: 0.04em;
    background: linear-gradient(270deg, #1a1a1a 1.34%, #000000 110.19%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    > img {
      margin: 0 10px;
    }
  }
}
</style>
