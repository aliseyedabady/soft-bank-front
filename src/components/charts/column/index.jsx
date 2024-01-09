import React from "react";
import Chart from "react-apexcharts";

const ColumnChart = () => {
  const state = {
    series: [
      {
        name: "برداشت",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "سپرده گزاری",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      chart: {
        // type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
        fontFamily: "Morabba",
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%",
          endingShape: "rounded",
          borderRadius: 5,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        categories: [
          "فروردین",
          "اردیبهشت",
          "خرداد",
          "تیر",
          "مرداد",
          "شهریور",
          "مهر",
          "آبان",
          "آذر",
        ],
      },
      yaxis: {},
      colors: ["#16DBCC", "#FDAA0A"],
      legend: {
        position: "top",
        horizontalAlign: "right",
        markers: {
          offsetX: 3,
          offsetY: 3,
          radius: 12,
        },
      },
      fill: {
        opacity: 1,
      },

      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " تومان";
          },
        },
      },
    },
  };

  return (
    <Chart
      options={state.options}
      series={state.series}
      type="bar"
      height={350}
    />
  );
};

export default ColumnChart;
