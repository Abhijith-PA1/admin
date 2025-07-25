import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function Chart() {
  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-gray-500 font-extrabold p-3">性別・年代比</h3>
        <h3 className="text-gray-500 font-extrabold p-3">
          2024年 <span className="mx-2">01月</span>
        </h3>
      </div>
      <div style={{ width: "100%", height: "500px" }}>
        <Bar
          data={{
            labels: [
              "10代未満",
              "10代",
              "20代",
              "30代",
              "40代",
              "50代",
              "60代",
              "70代",
              "80代",
              "90代以上",
            ],
            datasets: [
              {
                label: "男性",
                data: [60, 100, 180, 200, 220, 190, 150, 50, 40, 30],
                backgroundColor: "rgba(255, 165, 0, 1.0)", 
              },
              {
                label: "女性",
                data: [70, 90, 160, 180, 200, 160, 130, 40, 30, 20],
                backgroundColor: "rgba(255, 165, 0, 0.75)",
              },
              {
                label: "その他",
                data: [10, 20, 40, 50, 60, 40, 30, 20, 10, 5],
                backgroundColor: "rgba(255, 165, 0, 0.5)", 
              },
              {
                label: "回答なし",
                data: [10, 10, 40, 30, 20, 10, 10, 5, 5, 5],
                backgroundColor: "rgba(255, 165, 0, 0.25)",
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
            },
            scales: {
              x: {
                stacked: true,
                title: {
                  display: true,
                  text: "年代",
                },
              },
              y: {
                stacked: true,
                beginAtZero: true,
                title: {
                  display: true,
                  text: "人数",
                },
              },
            },
          }}
        />
      </div>
    </>
  );
}

export default Chart;