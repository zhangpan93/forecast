<template>
  <div class='container'>
    <div class="nav">  
      <div class="nav-content">
        <div class="brand-wrapper">
          <span class="brand"></span>
        </div>
        <div class="nav-item" style="margin-top: 10px">
          <router-link to="/run">
            <i class="fa fa-line-chart" aria-hidden="true"></i>
            <p>运行</p>
          </router-link>
        </div>
        <div class="nav-item">
          <router-link to="/forecast">
            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
            <p>预警</p>
          </router-link>
        </div>
        <div class="nav-item">
          <router-link to="/event">
            <i class="fa fa-bars" aria-hidden="true"></i>
            <p>事件</p>
          </router-link>
        </div>
        <div class="nav-item">
          <router-link to="/search">
            <i class="fa fa-search" aria-hidden="true"></i>
            <p>搜索</p>
          </router-link>
        </div>
      </div>
      <div class="nav-bottom">
        <div class="nav-item">
          <router-link to="/login">
            <i class="fa fa-user-o" aria-hidden="true"></i>
            <p>登陆</p>
          </router-link>
        </div>
        <div class="nav-item">
          <router-link to="/setting">
            <i class="fa fa-cog" aria-hidden="true"></i>
            <p>设置</p>
          </router-link>
        </div>
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
  data () {
    return {
      
    }
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
    line-height: 25px
    text-align: center
    margin: 20px 0
    & .fa 
      font-size: 18px
    &>a
      text-decoration: none
      display: block
      height: 100%
      padding-top: 4px
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
