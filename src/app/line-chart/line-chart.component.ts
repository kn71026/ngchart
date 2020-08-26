import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  public LineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public LineChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];

  public LineChartType = 'line';

  public LineChartLegend = true;

  public LineChartData = [
    {
      data: [65, 59, 80, 81 , 5, 9, 30, 1], label: 'Series A',
    },
    {
      data: [25, 29, 20, 82 , 45, 89, 20, 2], label: 'Series B',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
