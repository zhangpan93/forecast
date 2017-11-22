<template>
  <div class="container">
    <div class="card-wrapper">
      <ul class="card-container">
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
      waterLevel: [],
      idMap: ["one","twe","three","four","five","six"]
    }
  },
  created () {
    this.$http.get('/api/cooling').then((response) => {
      response = response.body;
      if(response.errno === 0) {
        this.date = response.data.date;
        this.waterLevel = response.data.waterLevel;
        this.$nextTick(() => {
          this.loadData();
        })
      }
    });
  },
  methods: {
    setOption (date,waterLevel) {
      return {
        visualMap: {
          show: false,
          type: 'continuous',
          seriesIndex: 0,
          min: 0,
          max: 6
        }, 
        title: {
          left: '2%',
          text: waterLevel.time        //时间段标题
        },
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          show: true,
          right: '2%',
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            magicType: {type: ['bar','line']},
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          data: date,                //横轴日期
          boundaryGap : false
        }, 
        yAxis: {
          splitLine: {show: false},
        },
        grid: {
          bottom: '10%',
          right: '4%'
        }, 
        series: {
          type: 'line',
          showSymbol: false,
          data: waterLevel.data        //纵轴水位
        }
      }
    },
    //为容器设置echarts
    loadData () { 
      var charts = [];
      for(var i=0;i<this.idMap.length;i++){
        charts[i] = echarts.init(document.getElementById(this.idMap[i]));
        charts[i].setOption(this.setOption(this.date,this.waterLevel[i]));
      } 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
.container
  background: #fff
  border-radius: 4px
  overflow: auto
  .card-wrapper
    height: 100%
    .card-container
      height: 100%
      display: flex
      justify-content: space-around
      align-items: center
      flex-wrap: wrap
      .card
        display: inline-block
        width: 433px
        height: 360px
        margin: 10px
        border: 2px solid #444
        padding: 20px
        border-radius: 10px
        .echarts
          width: 389px
          height: 300px

</style>
