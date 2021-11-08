import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { extrema } from "./util/getMinMaxValues";

// CSS
import "../css/hourlyForecast.css";

const data = {
  //   labels: ["January", "February", "March", "April", "May", "June", "July"],

  datasets: [
    {
      label: "Temperature",
      // backgroundColor: "rgba(255,99,132,0.2)",
      backgroundColor: "rgba(255,99,132,0.0)",
      borderColor: "orangered",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",

      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

export default function HourlyForecast(props) {
  const { hourly } = props;

  function computeNumPoints() {
    const ww = window.innerWidth;
    let _numPoints = 6;
    if (ww >= 640) {
      _numPoints = 12;
    }
    if (ww >= 720) {
      _numPoints = 18;
    }
    if (ww >= 1024) {
      _numPoints = 24;
    }
    // console.log(`pts: ${_numPoints}`)
    return _numPoints;
  }

  //NOTE copy of chart object
  const graphData = { ...data };
  console.log(
    "🚀 ~ file: HourlyForecast.jsx ~ line 47 ~ HourlyForecast ~ graphData",
    graphData
  );

  graphData.labels = [];
  graphData.datasets[0].data = [];
  const [numPoints, setNumPoints] = useState(computeNumPoints());

  useEffect(() => {
    console.log("Observing resize");
    const listener = () => {
      const newValue = computeNumPoints();
      if (numPoints !== newValue) {
        setNumPoints(newValue);
      }
    };

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [numPoints]);

  for (let i = 0; i < numPoints; i++) {
    // getHourlyTemp.push(hourly[i].temp);
    const formatttedDate = new Date(hourly[i].dt * 1000).getHours();

    graphData.labels.push(formatttedDate);
    graphData.datasets[0].data.push(hourly[i].temp);
  }
  const minMax = extrema(graphData.datasets[0].data, 0.5);
  // console.log(`minMax`, minMax, graphData.datasets[0].data);

  return (
    <div className="hourly-forecast">
      <h2>Hourly forecast</h2>

      <div className="hourly-forecast_chart">
        <Line
          data={graphData}
          // width={window.innerWidth - 100}
          // height={150}
          options={{
            layout: {
              padding: 35,
            },

            labels: {
              defaultFontSize: 24,
            },
            plugins: {
              // Change options for ALL labels of THIS CHART
              datalabels: {
                formatter: function (value, context) {
                  const index = context.dataIndex;
                  const label = context.chart.data.labels[index];

                  // NOTE converting index to string
                  const isMax = minMax.maxlist.includes("" + index);
                  const isMin = minMax.minlist.includes("" + index);
                  const symbol = isMax ? "▲ " : isMin ? "▼ " : "";

                  if (
                    isMax ||
                    isMin ||
                    index === 0 ||
                    index === graphData.datasets[0].data.length - 1
                  ) {
                    return `${symbol}${value.toFixed(1)}°`;
                  }
                  return ``;
                },

                color: "#fff",
                offset: -30,
                align: "start",
                anchor: "end",
              },
            },

            scales: {
              yAxes: [
                {
                  ticks: {
                    display: false,
                  },
                },
              ],
            },
            legend: {
              display: false,
            },
            maintainAspectRatio: false,
            responsive: true,
          }}
        />
      </div>
    </div>
  );
}
