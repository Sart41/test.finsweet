import { Chart } from 'chart.js/auto'
import { data, chartsTitle } from './assets/data.js'

export { Stats } from './ui/Stats.jsx'
export { data, chartsTitle } from './assets/data.js'


document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.querySelector('#homeChart').getContext('2d');

  new Chart(ctx, {
    type: 'doughnut',
    options: {
      plugins: {
        legend: {
          display: false,
          labels: {
            color: '#fff'
          }
        }
      }
    },
    data: {
      labels: data.map(row => `${row.value}% ${row.text}`),
      datasets: [
        {
          // label: chartsTitle,
          backgroundColor: data.map(row => row.color),
          data: data.map(row => row.value),
        },
      ],
    },
  });
});