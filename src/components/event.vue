<template>
  <div class="container">
    <div class="event">

      <div class="search-wrapper">

        <div class="search-container">
          <div class="dateRange">
            <label>日期&nbsp;&nbsp;</label>
            <input class="form-control" type="text"> &nbsp;至&nbsp;
            <input class="form-control" type="text">
          </div>

          <div class="timeRange">
            <label>时间段&nbsp;&nbsp;</label>
            <input class="form-control" type="text">
          </div>

          <div class="important">
            <label>状态&nbsp;&nbsp;</label>
            <input type="button" class="button1" value="黄色预警" style="background-color:yellow">
            <input type="button" class="button1" value="橙色预警" style="background-color:#ff9800">
            <input type="button" class="button1" value="红色预警" style="background-color:red">
          </div>

          <div class="filter-button">
            <input type="button" class="button2" value="搜索">
            <input type="button" class="button2" value="重置">
          </div>
        </div>

        <div class="filter">
          <label style="margin-left:30px">排序&nbsp;&nbsp;&nbsp;</label>
         <input type="button" class="button3" value="时间">
         <input type="button" class="button3" value="报警状态">
         <input type="button" class="button3" value="点击量">
        </div>
      </div>

      <div class="card-wrapper">

        <div class="card card-yellow">
          <div class="title">
            <span>2015-2-27&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8时-12时</span>
            <i class="fa fa-exclamation-triangle" aria-hidden="true" style="color:yellow"></i>
          </div>
        
          <div class="param">
            <div>
              <span>阀组功率(MW)：1171</span> 
              <span style="margin-left: 80px">阀厅温度(°C)：24</span>
            </div>
            <p>阀组内冷水进水温度(°C)：30.2</p>
            <p>阀组内冷水出水温度(°C)：46.0</p>
          </div>

          <div class="waterLevel">
            <p class="chazhi">偏差(%)：4.2</p>
            <p>膨胀水箱实际值(%)：45</p>
            <p>膨胀水箱理论值(%)：46.88</p>
          </div>
        </div>

        <div class="card card-yellow">
          <div class="title">
            <span>2015-7-4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4时-8时</span>
            <i class="fa fa-exclamation-triangle" aria-hidden="true" style="color:yellow"></i>
          </div>
        
          <div class="param">
            <div>
              <span>阀组功率(MW)：1100</span> 
              <span style="margin-left: 80px">阀厅温度(°C)：16</span>
            </div>
            <p>阀组内冷水进水温度(°C)：36.4</p>
            <p>阀组内冷水出水温度(°C)：45.2</p>
          </div>

          <div class="waterLevel">
            <p class="chazhi">偏差(%)：5.8</p>
            <p>膨胀水箱实际值(%)：34</p>
            <p>膨胀水箱理论值(%)：35.96</p>
          </div>
        </div>

        <div class="card card-yellow2">
          <div class="title">
            <span>2015-4-20&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8时-12时</span>
            <i class="fa fa-exclamation-triangle" aria-hidden="true" style="color:#ff9800"></i>
          </div>
        
          <div class="param">
            <div>
              <span>阀组功率(MW)：994</span> 
              <span style="margin-left: 80px">阀厅温度(°C)：22</span>
            </div>
            <p>阀组内冷水进水温度(°C)：34.2</p>
            <p>阀组内冷水出水温度(°C)：42.7</p>
          </div>

          <div class="waterLevel">
            <p class="chazhi">偏差(%)：7.4</p>
            <p>膨胀水箱实际值(%)：35</p>
            <p>膨胀水箱理论值(%)：37.6</p>
          </div>
        </div>

        <div class="card card-red">
          <div class="title">
            <span>2015-9-15&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12时-16时</span>
            <i class="fa fa-exclamation-triangle" aria-hidden="true" style="color:red"></i>
          </div>
        
          <div class="param">
            <div>
              <span>阀组功率(MW)：1101</span> 
              <span style="margin-left: 80px">阀厅温度(°C)：24</span>
            </div>
            <p>阀组内冷水进水温度(°C)：33.6</p>
            <p>阀组内冷水出水温度(°C)：43.8</p>
          </div>

          <div class="waterLevel">
            <p class="chazhi">偏差(%)：10.95</p>
            <p>膨胀水箱实际值(%)：37</p>
            <p>膨胀水箱理论值(%)：41.05</p>
          </div>
        </div>

        <div class="card card-red">
          <div class="title">
            <span>2016-10-7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4时-8时</span>
            <i class="fa fa-exclamation-triangle" aria-hidden="true" style="color:red"></i>
          </div>
        
          <div class="param">
            <div>
              <span>阀组功率(MW)：1053</span> 
              <span style="margin-left: 80px">阀厅温度(°C)：18</span>
            </div>
            <p>阀组内冷水进水温度(°C)：34.8</p>
            <p>阀组内冷水出水温度(°C)：46.1</p>
          </div>

          <div class="waterLevel">
            <p class="chazhi">偏差(%)：12.76</p>
            <p>膨胀水箱实际值(%)：30</p>
            <p>膨胀水箱理论值(%)：33.83</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome ff Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.container
  background: #fff
  border-radius: 8px
  overflow: auto
  padding: 30px
  .event
    background-color: #fff
    border-radius: 8px
    height: 100%
    .search-wrapper
      background-color: #f2f2f2
      border-radius: 4px
      margin-bottom: 10px
      .button1,.button2,.button3
        width: 80px
        font-size: 14px
        border-radius: 4px
        margin-right: 10px
      .button2
        background-color: #08daf5
      .button3
        background-color: rgba(0,176,255,0.38)
        color: #fff
        border-radius: 10px
        margin-right: 20px
      .search-container
        display: flex
        justify-content: space-around
        padding: 30px 14px 30px 0
        .filter-button
         // width: 250px
      .filter
        padding-bottom: 20px
        
    .card-wrapper
      padding: 40px 0 0 30px
      border-top: 1px solid #2d2c3e
      .card-yellow
        border: 1px solid yellow
      .card-yellow2
        border: 1px solid #ff9800
      .card-red
        border: 1px solid red
      .card
        display: inline-block
        width: 390px
        margin: 0 20px 40px 0
        padding: 20px
        .title
          font-size: 20px
          margin-bottom: 10px
          font-weight: 600
        .param  
          font-size: 14px
          margin-left: 15px
          color: rgb(197,197,197)
        .waterLevel
          font-size: 14px
          margin-top: 10px
          .chazhi
            float: right
            width: 160px
            height: 40px
            border-left: 1px solid rgb(197,197,197)
            padding-left: 16px
            line-height: 40px
            font-size: 20px
        .fa 
           margin-left: 100px
           float: right

   

</style>
