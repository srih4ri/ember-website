/*
  https://api.highcharts.com/highcharts/plotOptions.spline
*/
export default class SplineChart {
  constructor({ chart, rawData }) {
    this.chart = chart;
    this.series = createSeries(rawData);
  }

  get highchartsOptions() {
    const { chart, series } = this;

    return {
      data: series,

      options: {
        chart: {
          type: 'spline',
        },

        plotOptions: {
          series: {
            marker: {
              enabled: false,
            },
          },
        },

        subtitle: {
          text: chart.subtitle,
        },

        title: {
          text: chart.title,
        },

        tooltip: {
          pointFormat: '{series.name}: {point.y:.1f}%',
        },

        xAxis: {
          categories: chart.categories,
          type: 'category',
        },

        yAxis: {
          min: 0,
          title: {
            text: 'Percent of responses',
          },
        },
      },
    };
  }
}

export function createSeries(rawData = []) {
  const data = [];

  rawData.forEach((datum) => {
    const { color, label, values } = datum;

    data.push({
      color,
      data: values,
      name: label,
    });
  });

  return data;
}
