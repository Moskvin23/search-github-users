import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Chart1 = ({ data }) => {
  const chartConfigs = {
    type: 'doughnut2d',
    width: '500',
    height: '450',

    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Languages',
        theme: 'fusion',
        decimals: 0,
        pieRadius: '45%',
        bgColor: '#f8f9fd',
        captionFontSize: 30,
        captionFontColor: '#000',
        baseFontSize: 12,
        labelFontSize: 16,
        legendItemFontColor: '#000',
        legendItemFontSize: 14,
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Chart1;
