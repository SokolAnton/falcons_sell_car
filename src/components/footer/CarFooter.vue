<template>
  <footer class="footer">
    <div class="footer--container container">
      <div class="container--leftInfo leftInfo">
        <div class="leftInfo--img">
          <img src="@/assets/img/Falcon's.png" alt="" height="100" />
        </div>
        <div class="leftInfo--titleInfo titleInfo">
          <p>Falcon's</p>
          <p>AutoShop</p>
        </div>
      </div>
      <div class="container--rightInfo rightInfo">
        <div class="rightInfo--top top">
          <a href="">BMW</a>
          <a href="">Audi</a>
          <a href="">Mercedes-Benz</a>
          <a href="">Volkswagen</a>
          <a href="">Huyndai</a>
        </div>
        <div class="rightInfo--midlle midlle">
          <hr />
        </div>
        <div class="rightInfo--btm btm">
          <div class="btm--left left">
            © 2022 Falcon's Developers. All RIGHT RESERVED
          </div>
          <div class="btm--right right">
            <div class="right--ter">TERMS AND CONDITIONS</div>
            <div class="right--pri">PRIVACY POLICY</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  padding: 50px;
  background-color: #1a1a1a;
  .container {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 600px) {
      flex-direction: column;
    }
    .leftInfo {
      display: flex;
      flex-direction: column;
      align-items: center;
      .titleInfo {
        > p {
          margin-top: 20px;
          font-family: "Plus Jakarta Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 200%;
          letter-spacing: -0.03em;
          color: #ffffff;
        }
        p + p {
          margin-left: 15px;
          color: yellow;
        }
      }
    }
    .rightInfo {
      display: flex;
      flex-direction: column;
      .top {
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 780px) {
          flex-direction: column;
          align-items: center;
        }
        > a {
          transition: all 0.5s ease;
          text-decoration: none;
          color: white;
          font-family: "Raleway";
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 28px;
          text-align: right;
          text-transform: uppercase;
          &:hover {
            transform: scale(1.1);
            color: brown;
          }
        }
        a + a {
          margin-left: 10px;
          @media screen and (max-width: 600px) {
            margin-bottom: 10px;
            text-align: center;
            margin-left: 0;
          }
        }
      }
      .midlle {
        margin-top: auto;
        margin-bottom: auto;
        color: red;
        > hr {
          height: 5px;
          border-width: 0;
          color: white;
          background-color: white;
        }
      }
      .btm {
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 780px) {
          flex-direction: column;
          align-items: center;
        }
        .left {
          color: #a1a1a1;
          @media screen and (max-width: 600px) {
            text-align: center;
            margin-top: 10px;
          }
        }
        .right {
          color: white;
          margin-left: 10px;
          display: flex;
          justify-content: space-between;
          @media screen and (max-width: 780px) {
            flex-direction: column;
            align-items: center;
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>
