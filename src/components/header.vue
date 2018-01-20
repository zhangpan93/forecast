<template>
  <div class="header">
    <div class="title">内冷水系统</div>
    <div class="time">{{timemsg}}</div>
  </div>
</template>

<script>
import moment from "moment"

export default {
  data () {
    return {
      timemsg: moment(new Date()).format("YYYY年MM月DD日 HH:mm:ss")
    }
  },
  created () {
  	this.updateTime()
  },
  destroyed () {
  	clearInterval(this.updateTime())
  },
  methods: {
  	updateTime () {
  	  setInterval(() => {
  	  	this.timemsg = moment(new Date()).format("YYYY年MM月DD日 HH:mm:ss");
  	  },1000)
  	  
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.header
  height: 50px
  width: 100%
  line-height: 50px
  font-size: 20px
  padding-left: 60px
  margin-left: 20px
  font-weight: 400
  position: fixed
  background: #2d2c3e
  color: #fff
  display: flex
  .title
    flex: 1
  .time
    flex-basis: 270px

</style>