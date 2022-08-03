<template>
  <div class="c-chart__container">
    <v-chart ref="chart" :option="chartOptions" />
  </div>
</template>

<script>
import moment from "moment";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
]);

export default {
  name: "PerformanceChartComponent",

  components: {
    VChart,
  },

  props: {
    chartData: {
      type: Array,
      default: () => [],
    },
    startDate: {
      type: Number,
      default: null,
    },
    endDate: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      // chartData: [
      //   {
      //     date_ms: 1641772800000,
      //     performance: 0.2,
      //   },
      //   {
      //     date_ms: 1641859200000,
      //     performance: 0.33,
      //   },
      //   {
      //     date_ms: 1641945600000,
      //     performance: 0.53,
      //   },
      //   {
      //     date_ms: 1642032000000,
      //     performance: 0.31,
      //   },
      //   {
      //     date_ms: 1642118400000,
      //     performance: 0.65,
      //   },
      //   {
      //     date_ms: 1642204800000,
      //     performance: 0.88,
      //   },
      //   {
      //     date_ms: 1642291200000,
      //     performance: 0.07,
      //   },
      // ],
    };
  },

  computed: {
    initOptions() {
      return {
        width: "auto",
        height: "300px",
      };
    },
    chartOptions() {
      return {
        title: {
          text: "Team Performance Index",
          left: "center",
        },
        grid: {
          left: "30px",
          right: "12px",
          bottom: "2px",
          top: "6px",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          showGrid: false,
          data: this.xAxisData,
          axisLine: {
            show: true,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            fontSize: 11,
          },
        },
        yAxis: {
          axisLabel: { show: true },
          axisTick: { show: true },
          splitLine: { show: true },
        },
        visualMap: {
          top: 50,
          right: 10,
          pieces: [
            {
              gt: 0,
              lte: 50,
              color: "rgb(255, 99, 71)",
            },
            {
              gt: 50,
              lte: 80,
              color: "rgb(255, 255, 73)",
            },
            {
              gt: 80,
              lte: 100,
              color: "rgb(41, 173, 85)",
            },
          ],
          outOfRange: {
            color: "#999",
          },
        },
        tooltip: {
          trigger: "axis",
          backgroundColor: "#152238",
          formatter: function (params) {
            var colorSpan = (color) =>
              '<span style="display:inline-block;text-align: center;border-radius:10px;width:9px;height:9px;background-color:' +
              color +
              '"></span>';
            let rez =
              '<p style="text-align: center;font-weight: 900;font-size: 14px;padding: 2px 0px;margin: 0;color: #fff">' +
              params[0].axisValue +
              "</p>";
            //console.log(params); //quite useful for debug
            params.forEach((item) => {
              //console.log(item); //quite useful for debug
              var xx =
                '<p style="font-size: 14px;padding: 2px 0px;margin: 0;color: #fff">' +
                colorSpan(item.color) +
                " " +
                item.seriesName +
                ": " +
                item.data +
                "%" +
                "</p>";
              rez += xx;
            });

            return rez;
          },
        },
        toolbox: {
          right: 10,
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            restore: {},
            saveAsImage: {},
          },
        },
        series: [
          {
            name: "Team Performance Index",
            data: this.yAxisData,
            type: "line",
            symbol: "circle",
            symbolSize: 1,
            cursor: "default",
            lineStyle: {
              width: 2,
            },
          },
        ],
      };
    },
    xAxisData() {
      return this.chartData.map((item) => this.formatDate(item.date_ms));
    },

    yAxisData() {
      return this.chartData.map((item) => +item.performance * 100);
    },
  },

  methods: {
    formatDate(dateInMs) {
      return moment(dateInMs).format("DD MMM YYYY");
    },
  },
};
</script>
