import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarCharts = ({ data }) => {
    // Process the data to get labels and datasets
    const chartData = {
        labels: data.map(item => item.date),
        datasets: [
           
            {
                label: 'Expenses ($)',
                data: data.map(item => item.expense),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'Income ($)',
                data: data.map(item => item.income),
                backgroundColor: 'rgba(15, 87, 185, 0.5)',
                borderColor: 'rgba(15, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'Profit ($)',
                data: data.map(item => item.profit),
                backgroundColor: 'rgba(29, 228, 18,0.8)',
                borderColor: 'rgba(70, 200, 200, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default BarCharts;
