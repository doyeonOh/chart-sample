import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  pieChartOption = {
    title: {
      text: '월별 방문자 수',
      subtext: '1월',
      x: 'center'
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'right',
      data:['10대','20대','30대','40대','50대']
    },
    series : [
      {
        name:'10대',
        type:'pie',
        data: [
          {value: 220, name: '10대'},
          {value: 820, name: '20대'},
          {value: 150, name: '30대'},
          {value: 320, name: '40대'},
          {value: 120, name: '50대'}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        } 
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
