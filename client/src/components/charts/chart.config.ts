import { ApexOptions } from 'apexcharts';

export const TotalRevenueSeries = [
  {
    name: 'Mois dernier',
    data: [183, 124, 115, 85, 143, 143, 96],
  },
  {
    name: 'Mois en cours',
    data: [95, 84, 72, 44, 108, 108, 47],
  },
];

export const TotalRevenueOptions: ApexOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  colors: ['#475BE8', '#CFC8FF'],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: '55%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ['transparent'],
    width: 4,
  },
  xaxis: {
    categories: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Juil'],
  },
  yaxis: {
    title: {
      text: '€ (milliers)',
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
  },
  tooltip: {
    y: {
      formatter(val: number) {
        return `$ ${val} milliers`;
      },
    },
  },
};