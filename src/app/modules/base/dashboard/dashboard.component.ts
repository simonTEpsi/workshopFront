import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Page } from 'src/app/shared/models/page.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
  })
  export class DashboardComponent implements OnInit {

    pagesPertinence3: number;

    data1 = [
      {
        "name": "1",
        "value": 8940000
      },
      {
        "name": "2",
        "value": 5000000
      },
      {
        "name": "3",
        "value": 7200000
      }
    ];

    data2 = [
      {
        "name": "Visiteurs",
        "series": [
          {
            "name": "21 nov",
            "value": 1600
          },
          {
            "name": "22 nov",
            "value": 1680
          },
          {
            "name": "23 nov",
            "value": 1685
          }, {
            "name": "24 nov",
            "value": 1570
          },
          {
            "name": "25 nov",
            "value": 1333
          },
          {
            "name": "26 nov",
            "value": 1555
          },
          {
            "name": "27 nov",
            "value": 400
          }
        ]
      },
    
      {
        "name": "Visiteurs uniques",
        "series": [
          {
            "name": "21 nov",
            "value": 1400
          },
          {
            "name": "22 nov",
            "value": 1321
          },
          {
            "name": "23 nov",
            "value": 1257
          }, {
            "name": "24 nov",
            "value": 1545
          },
          {
            "name": "25 nov",
            "value": 1111
          },
          {
            "name": "26 nov",
            "value": 1369
          },
          {
            "name": "27 nov",
            "value": 250
          }
        ]
      }
    ];

    pages: Page[] = [
      {
        id: 1,
        label: 'homePage',
        pertinence: 3
      },
      {
        id: 1,
        label: 'secondPage',
        pertinence: 2
      },
      {
        id: 1,
        label: 'thirdPage',
        pertinence: 1
      },
      {
        id: 1,
        label: 'Page4',
        pertinence: 2
      },
      {
        id: 1,
        label: 'page5',
        pertinence: 3
      },
      {
        id: 1,
        label: 'page6',
        pertinence: 1
      },
      {
        id: 1,
        label: 'page7',
        pertinence: 3
      },
      {
        id: 1,
        label: 'page_',
        pertinence: 3
      },
      {
        id: 1,
        label: 'page9',
        pertinence: 3
      }
    ]

     // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

    constructor(
      private route: ActivatedRoute,
    ) {
      //Object.assign(this, { single });
     }
    
      ngOnInit(): void {
          console.log( this.route.snapshot.paramMap.get("idWebsite"));
          this.pagesPertinence3 = this.data1.find((page) => page.name === '3').value;
      }
    
      
      onSelect(data): void {
        console.log('Item clicked', JSON.parse(JSON.stringify(data)));
      }
    
      onActivate(data): void {
        console.log('Activate', JSON.parse(JSON.stringify(data)));
      }
    
      onDeactivate(data): void {
        console.log('Deactivate', JSON.parse(JSON.stringify(data)));
      }
  }  