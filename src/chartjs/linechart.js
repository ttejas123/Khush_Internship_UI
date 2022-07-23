import React, {useState} from 'react';
import ReactApexChart from 'react-apexcharts'

const App = ()=> {

  const [State, setState] = useState({
    series: [{
      name: 'Erning',
      data: [{
          x: '16/08',
          y: 0
        },
        {
          x: '17/08',
          y: 5
        },
        {
          x: '18/08',
          y: 6
        },
        {
          x: '19/08',
          y: 8
        },
        {
          x: '20/08',
          y: 25
        },
        {
          x: '21/08',
          y: 9
        },
        {
          x: '22/08',
          y: 11
        },
        {
          x: '23/08',
          y: 24
        }
      ]
    },{
      name: 'Expense',
      data: [{
          x: '16/08',
          y: 0
        },
        {
          x: '17/08',
          y: 3
        },
        {
          x: '18/08',
          y: 1
        },
        {
          x: '19/08',
          y: 2
        },
        {
          x: '20/08',
          y: 8
        },
        {
          x: '21/08',
          y: 1
        },
        {
          x: '22/08',
          y: 5
        },
        {
          x: '23/08',
          y:1
        }
      ]
    }],
    
    options: {
      chart: {
        type: 'area',
        height: 100
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
          
          curve: 'smooth',
          width: 5,     
      },
      
      
      
      xaxis: {
        type: 'category',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        grid: {
          borderColor: '#111',
          strokeDashArray: 7,
        },
        
      },
      yaxis: {
        type: 'category',
        category:[0,6,12,18,24,30],
        tickAmount: 4,
        floating: false,
      
        labels: {
          style: {
            colors: '#8e8da4',
          },
          offsetY: -7,
          offsetX: 0,
        },
        axisBorder: {
          show: false,

        },
        axisTicks: {
          show: false
        },
        
      },
      
      tooltip: {
        x: {
          format: "category",
        },
        fixed: {
          enabled: false,
          position: 'topRight'
        }
      },
      grid: {
        yaxis: {
          lines: {
            offsetX: -30
          }
        },
        padding: {
          left: 10
        }
      }
    },
  
  
  
  })


    return (
      <div >
        <ReactApexChart options={State.options} series={State.series} type="line" height={350} />
        
      </div>
    );
  }


export default App;

