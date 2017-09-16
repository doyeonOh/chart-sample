import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

declare var echarts: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  mapChartOption = {
    title: {
      text: '월별 방문자 수',
      subtext: '지역별',
      left: 'center'
    },
    tooltip : {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'right',
      data:['10대','20대','30대','40대','50대']
    },
    visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        text: ['고','저'],           // 文本，默认为数值文本
        calculable: true
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
          dataView: {readOnly: false},
          restore: {},
          saveAsImage: {}
      }
    },
    series : [
      {
        name:'10대',
        type:'map',
        mapType: 'seoul',
        map: 'seoul',
        roam: false,
        label: {
          normal: {
            show: true
          },
          emphasis: {
            show: true
          }
        },
        data: [
          {value: 220, name: '송파구'},
          {value: 820, name: '강서구'},
          {value: 150, name: '양천구'},
          {value: 320, name: '서초구'},
          {value: 120, name: '금천구'}
        ]
      },
      
    ]
  };

  mapChartOption2 = {
    title: {
      text: '월별 방문자 수',
      subtext: '지방별',
      left: 'center'
    },
    tooltip : {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'right',
      data:['10대','20대','30대','40대','50대']
    },
    visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        text: ['고','저'],           // 文本，默认为数值文本
        calculable: true
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
          dataView: {readOnly: false},
          restore: {},
          saveAsImage: {}
      }
    },
    series : [
      {
        name:'10대',
        type:'map',
        mapType: 'korea',
        map: 'korea',
        roam: false,
        label: {
          normal: {
            show: true
          },
          emphasis: {
            show: true
          }
        },
        data: [
          {value: 220, name: '서울특별시'},
          {value: 820, name: '제주특별자치도'},
          {value: 150, name: '경기도'},
          {value: 320, name: '강원도'},
          {value: 120, name: '세종특별자치시'}
        ]
      },
      
    ]
  };

  myChart: any = null;

  isShow: boolean = false;
  isShow2: boolean = false;

  constructor(
    private _http: Http
  ) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    console.log('afterViewInit');
    this._http.get('assets/map/json/seoul.json')
      .map(res =>  res.json() || {})
      .subscribe(
        (json: any) => { 
          console.log('json', json);
          echarts.registerMap('seoul', json);
          this.isShow = true;
        }
      );

    this._http.get('assets/map/json/korea.json')
      .map(res =>  res.json() || {})
      .subscribe(
        (json: any) => { 
          console.log('json', json);
          echarts.registerMap('korea', json);
          this.isShow2 = true;
        }
      );
  }
}
