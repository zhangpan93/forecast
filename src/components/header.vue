<template>
  <div class="header">
    <div class="title">换流阀内冷水</div>
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
<style lang="sass">
.header
  height: 50px
  line-height: 50px
  font-size: 20px
  padding-left: 70px
  font-weight: 400
  position: fixed
  width: 100%
  background: #2d2c3e
  color: #fff
  display: flex
  justify-content: space-between
  .title
    flex: 2
  .time
    flex: 1

</style>