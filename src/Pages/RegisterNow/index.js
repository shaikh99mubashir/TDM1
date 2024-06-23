import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const RegisterNow = () => {
  // Data for the bar chart
  const barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [65, 99, 35, 81, 44, 55, 85],
        backgroundColor: "pink",
        borderColor: "pink",
        borderWidth: 1,
      },
      {
        label: "Asd",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  // Data for the pie chart
  const pieData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales Distribution",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "red",
          "blue",
          "#FFCE56",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
        ],
      },
    ],
  };

  // Options for the charts
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sales Data",
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove grid lines from the x-axis for bar chart
        },
      },
      y: {
        grid: {
          display: false, // Remove grid lines from the y-axis for bar chart
        },
      },
    },
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Bar data={barData} options={options} />
        </div>
        <div className="col-6">
          <Pie data={pieData} options={options} />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Line data={barData} options={options} />
        </div>
        <div className="col-6">
          {/* Additional chart can be added here */}
        </div>
      </div>
    </div>
  );
};

export default RegisterNow;
