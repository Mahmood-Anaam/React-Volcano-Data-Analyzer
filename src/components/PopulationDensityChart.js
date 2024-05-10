// PopulationDensityChart.js
import React, { useEffect, useRef } from "react";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
} from "chart.js";

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title);

const PopulationDensityChart = ({ chartData }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && !chartInstanceRef.current) {
      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "bar",
        data: chartData,
        options: {
          responsive: true,

          scales: {
            x: {
              type: "category",
            },
            y: {
              type: "linear",
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default PopulationDensityChart;
