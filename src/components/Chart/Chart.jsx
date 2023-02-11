import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Chart1 = ({ data }) => {
  const chartConfigs = {
    type: 'doughnut2d',
    width: '300',
    height: '350',

    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Languages',
        theme: 'fusion',
        decimals: 0,
        pieRadius: '30%',
        bgColor: '#f8f9fd',
        captionFontSize: 20,
        captionFontColor: '#000',
        baseFontSize: 10,
        labelFontSize: 14,
        legendItemFontColor: '#000',
        legendItemFontSize: 12,
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Chart1;
