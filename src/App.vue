<template>
  <div class='container'>
    <div class="nav">  
      <div class="nav-content">
        <div class="brand-wrapper">
          <span class="brand"></span>
        </div>
        <div class="nav-item" style="margin-top: 0">
          <router-link to="/run">运行</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/forecast">预测</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/event">事件</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/search">搜索</router-link>
        </div>
      </div>
      <div class="nav-item">
        <router-link to="/login">登陆</router-link>
      </div>
    </div>
    <div class="header">换流阀内冷水</div>
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
  .brand-wrapper
    background: #000
    height: 50px
    padding-top: 4px
    .brand
      display: inline-block
      width: 60px
      height: 42px
      background-size: 60px 42px
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
      border-radius: 3px
      &:hover
        color: #fff
      &.active
        color: #fff
        background: rgba(178, 180, 196,0.2)
.header
  height: 50px
  line-height: 50px
  font-size: 20px
  padding-left: 30px
  font-weight: 400
  position: fixed
  top: 0
  left: 60px
  width: 100%
  background: #fff
.background
  height: 100%
  width: 100%
  padding: 60px 10px 10px 70px 
  background: #e8e2e2
</style>
