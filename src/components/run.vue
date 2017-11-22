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
      waterLevel: [],
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
    setOption (time,waterLevel) {
      return {
        visualMap: {
          show: false,
          type: 'continuous',
          seriesIndex: 0,
          min: 0,
          max: 6
        }, 
        title: {
          left: '5%',
          text: time
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
          data: waterLevel
        }
      }
    },
    loadData () { 
      var charts = [];
      for(var i=0;i<this.idMap.length;i++){
        charts[i] = echarts.init(document.getElementById(this.idMap[i]));
        charts[i].setOption(this.setOption(this.waterLevel[i].time,this.waterLevel[i].data));
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
