import React from "react";
import EChartsReact from "echarts-for-react";
// import echarts from "echarts";

export default function ActivityChart() {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "0%",
      top: "13%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "value",
        splitLine: false,
        axisLabel: {
          textStyle: {
            fontWeight: "bold",
          },
        },
        min: 6,
        max: 27,
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        interval: 5000,
        axisLine: {
          show: false, // Hide the axis line
        },
        axisLabel: {
          textStyle: {
            fontWeight: "bold",
          },
          formatter: function (value) {
            if (typeof value === "number") {
              return value / 1000 + "k";
            }
            return value;
          },
        },
      },
    ],
    series: [
      {
        name: "Direct",
        type: "bar",
        barWidth: "60%",

        data: [
          [7, 4000],
          [8, 8000],
          [9, 6000],
          [10, 4000],
          [11, 3900],
          [12, 6000],
          [13, 6000],
          [14, 4000],
          [15, 3000],
          [16, 6000],
          [17, 4000],
          [18, 11000],
          [19, 12000],
          [20, 8000],
          [21, 14000],
          [22, 3000],
          [23, 6000],
          [24, 3000],
          [25, 11000],
          [26, 4000],
          [27, 6000],
        ],
        itemStyle: {
          barBorderRadius: 10,
        },
      },
    ],
  };

  return (
    <div
    // style={{ width: "500px", height: "300px" }}
    >
      <EChartsReact
        option={option}
        className="chart"
        style={{ width: "100%", paddingBottom: "24px", height: "200px" }}
      />
    </div>
  );
}
