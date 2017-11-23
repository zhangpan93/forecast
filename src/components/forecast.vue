<template>
  <div class="container">
  	<!-- <div class="card-wrapper"> -->
      <ul class="card-container">
      	<li class="card" style="border-right: 1px solid #e8e2e2">
           <div class="echart-container" id="one"></div>
           <ul class="result-container">
           	 <li v-for="(item,index) in timeRange" class="timeRange">
           	 	 <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
           	   <div class="result-item">{{item}}:</div>
           	   <div class='percent'>1.34%</div>
           	   <span class="data">54</span>  
           	 </li>
           </ul>
      	</li>
      	<li class="card">
           <div class="echart-container" id="twe"></div>
           <ul class="result-container">
           	 <li v-for="(item,index) in timeRange" class="timeRange">
           	 	 <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
           	   <div class="result-item">{{item}}:</div>
           	   <div class='percent'>2.17%</div>
           	   <span class="data">53</span>  
           	 </li>
           </ul>
      	</li>
      </ul>	
    <!-- </div> -->
  </div>
</template>

<script>
import echarts from "echarts"

export default {
  data () {
    return {
    	timeRange: ["00时-04时","04时-08时","08时-12时","12时-16时","16时-20时","20时-24时"],
      time: ["0时","4时","8时","12时","16时","20时","24时"],
      waterLevel: [26,49,87,43,62,14,58]
    }
  },
  methods: {
  	setOption (title,waterLevel) {
  	  return {
  	  	title: {
            text: title,
            top: "3%",
            left: '1%'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            data: this.time
            // data.map(function (item) {
            //     return item[0];
            // })
        },
        yAxis: {
            splitLine: {
                show: false
            }
        },
        grid: {
          bottom: '10%',
          top: '24%',
          left: '6%'
        },
        toolbox: {
            left: 'center',
            top: "2%",
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                magicType: {type: ['bar','line']},
                restore: {},
                saveAsImage: {}
            }
        },
        // dataZoom: [{
        //     startValue: '2014-06-01'
        // }, {
        //     type: 'inside'
        // }],
        visualMap: {
            top: 0,
            right: 0,
            pieces: [{
                gt: 0,
                lte: 20,
                color: '#096'
            }, {
                gt: 20,
                lte: 40,
                color: '#ffde33'
            }, {
                gt: 40,
                lte: 50,
                color: '#ff9933'
            }, {
                gt: 50,
                lte: 60,
                color: '#cc0033'
            }, {
                gt: 60,
                lte: 80,
                color: '#660099'
            }, {
                gt: 80,
                color: '#7e0023'
            }],
            outOfRange: {
                color: '#999'
            }
        },
        series: {
            name: 'Beijing AQI',
            type: 'line',
            data: waterLevel,
            // data.map(function (item) {
            //     return item[1];
            // }),
            markLine: {
                silent: true,
                data: [{
                    yAxis: 20
                }, {
                    yAxis: 40
                }, {
                    yAxis: 50
                }, {
                    yAxis: 60
                }, {
                    yAxis: 80
                }]
            }
        }
  	  }
  	},
  	setChart () {
  	  var chart1 = echarts.init(document.getElementById("one"));
  	  chart1.setOption(this.setOption("明天水位",this.waterLevel));
  	  var chart2 = echarts.init(document.getElementById("twe"));
  	  chart2.setOption(this.setOption("后天水位",this.waterLevel.reverse()));
  	}
  },
  mounted () {
  	this.setChart();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.container
  background: #fff
  border-radius: 4px
  overflow: auto
  .card-container
    height: 100%
    display: flex
    justify-content: space-around
    flex-wrap: wrap
    .card
      display: inline-block
      width: 662px
      height: auto
      margin: 10px 0
      padding: 20px      
      .echart-container
        width: 621px
        height: 400px
      .result-container
        display: flex
        flex-direction: column
        border-top: 1px dotted #e8e2e2
        .timeRange
          display: inline-block
          padding: 0 20px
          cursor: pointer 
          &:hover
            background: #f1f1f1
            border-radius: 5px
          .fa 
            margin-right: 6px
            color: red
          .result-item
            height: 52px
            line-height: 52px
            display: inline-block
          .data
            float: right
            margin-right: 160px
            height: 52px
            line-height: 52px
          .percent
            display: inline-block
            float: right
            margin-right: 50px
            height: 52px
            line-height: 52px
      
</style>