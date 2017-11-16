<template>
  <div class="container">
    <div class="card-wrapper">
      <ul style="height:100%">
      	<li v-for="(item,index) in data" class="card">
           <div class="chart">{{item}}</div>
           <div class="date">{{index}}</div>
      	</li>
      </ul>	
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [1,2,3,4,5,6]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
.container
  background: #fff
  border-radius: 4px
  .card-wrapper
    height: 100%
    .card
      display: inline-block
      width: 33.3%
      height: 50%
      background: #1cd388
      border: 2px solid #fff


</style>
