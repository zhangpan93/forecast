<template>
  <div class='container'>
    <div class="nav">  
      <div class="nav-content">
        <span class="brand"></span>
        <div class="nav-item">
          <router-link to="/run">运行</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/forecast">预测</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/event">事件</router-link>
        </div>
      </div>
      <div class="nav-item">
        <router-link to="/login">登陆</router-link>
      </div>
    </div>
    <div class="background">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>   
  </div>
</template>

<script>
export default {
  components: {
   
  }
}
</script>

<style lang="sass">
.container
  height: 100%
.nav
  background: #2d2c3e
  position: fixed
  width: 60px
  height: 100%
  border-radius: 2px
  display: flex
  flex-direction: column
  justify-content: space-between
  .brand
    display: inline-block
    width: 60px
    height: 60px
    background-size: 60px 60px
    background-image: url("./assets/brand.png")
  .nav-item
    height: 60px
    line-height: 60px
    text-align: center
    margin: 20px 0
    &>a
      text-decoration: none
      display: block
      color: #b2b4c4
      border-radius: 5px
      &:hover
        color: #fff
      &.active
        color: #fff
        background: rgba(178, 180, 196,0.2)
.background
  height: 100%
  width: 100%
  padding: 8px 8px 8px 68px 
  background: #e8e2e2
</style>
