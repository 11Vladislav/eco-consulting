import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

export const Charts = () => {

    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect = (() =>{
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        const myChartRef = chartRef.current.getContext("2d");
        chartInstance.current = new Chart(myChartRef, {
            type: 'doughnut',
            data: {
                labels: [
                    'Red',
                    'Blue',
                    'Yellow'
                ],
                datasets: [{
                    data: [35, 45, 25],
                    backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                }]
            }
        });
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        }
    },[])

    return (
        <>
            <canvas ref={chartRef} style={{
                width: '300px',
                height: '300px'
            }}/>
        </>
    )
}