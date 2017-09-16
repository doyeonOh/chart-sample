import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent {

  title = 'app';
  
    chartList: Chart[] = [
      {
        name:         'ngx-charts',
        link:         'https://github.com/swimlane/ngx-charts',
        demo:         'https://swimlane.github.io/ngx-charts/#/ngx-charts/bar-vertical-stacked',
        featureList:      [
          'Angular 기반',
          '기능 커스터마이징 가능',
          'CSS 통해 스타일 변경 가능'
        ],
        supportIE:      '-',
        license:          'MIT',
        svgOrCanvas:    'SVG',
        performance:    'good',
        documentation:  'O',
        responsive: 'O',
        hasLine:    true,
        hasBar:     true,
        hasArea:    true,
        hasPie:     true,
        hasDonut:   true,
        hasScatter: false,
        hasHeatmap: true,
        hasRadar:   false,
        hasBubble:  true,
        hasTree:    true,
        hasGauge:   true,
        etc: 'NumberCard'
      },
      {
        name:         'ECharts.js',
        link:         'https://github.com/ecomfe/echarts',
        demo:         'https://ecomfe.github.io/echarts-examples/public/index.html',
        featureList:      [
          '방대한 그래프 및 차트 보유',
          '문서화 잘되어 있음',
          'baidu 에서 제작',
          '독보적인 애니메이션 효과',
          'js에서 style 변경 가능'
        ],
        supportIE:      '-',
        license:          'MIT',
        svgOrCanvas:    'Canvas',
        performance:    'very good',
        documentation:  'O',
        responsive: 'O',
        hasLine:    true,
        hasBar:     true,
        hasArea:    true,
        hasPie:     true,
        hasDonut:   true,
        hasScatter: true,
        hasHeatmap: true,
        hasRadar:   true,
        hasBubble:  false,
        hasTree:    true,
        hasGauge:   true,
        etc:        'Candlestick, Boxplot, Map, Parallel, Sankey, Funnel, PictorialBar, ThemeRiver, Caneldar, Custom'
      },
      {
        name:         'chart.js',
        link:         'https://github.com/chartjs/Chart.js',
        demo:         'http://www.chartjs.org/samples/latest/',
        featureList:      [
          '단순하고 직관적',
          '커스텀 차트 작성 가능하도록 API 제공',
          '기존 차트 확장 가능하게 작성 API 제공',
          'js에서 style 변경 가능'
        ],
        supportIE:      'HTML5 기반(IE9+)',
        license:          'MIT',
        svgOrCanvas:    'Canvas',
        performance:    '-',
        documentation:  'O',
        responsive: 'O',
        hasLine:    true,
        hasBar:     true,
        hasArea:    true,
        hasPie:     true,
        hasDonut:   true,
        hasScatter: true,
        hasHeatmap: false,
        hasRadar:   true,
        hasBubble:  false,
        hasTree:    false,
        hasGauge:   false,
        etc:        'Mixed'
      },
      {
        name:         'chartist.js',
        link:         'https://github.com/gionkunz/chartist-js',
        demo:         'https://gionkunz.github.io/chartist-js/examples.html',
        featureList:      [
          '가벼움(no dependency, 10kb)',
          '플러그인 제공(tooltip, point label, axis title, etc)',
          '다양하게 커스터마이징 할 수 있도록 API 제공',
          'css 수정하여 스타일 변경 가능'
        ],
        supportIE:      'animation 제외 IE9+',
        license:        'MIT',
        svgOrCanvas:    'SVG',
        performance:    '-',
        documentation:  'O',
        responsive: 'O',
        hasLine:    true,
        hasBar:     true,
        hasArea:    false,
        hasPie:     true,
        hasDonut:   false,
        hasScatter: false,
        hasHeatmap: false,
        hasRadar:   false,
        hasBubble:  false,
        hasTree:    false,
        hasGauge:   false,
        etc:        'Mixed'
      },
      {
        name:         'armcharts.js',
        link:         'https://www.amcharts.com/',
        demo:         'https://www.amcharts.com/demos/',
        featureList:      [
          '방대한 차트 보유',
          '한국 지도 Map 차트 보유',
          '다양한 커스터마이징 가능',
          'css 수정하여 스타일 변경 가능'
        ],
        supportIE:      'animation 제외 IE9+',
        license:          '조건부 무료',
        svgOrCanvas:    'SVG',
        performance:    'very good',
        documentation:  'O',
        responsive: 'O',
        hasLine:    true,
        hasBar:     true,
        hasArea:    true,
        hasPie:     true,
        hasDonut:   true,
        hasScatter: true,
        hasHeatmap: true,
        hasRadar:   true,
        hasBubble:  true,
        hasTree:    false,
        hasGauge:   true,
        etc   : 'Funnel, Pyramid, XY, Polar, Map, etc'
      },
      {
        name:         'billboard.js',
        link:         'https://naver.github.io/billboard.js/',
        demo:         'https://naver.github.io/billboard.js/demo/',
        featureList:      [
          '국산',
          '단순하고 직관적임',
          'D3 v4+ 의존',
          'C3.js 전체 호환 가능',
          'css 수정하여 스타일 변경 가능'
        ],
        supportIE:      '-',
        license:          'MIT',
        svgOrCanvas:    'SVG',
        performance:    'very good',
        documentation:  'O',
        responsive: 'O',
        hasLine:    true,
        hasBar:     true,
        hasArea:    true,
        hasPie:     true,
        hasDonut:   true,
        hasScatter: true,
        hasHeatmap: false,
        hasRadar:   false,
        hasBubble:  false,
        hasTree:    false,
        hasGauge:   true,
        etc   :     'Mixed'
      },
      {
        name:         'JUI charts',
        link:         'http://jui.io/?p=chart',
        demo:         'http://chartplay.jui.io/?p=use_dashboard_style',
        featureList:      [
          '국산',
          '방대한 그래프 차트 보유',
          '실시간 그래프 차트 보유',
          '한국 지도 Map 차트 보유',
          'jQuery 의존',
          'css 수정하여 스타일 변경 가능'
        ],
        supportIE:      'IE9+',
        license:          'MIT',
        svgOrCanvas:    'SVG, partially Canvas',
        performance:    'very good',
        documentation:  'O',
        responsive: 'O',
        hasLine:    true,
        hasBar:     true,
        hasArea:    true,
        hasPie:     true,
        hasDonut:   true,
        hasScatter: true,
        hasHeatmap: true,
        hasRadar:   true,
        hasBubble:  true,
        hasTree:    false,
        hasGauge:   false,
        etc   : 'Candlestick, Column, Equalizer, 3D Charts, Pyramid, Map, Realtime, Topology, Mixed'
      },
      {
        name:         'Toast UI',
        link:         'https://github.com/nhnent/tui.chart',
        demo:         'https://nhnent.github.io/tui.chart/latest/tutorial-sample13-01-radial-chart.html',
        featureList:      [
          '국산',
          '깔끔하고 직관적인 UI',
          '자연스러운 애니메이션',
          '한국 지도 Map 차트 보유',
          'tui.code-snippet, raphael 의존',
          'css 수정하여 스타일 변경 가능'
        ],
        supportIE:      'IE8+',
        license:        'MIT',
        svgOrCanvas:    'SVG',
        performance:    '',
        documentation:  'O',
        responsive: 'O',
        hasLine:    true,
        hasBar:     true,
        hasArea:    true,
        hasPie:     true,
        hasDonut:   true,
        hasScatter: true,
        hasHeatmap: true,
        hasRadar:   true,
        hasBubble:  true,
        hasTree:    true,
        hasGauge:   false,
        etc   : 'Column, Boxplot, Map, Mixed'
      }
    ];
  
  
    wordCloudList: WordCloud[] = [
      {
        name: 'wordcloud2.js',
        link: 'https://github.com/timdream/wordcloud2.js',
        demo: 'https://timdream.org/wordcloud2.js/#love',
        supportIE: '',
        license: 'Free',
        svgOrCanvas: 'Canvas',
        featureList: []
      },
      {
        name: 'd3-cloud',
        link: 'https://github.com/jasondavies/d3-cloud',
        demo: 'https://www.jasondavies.com/wordcloud/',
        supportIE: '',
        license: 'BSD-3-Clause',
        svgOrCanvas: 'Canvas',
        featureList: [
          '다양한 커스터마이징 가능(각도, 배치 스케일, 나선 모양 등)'
        ]
      },
      {
        name: 'tagcanvas.js',
        link: 'https://github.com/goat1000/TagCanvas',
        demo: 'http://www.goat1000.com/tagcanvas.php',
        supportIE: '',
        license: 'LGPL v3',
        svgOrCanvas: 'Canvas',
        featureList: [
          '3D 로테이션 표현 가능',
          '글자에 가중치를 주어 크기 조절 가능한지 파악 안됨'
        ]
      }
    ];
  
    
  }
  
  interface Chart {
    name: string;
    link: string;
    demo: string;
    supportIE: string;
    license: string;
    svgOrCanvas: string;
    featureList: any[];
    performance: string;
    documentation: string;
    responsive: string;
    hasLine:    boolean;
    hasBar:     boolean;
    hasArea:    boolean;
    hasPie:     boolean;
    hasDonut:     boolean;
    hasScatter:     boolean;
    hasHeatmap:     boolean;
    hasRadar:     boolean;
    hasBubble:    boolean;
    hasTree:    boolean;
    hasGauge:     boolean;
    etc:    string;
  }
  
  interface WordCloud {
    name: string;
    link: string;
    demo: string;
    supportIE: string;
    license: string;
    svgOrCanvas: string;
    featureList: any[];
  }