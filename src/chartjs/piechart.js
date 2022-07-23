import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'


const Piechart = ()=> {

  const [State , setState] = useState({
    series: [25,35,35],
options: {
  chart: {
    width: 380,
    height: 380,
    type: 'donut',
  },
  
    
      colors: ['#03C9D7', '#FB9678', '#e9e6ed'],
  plotOptions: {
    pie: {
      startAngle: 0,
      endAngle: 360
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: 'gradient',
  },
  legend: {
    formatter: function(val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex]
    }
  },
},

})
  
    return (
      <div id="chart">
      <ReactApexChart options={State.options} series={State.series} type="donut" width={380} />
    </div>
    );
};

export default Piechart