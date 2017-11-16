<template>
  <div class="container">
    <div class="card-wrapper">
      <ul style="height:100%">
      	<li v-for="(item,index) in array" class="card">
           <div class="echarts" :id="classMap[index]"></div>
      	</li>
      </ul>	
    </div>
  </div>
</template>

<script>
import echarts from "echarts"

export default {
  data () {
    return {
      array: [1,2,3,4,5,6],
      data: [1,4,2,3,4,5,1,6,3,5,2,4,1,3,4,6,2,3,2,3,6,5]
    }
  },
  created () {
    this.classMap = ["one","twe","three","four","five","six"];
  },

  mounted () {
    var myChart1 = echarts.init(document.getElementById('one'));
    var myChart2 = echarts.init(document.getElementById('four'));
    var option = {
      visualMap: {
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        min: 0,
        max: 6
      }, 
      title: {
        left: '5%',
        text: '数据'
      },
      tooltip: {
        trigger: 'axis'
      },
      toolbox: {
        show: true,
        right: '8%',
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          magicType: {type: ['bar']},
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        data: this.data,
        boundaryGap : false
      }, 
      yAxis: {
        splitLine: {show: false},

      },
      // grid: {
      //   bottom: '60%'
      // }, 
      series: {
        type: 'line',
        showSymbol: false,
        data: this.data
      }
    } 
    
    myChart1.setOption(option);
    myChart2.setOption(option);
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
      width: 430px
      height: 300px
      border: 2px solid #444
      padding: 20px
      border-radius: 10px
      .echarts
        width: 390px
        height: 260px

</style>
