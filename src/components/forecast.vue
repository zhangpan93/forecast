<template>
  <div class="container">
  	<!-- <div class="card-wrapper"> -->
      <ul class="card-container">
      	<li class="card" style="border-right: 1px solid #e8e2e2">
           <div class="echart-container" id="one"></div>
           <ul class="result-container">
             <div style="margin: 30px 20px 0">
                <span style="margin-left: 30px">时间段</span>
                <span style="margin-left: 70px">膨胀水箱实际值(%)</span>
                <span style="margin-left: 30px">膨胀水箱预测值(%)</span>
                <span style="margin-left: 30px">偏差(%)</span>
             </div> 
           	 <li v-for="(item,index) in timeRange" class="timeRange">
           	 	 <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
           	   <div class="result-item">{{item}}:</div>
               <div class='percent'>{{errorRange1[index]}}</div>
               <span class="data">{{waterLevel1[index]}}</span>  
               <span class="truedata">{{waterLevelTrue[index]}}</span> 
           	 </li>
           </ul>
      	</li>
      	<li class="card">
           <div class="echart-container" id="twe"></div>
           <ul class="result-container">
             <div style="margin: 30px 20px 0">
                <span style="margin-left: 60px">时间段</span>
                <span style="margin-left: 180px">膨胀水箱预测值(%)</span>
             </div> 
           	 <li v-for="(item,index) in timeRange" class="timeRange">
           	   <div class="result-item" style="margin-left:50px">{{item}}:</div>
           	   <span class="data" style="margin-right:220px">{{waterLevel2[index]}}</span>  
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
      //time: ["0时","4时","8时","12时","16时","20时","24时"],
      waterLevel1: [46.3,45.6,45.3,45.8,45.6,45.1],
      waterLevelTrue: [46,45,45,46,44,45],
      errorRange1: [0.65,1.33,0.67,-0.4,3.64,0.22],
      waterLevel2: [45.6,45.3,45.7,45.9,46.3,46],
    }
  },
  methods: {
  	setOption (title,waterLevel,waterLevelTrue) {
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
            data: this.timeRange
            // data.map(function (item) {
            //     return item[0];
            // })
        },
        yAxis: {
            splitLine: {
                show: false
            },
            min: 43,
            max: 47
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
            precision: 1,
            pieces: [{
                gt: 40,
                lte: 44.5,
                color: '#cc0033'
            }, {
                gt: 44.5,
                lte: 45,
                color: '#ff9933'
                //color: '#ffde33'
            }, {
                gt: 45,
                lte: 45.5,
                color: '#ffde33'
                //color: '#ff9933'
            }, {
                gt: 45.5,
                lte: 46,
                color: '#096'
            }, {
                gt: 46,
                lte: 46.5,
                color: '#660099'
            }, {
                gt: 46.5,
                color: '#7e0023'
            }],
            outOfRange: {
                color: '#999'
            }
        },
        series: [{
            name: title,
            type: 'line',
            data: waterLevel,
            smooth: false,   //关键点，为true是不支持虚线的，实线就用true
            itemStyle:{
                normal:{
                    lineStyle:{
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                }
            },         
            markLine: {
                silent: true,
                data: [{
                    yAxis: 43.5
                },{
                    yAxis: 44.5
                }, {
                    yAxis: 45
                }, {
                    yAxis: 45.5
                }, {
                    yAxis: 46
                }, {
                    yAxis: 47
                }]
            }
        },
        {
            name: '今日水位实际值',
            type: 'line',
            data: waterLevelTrue,          
        }]
  	  }
  	},
  	setChart () {
  	  var chart1 = echarts.init(document.getElementById("one"));
  	  chart1.setOption(this.setOption("今日水位预测值",this.waterLevel1,this.waterLevelTrue));
  	  var chart2 = echarts.init(document.getElementById("twe"));
  	  chart2.setOption(this.setOption("明日水位预测值",this.waterLevel2));
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
            color: green
          .result-item
            height: 52px
            line-height: 52px
            display: inline-block
          .truedata
            float: right
            margin-right: 140px
            height: 52px
            line-height: 52px
          .data
            float: right
            margin-right: 110px
            height: 52px
            line-height: 52px
          .percent
            display: inline-block
            float: right
            margin-right: 40px
            height: 52px
            line-height: 52px
      
</style>