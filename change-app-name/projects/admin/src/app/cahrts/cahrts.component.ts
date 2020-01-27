import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-cahrts',
  templateUrl: './cahrts.component.html',
  styleUrls: ['./cahrts.component.scss']
})
export class CahrtsComponent implements OnInit {

  
  title = 'admin';
  
  canvas: any;
  ctx: any;
  
  canvas1: any;
  ctx1: any;
  constructor() { }

  ngOnInit(): void { 
    Chart.defaults.global.responsive = true;
  }

  ngAfterViewInit() {
    this.pieChart();
    this.lineChart2();
    this.barChart();
    this.polarChart();
  }

  lineChart() {
    // var ctx = document.getElementById('myChart').getContext('2d');
    this.canvas1 = document.getElementById('line');
    this.ctx1 = this.canvas1.getContext('2d');
    var chart = new Chart(this.ctx1, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'LINE Chart - Oil Price',
          backgroundColor: 'rgba(99, 99, 99, .4)',
          borderWidth: 2,
          borderColor: '#FFEA88',
          fill: true,
          fillColor: "rgba(172,194,132,1)",
          strokeColor: "green",
          pointColor: "red",
          pointStrokeColor: "red",
          lineTension: 0.25,
          pointRadius: 2,
          data: [203, 156, 99, 251, 305, 247, 259]
        }]
      },

      // Configuration options go here
      options: {
        responsive: false,
        display: true,
        animation: {
          duration: 250,
          easing: 'easeInOutExpo',
          animateScale: true,
          animateRotate: true

        },
        legend: {
          labels: { fontColor: 'black' },
          borderWidth: 0,
        },
        scales: {
          xAxes: [{
            ticks: { fontColor: 'black' },
            gridLines: {
              color: 'rgba(255, 99, 132, 1)',
            }
          }],
          yAxes: [{
            ticks: {
              fontColor: 'aqua',
              max: 350,
              min: 50
            },
            // gridLines: { color: 'rgba(99,99,99,0.9)' }
          }]
        }
      }
    });
  }

  pieChart() {
    this.canvas = document.getElementById('pie');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: ["New", "In Progress", "On Hold", "LOL"],
        datasets: [{
          label: '# of Votes',
          data: [2, 2, 2, 6],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(99, 99, 99, 1)'
          ],
          // borderWidth: 5,
          // borderColor:"#000",
          weight: 10
        }]
      },
      options: {
        responsive: false,
        display: true,
        cutoutPercentage: 50,
        rotation: 0.5 * Math.PI,
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    });

    this.canvas.onclick = (event) => {
      var activePoints = myChart.getElementsAtEvent(event);

      let addRadiusMargin = 5;
      if (activePoints.length > 0) {
        // update the newly selected piece
        activePoints[0]['_model'].innerRadius = activePoints[0]['_model'].innerRadius +
          addRadiusMargin;
        activePoints[0]['_model'].outerRadius = activePoints[0]['_model'].outerRadius +
          addRadiusMargin;
      }

      myChart.render({
        duration: 800,
        lazy: false,
        easing: 'easeOutBounce'
      });
    };
  }

  lineChart2() {
    // var ctx = document.getElementById('myChart').getContext('2d');
    this.canvas1 = document.getElementById('line');
    this.ctx1 = this.canvas1.getContext('2d');
    var chart = new Chart(this.ctx1, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'LINE Chart - Oil Price',
          backgroundColor: 'rgba(99, 99, 99, .4)',
          borderWidth: 2,
          borderColor: '#FFEA88',
          fill: true,
          fillColor: "rgba(172,194,132,1)",
          strokeColor: "green",
          pointColor: "red",
          pointStrokeColor: "red",
          lineTension: 0.25,
          pointRadius: 2,
          data: [203, 156, 99, 251, 305, 247, 259]
        },
        {
          label: 'LINE Chart - Oil Price',
          backgroundColor: 'rgba(127, 199, 34, .4)',
          borderWidth: 2,
          borderColor: '#FFEA88',
          fill: true,
          fillColor: "rgba(172,194,132,1)",
          strokeColor: "red",
          pointColor: "green",
          pointStrokeColor: "red",
          lineTension: 0.25,
          pointRadius: 2,
          data: [305, 247, 259, 203, 156, 99, 251]
        }
        ]
      },

      // Configuration options go here
      options: {
        responsive: false,
        display: true,
        animation: {
          duration: 250,
          easing: 'easeInOutExpo',
          animateScale: true,
          animateRotate: true
        },
        legend: {
          labels: { fontColor: 'black' },
          borderWidth: 0,
        },
        scales: {
          xAxes: [{
            ticks: { fontColor: 'black' },
            gridLines: {
              color: 'rgba(255, 99, 132, 1)',
            }
          }],
          yAxes: [{
            ticks: {
              fontColor: 'aqua',
              max: 350,
              min: 50
            },
            // gridLines: { color: 'rgba(99,99,99,0.9)' }
          }]
        }
      }
    });
  }


  barChart() {
    let canvas: any = document.getElementById('bar');
    let ctx = canvas.getContext('2d');

    this.canvas = document.getElementById('bar');
    this.ctx = canvas.getContext('2d');

    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'LINE Chart - Oil Price',
            fill: true,
            // fillColor: [
            //   "rgba(172,194,132,1)",
            //   'rgba(255, 99, 132, 1)',
            //   'rgba(54, 162, 235, 1)',
            //   'rgba(255, 206, 86, 1)',
            // ],

            // borderWidth: 2,
            // borderColor: '#FFEA88',
            barPercentage: 0.9,
            // barThickness: 6,
            // maxBarThickness: 8,
            // minBarLength: 2,
            // borderSkipped: 676,
            categoryPercentage: .8,
            borderWidth: 1,
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              "rgba(172,194,132,1)",
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',

            ],
            data: [10, 20, 30, 40, 50, 60, 70]
          },
          {
            label: 'LINE Chart - Oil Price',
            // fill: true,
            // fillColor: [
            //   "rgba(172,194,132,1)",
            //   'rgba(255, 99, 132, 1)',
            //   'rgba(54, 162, 235, 1)',
            //   'rgba(255, 206, 86, 1)',
            // ],
            // borderWidth: 2,
            // borderColor: '#FFEA88',
            // strokeColor: "green",
            // pointColor: "red",
            // pointStrokeColor: "red",
            // lineTension: 0.25,
            // pointRadius: 2, 

            // barPercentage: 1.9,
            // barThickness: 6,
            maxBarThickness: 100,
            // minBarLength: 0,
            // borderSkipped: 676,
            categoryPercentage: .8,
            borderWidth: 1,
            backgroundColor: [
              "rgba(172,194,132,1)",
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            data: [10, 20, 30, 40, 50, 60, 70]
          }]
      },

      // Configuration options go here
      options: {
        responsive: false,
        display: true,
      
        animation: {
          duration: 1250,
          easing: 'easeInOutExpo',
          animateScale: true,
          animateRotate: true
        },
        title : {
          display : true,
          position : "top",
          text : "Bar Graph",
          fontSize : 18,
          fontColor : "#111"
        },
        legend : {
          display : false
        },
        scales : {
          yAxes : [{
            ticks : {
              min : 0,
              
            },
            barPercentage: 1
          }],
          xAxes: [{
            // barPercentage: 0.9,
            // maxBarThickness: 100,
            // barPercentage: "flex",
        }]
        }
      }
    });

    // var data = {
    //   labels: ["match1", "match2", "match3", "match4", "match5"],
    //   datasets: [
    //     {
    //       label: "TeamA score",
    //       data: [10, 50, 25, 70, 40],
    //       backgroundColor: [
    //         "red", "green", "blue", "purple", "magenta"
    //       ],
    //       borderColor: [
    //         "#111", "#111", "#111", "#111", "#111"
    //       ],
    //       borderWidth: 1
    //     },
    //     {
    //       label: "TeamB score",
    //       data: [20, 35, 40, 60, 50],
    //       backgroundColor: [
    //         "aqua", "salmon", "darkgray", "pink", "coral"
    //       ],
    //       borderColor: [
    //         "#111", "#111", "#111", "#111", "#111"
    //       ],
    //       borderWidth: 1
    //     }
    //   ]
    // };

    // var options = {
    //   title: {
    //     display: true,
    //     position: "top",
    //     text: "Bar Graph",
    //     fontSize: 18,
    //     fontColor: "#111"
    //   },
    //   legend: {
    //     display: false
    //   },
    //   scales: {
    //     yAxes: [{
    //       ticks: {
    //         min: 0
    //       }
    //     }]
    //   }
    // };

    // var chart = new Chart(this.ctx, {
    //   type: "bar",
    //   data: data,
    //   options: options
    // });

    // });
  }

  polarChart() {
    this.canvas = document.getElementById('polararea');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'polarArea',
      data: {
        labels: ["New", "In Progress", "On Hold", "LOL"],
        datasets: [{
          data: [1200, 1700, 800, 200],
          backgroundColor: [
            "rgba(255, 0, 0, 0.5)",
            "rgba(100, 255, 0, 0.5)",
            "rgba(200, 50, 255, 0.5)",
            "rgba(0, 100, 255, 0.5)"
          ]
        }]
      },
      options: {
        responsive: false,
        display: true,
        cutoutPercentage: 50,
        rotation: 0.5 * Math.PI,
        legend: {
          position: 'left'
        },
       
        animation: {
          animateScale: true,
          animateRotate: true,
          duration: 2250,
          easing: 'easeInOutExpo',
        }
      }
    });

   
  }
}
