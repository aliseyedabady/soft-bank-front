import React from "react";
import Chart from "react-apexcharts";

const PieChart = () => {
  const state = {
    series: [25, 40, 24, 15],
    options: {
      chart: {
        width: "100%",
        type: "pie",
        toolbar: {
          show: false,
        },
        fontFamily: "Morabba",
      },
      labels: ["سرگرمی", "هزینه قبض", "سرمایه گذاری", "دیگر"],

      plotOptions: {
        pie: {
          dataLabels: {
            offset: -15,
          },
        },
      },
      title: {
        text: undefined,
      },
      colors: ["#16DBCC", "#FF82AC", "#4D78FF", "#FFBB38"],
      dataLabels: {
        formatter(val, opts) {
          const name = opts.w.globals.labels[opts.seriesIndex];
          return [name, val.toFixed(1) + "%"];
        },
      },
      legend: {
        show: false,
      },
    },
  };
  return (
    <Chart
      options={state.options}
      series={state.series}
      type="pie"
      height={385}
    />
  );
};

export default PieChart;
