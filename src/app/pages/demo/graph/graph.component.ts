import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  
  graphChartOption = {
    title: {
      text: '그래프 테스트',
      subtext: '서브 텍스트',
      x: 'center'
    },
    tooltip : {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series : [
      {
        name:'테스트',
        type:'graph',
        layout:'none',
        symbolSize: 50,
        roam: true,
        label: {
          normal: {
            show: true
          }
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeLabel: {
          normal: {
            textStyle: {
              fontSize: 20
            }
          }
        },
        data: [
          {name: '서울', x: 100, y: 200},
          {name: '대전', x: 200, y: 200},
          {name: '대구', x: 300, y: 200},
          {name: '부산', x: 400, y: 200},
          {name: '제주', x: 500, y: 200}
        ],
        links: [
          { 
            source: 0, 
            target: 1, 
            symbolSize: [5, 20], 
            label: { 
              normal: { 
                show: true 
              }
            },
            lineStyle: {
              normal: { curveness: 0.2 }
            }
          },
          {
            source: '서울',
            target: '대전'
          },
          {
            source: '대전',
            target: '대구'
          },
          {
            source: '대구',
            target: '부산'
          },
          {
            source: '부산',
            target: '제주'
          },
          {
            source: '제주',
            target: '서울',
            lineStyle: {
              normal: { curveness: 0.3 }
            }
          }
        ],
        lineStyle: {
          normal: {
            opacity: 0.9,
            width: 2,
            curveness: 0
          }
        }
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
