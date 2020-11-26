import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { count } from 'console';
import { PageService } from 'src/app/core/http/page/page.service';
import { Page } from 'src/app/shared/models/page.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
  })
  export class DashboardComponent implements OnInit {

    pagesPertinence3: number;

    listPages: Page[] = [];

    sortedPages: Page[] = [];
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
      public pageService: PageService
    ) {
      //Object.assign(this, { single });
     }
    
    ngOnInit(): void {
        console.log( this.route.snapshot.paramMap.get("idWebsite"));
        this.getPages(Number(this.route.snapshot.paramMap.get("idWebsite")));
        //this.pagesPertinence3 = this.data1.find((page) => page.name === '3').value;
    }

    private getPages(idApp){
      /*
      this.pageService.getPages(idApp).subscribe((result) => {
        result.forEach((page: Page) => {
          this.listPages.push(
            new Page(page.id, page.label, page.pertinence)
          );
        });
        this.setDataGraph();
      }); */
      this.listPages = this.pages;
      this.sortedPages = this.listPages.slice();
      console.log(this.listPages);
      this.setDataGraph();
    }

    setDataGraph() {
      this.data1 = [
        {
          "name": "Pert. 1",
          "value": this.listPages.filter(page => page.pertinence === 1).length
        },
        {
          "name": "Pert. 2",
          "value": this.listPages.filter(page => page.pertinence === 2).length
        },
        {
          "name": "Pert. 3",
          "value": this.listPages.filter(page => page.pertinence === 3).length
        }
      ]
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

    sortData(sort: Sort): void {
      const data = this.listPages.slice();
      if (!sort.active || sort.direction === '') {
        this.sortedPages = data;
        return;
      }
      this.sortedPages = data.sort((a, b) => {
        console.log(123)
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'label': return this.compare(a.label, b.label, isAsc);
          case 'pertinence': return this.compare(a.pertinence, b.pertinence, isAsc);
          case 'icon': return this.compare(a.pertinence, b.pertinence, isAsc);
          default: return 0;
        }
      });
    }

    public compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }  