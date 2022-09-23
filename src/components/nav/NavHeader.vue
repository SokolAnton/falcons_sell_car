<template>
  <header class="header">
    <nav class="header--nav nav">
      <div class="nav--container container">
        <div class="container--left left">
          <img
            class="logo"
            src="@/assets/img/Falcon's.png"
            alt=""
            height="100"
          />
        </div>
        <div class="container--midlle midlle">
          <a class="NavLink" href="">Home</a>
          <a class="NavLink" href="">About us</a>
          <a class="NavLink" href="">Buy car</a>
          <a class="NavLink" href="">Sell car</a>
          <a class="NavLink" href="">Mail us</a>
          <a class="NavLink" href="">Gallery</a>
        </div>
        <div class="container--right right">
          <NavBurgerMenu></NavBurgerMenu>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import NavBurgerMenu from "./NavBurgerMenu.vue";
export default { components: { NavBurgerMenu } };
</script>

<style lang="scss">
.header {
  background-color: #1a1a1a;
  position: fixed;
  z-index: 5;
  left: 0;
  right: 0;
  .nav {
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .midlle {
        a {
          padding: 10px;
          border-radius: 10px;
          text-decoration: none;
          color: white;
          transition: all 0.5s ease;
          opacity: 0.7;
        }
        a + a {
          margin-left: 15px;
        }
        a:hover {
          text-decoration: underline;
          transform: scale(1.3);
          background: white;
          color: #1a1a1a;
          opacity: 1;
        }
      }
      .left {
        .logo {
          margin-top: 20px;
          transition: all 0.7s ease;
          &:hover {
            transform: scale(1.4);
          }
        }
      }
    }
  }
}
@media screen and (max-width: 770px) {
  .right {
    display: block;
  }
  .midlle {
    display: none;
  }
}
</style>
