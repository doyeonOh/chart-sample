import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  barChartOption = {
    title: {
      text: '월별 방문자 수'
    },
    tooltip : {
      trigger: 'axis'
    },
    legend: {
      data:['10대','20대','30대','40대','50대']
    },
    toolbox: {
      feature: {
        saveAsImage: {
          title: '저장'
        }
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        boundaryGap : true,
        data : ['1월','2월','3월','4월','5월','6월','7월']
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'10대',
        type:'bar',
        // stack: '',
        data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
        name:'20대',
        type:'bar',
        // stack: '',
        data:[820, 932, 901, 934, 1290, 1330, 1320]
      },
      {
        name:'30대',
        type:'bar',
        // stack: '',
        data:[150, 232, 201, 154, 190, 330, 410]
      },
      {
        name:'40대',
        type:'bar',
        // stack: '',
        data:[320, 332, 301, 334, 390, 330, 320]
      },
      {
        name:'50대',
        type:'bar',
        // stack: '',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        data:[120, 132, 101, 134, 90, 230, 210]
      }
    ]
  };
  

  constructor() { }

  ngOnInit() {
  }

}
