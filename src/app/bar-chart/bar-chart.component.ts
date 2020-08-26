import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006', '2007', '2008', '2009'];

  public barChartType = 'bar';

  public barChartLegend = true;

  public barChartData = [
    {
      data: [65, 59, 80, 81], label: 'Series A',
    },
    {
      data: [65, 9, 80, 11], label: 'Series B',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
