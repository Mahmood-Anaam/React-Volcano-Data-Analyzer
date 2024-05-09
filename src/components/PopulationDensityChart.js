// PopulationDensityChart.js
import React, { useEffect, useRef } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title } from 'chart.js';

// Register required components explicitly
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title);

const PopulationDensityChart = ({ chartData }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && !chartInstanceRef.current) {
      // Create a new chart instance only if it hasn't been created yet
      chartInstanceRef.current = new Chart(chartRef.current, {
        type: 'bar',
        data: chartData,
        options: {
          responsive: true,
          
          scales: {
            x: {
              type: 'category',
            },
            y: {
              type: 'linear',
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      // Cleanup chart instance on component unmount or before re-render
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [chartData]);

  return <canvas ref={chartRef} />;
};

export default PopulationDensityChart;
