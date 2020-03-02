<template>
  <div class="main">
    <div class="one">
      <div id="temperature" style="width:600px; height:600px;"></div>
    </div>
    <div class="two">
      <button  @click=" minus" style="background: white"><img src="../../assets/images/减号.png" height="100" width="100" ></button>
      <mt-button class="btn3" type="danger" @click="selectTemperature">温度设定</mt-button>
      <button  @click="plus" style="background: white" ><img src="../../assets/images/加号.png" height="100" width="100" ></button>
      &nbsp;&nbsp;&nbsp;
    </div>
    <div class="waring">
    <mt-button class="btn4" type="danger" @click="warning1">报警策略</mt-button>
    </div>
    <div class="three">
      <mt-cell title="冷柜温度控制"></mt-cell>
    </div>
    <div class="four selectYear">
      <mt-datetime-picker
        v-model="dataValue"
        :value="{value}"
        type="time"
        ref="datePicker"
        @confirm="onConfirm">
      </mt-datetime-picker>
    </div>
  </div>
</template>

<script>
    const echarts = require('echarts');
    import {Toast} from 'mint-ui';
    import {MessageBox} from 'mint-ui';

    export default {

        name: 'Temperature',
        data: function () {
            return {
                minNub:'',
                maxNub:'',
                data: {
                    value: 0,
                },
                dataValue: '',
                series: [],
                toastInstanse: null, // 把这个 Toast实例 注册到data中，只要在这个组件内部中，都能访问到
            };
        },
        mounted() {
            let myChart = echarts.init(document.getElementById('temperature'))
            var option = {
                tooltip: {
                    formatter: "{a} <br/>{b} : {c}℃"
                },
                textStyle: { // 标题样式
                    fontWeight: 'bolder',
                    fontStyle: 'italic',
                    fontSize: '18',
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {
                            show: true
                        },
                        //restore: {
                        //   show: true
                        //},
                        //saveAsImage: {
                        //   show: true
                        // }
                    }
                },
                series: [
                    {
                        startAngle: 200, //开始角度
                        endAngle: -20, //结束角度
                        startAngle: 180, //开始角度 左侧角度
                        endAngle: 0, //结束角度 右侧
                        name: "温度指标",
                        type: "gauge",
                        min: -15,					// 最小的数据值,默认 0 。映射到 minAngle。
                        max: 15,
                        detail: {
                            formatter: "预设温度：{value}℃"
                        },
                        axisLine: {
                            show: true,
                            lineStyle: { // 属性lineStyle控制线条样式
                                color: [ //表盘颜色
                                    [0.3, "#0066ff"],//0-45%处的颜色
                                    [0.7, "#20AE51"],//51%-70%处的颜色
                                    [1, "#DA462C"]//90%-100%处的颜色
                                ],
                                width: 30//表盘宽度
                            }
                        },
                        axisTick: { //刻度线样式（及短线样式）
                            length: 20
                        },
                        axisLabel: { //文字样式（及“10”、“20”等文字样式）
                            color: "black",
                            distance: 5 //文字离表盘的距离
                        },
                        title: {               //设置仪表盘中间显示文字样式
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                fontWeight: 'bolder',
                                fontSize: 25,
                                fontStyle: 'italic',
                                color: "black"
                            }
                        },

                        data: [
                            {
                                value: this.data.value,
                                name: "温 度"
                            }
                        ]
                    }],
            }
            myChart.setOption(option);

        },

        methods: {
            warning1() {
                MessageBox.prompt('请设置最低报警温度', {
                    inputValue: '',
                    confirmButtonText: '确认',
                }).then(({value, action}) => {
                    var that=this
                    var numReg = /^[0-9]*$/
                    var numRe = new RegExp(numReg)
                    if(!numRe.test(value)){
                        this.$toast({message: "请输入正确的数值", className: 'btn'});
                    }
                    else {
                     that.minNub=value}
                       if(action == 'confirm'){
                           this.warning2();
                       }
            })
            },
            warning2(){
                MessageBox.prompt('请设置最高报警温度', {
                    inputValue: '',
                    confirmButtonText: '确认',
                }).then(({value, action}) => {
                    var that=this;
                    var numReg = /^[0-9]*$/
                    var numRe = new RegExp(numReg)
                    if( !numRe.test(value)){
                        this.$toast({message: "请输入正确的数值", className: 'btn'});
                    }
                    else if(value<=that.minNub) {
                        this.$toast({message: "请输入正确的数值", className: 'btn'});
                    }
                    else {
                        that.maxNub=value;
                    }

                       if(action == 'confirm'){
                        this.submitNub();
                    }
                })

            },
            submitNub(){

            },
            drawChart() {
                let myChart = echarts.init(document.getElementById('temperature'))
                var option = {
                    tooltip: {
                        formatter: "{a} <br/>{b} : {c}℃"
                    },
                    textStyle: { // 标题样式
                        fontWeight: 'bolder',
                        fontStyle: 'italic',
                        fontSize: '18',
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: {
                                show: true
                            },
                            //restore: {
                            //   show: true
                            //},
                            //saveAsImage: {
                            //   show: true
                            // }
                        }
                    },
                    series: [
                        {
                            startAngle: 200, //开始角度
                            endAngle: -20, //结束角度
                            startAngle: 180, //开始角度 左侧角度
                            endAngle: 0, //结束角度 右侧
                            name: "温度指标",
                            type: "gauge",
                            min: -15,					// 最小的数据值,默认 0 。映射到 minAngle。
                            max: 15,
                            detail: {
                                formatter: "预设温度：{value}℃"
                            },
                            axisLine: {
                                show: true,
                                lineStyle: { // 属性lineStyle控制线条样式
                                    color: [ //表盘颜色
                                        [0.3, "#0066ff"],//0-45%处的颜色
                                        [0.7, "#20AE51"],//51%-70%处的颜色
                                        [1, "#DA462C"]//90%-100%处的颜色
                                    ],
                                    width: 30//表盘宽度
                                }
                            },
                            axisTick: { //刻度线样式（及短线样式）
                                length: 20
                            },
                            axisLabel: { //文字样式（及“10”、“20”等文字样式）
                                color: "black",
                                distance: 5 //文字离表盘的距离x
                            },
                            title: {               //设置仪表盘中间显示文字样式
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontSize: 25,
                                    fontStyle: 'italic',
                                    color: "black"
                                }
                            },

                            data: [
                                {
                                    value: this.data.value,
                                    name: "温 度"
                                }
                            ]
                        }],
                }
                myChart.setOption(option);

            },
            plus() {
           this.data.value=this.data.value+1;
                this.drawChart();
            },
            minus(){
                this.data.value=this.data.value-1;
                this.drawChart();
            },
            selectTemperature() {
                MessageBox.prompt('请输入预设温度', {
                    inputValue: '',
                    confirmButtonText: '确认',
                }).then(({value, action}) => {
                    var numReg = /^[0-9]*$/
                    var numRe = new RegExp(numReg)
                    if( !numRe.test(value)){
                        this.$toast({message: "请输入正确的数值", className: 'btn'});
                        return;
                    }
                    this.data.value = value;
                    this.drawChart();

                })
            }
        },
        // show() {
        //     // 每当调用的时候，Toast 有一个返回值，这个返回值 重新赋值给 toastInstanse ,以至于后边手动关闭Toast
        //     this.toastInstanse = Toast({
        //         message: "温度设定成功", //弹窗内容
        //         position: "middle", //弹窗位置
        //         //duration: -1, //弹窗时间毫秒,如果值为-1，则不会消失
        //         iconClass: "iconfont icon-duihao1", //设置 图标类
        //
        //
        //     });
        // },

    }
</script>

<style lang="stylus" scoped>
  .one {
    position: absolute;
    top: 15%;
    left: 0%;
  }

  .two {
    position: absolute;
    top: 70%;
    left: 12%;

  }

  .three {
    position: absolute;
    top: 10%;
    left: 0%;
    font-style: normal;
    font-weight: bold;
  }

  .four {
    position: absolute;
    top: 15%;
    left: 8%;
  }
  .waring{
    position:relative
    top:300px;
    left :700px;
  }
  .btn2{
    width 150px
    height 100px
    border-radius:50%
  }
  .btn3{
    width 120px
    height 80px
    background #0086b3
  }

</style>

