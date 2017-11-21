<template>
  <div class="container">
    <div class="card-wrapper">
      <ul style="height:100%">
      	<li v-for="(item,index) in idMap" class="card">
           <div class="echarts" :id="item"></div>
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
      date: [],
      waterLevel: {},
      idMap: ["one","twe","three","four","five","six"]
    }
  },
  created () {
    this.$http.get('/api/date').then((response) => {
      response = response.body;
      if(response.errno === 0) {
        this.date = response.data;
        this.$nextTick(() => {
          this.loadData();
        })
      }
    });
    this.$http.get('/api/waterLevel').then((response) => {
      var response = response.body;
      if(response.errno === 0) {
        this.waterLevel = response.data;
        this.$nextTick(() => {
          this.loadData();
        })
      }
    });
  },
  methods: {
    loadData () {
      // console.log(this.waterLevel.four)
      var myChart1 = echarts.init(document.getElementById('one'));
      var myChart2 = echarts.init(document.getElementById('four'));
      var myChart3 = echarts.init(document.getElementById('twe'));
      var myChart4 = echarts.init(document.getElementById('five'));
      var myChart5 = echarts.init(document.getElementById('three'));
      var myChart6 = echarts.init(document.getElementById('six'));
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
          data: this.date,
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
          data: this.waterLevel.four
        }
      } 
      myChart1.setOption(option);
      myChart2.setOption(option);
      myChart3.setOption(option);
      myChart4.setOption(option);
      myChart5.setOption(option);
      myChart6.setOption(option);
    }
  },
  mounted () {
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
      width: 433px
      height: 360px
      margin: 10px
      border: 2px solid #444
      padding: 20px
      border-radius: 10px
      .echarts
        width: 390px
        height: 260px

</style>
