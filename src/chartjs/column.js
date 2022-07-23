import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

function Column() {
    const [State, setState] = useState({
        series: [{
            name: 'Ample Admin',
            data: [355,390,300,350,390,180]
          }, {
            name: 'Pixel Admin',
            data: [280,250,325,215,250,310]
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '45%',
                columnHeight: '45%',
                endingShape: 'rounded'
              },
            },
            colors: ['#03C9D7', '#FB9678'],
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Jun','Feb', 'Mar', 'Apr', 'May',  'Jun'],
            },
            yaxis: {
              type:'category',
              category:[100,200,300,400,500]
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return  val 
                }
              }
            }
          },
    })
  return (
    <div id="chart">
  <ReactApexChart options={State.options} series={State.series} type="bar" height={350} />
</div>
  )
}

export default Column