import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private data: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.receiveData().subscribe(
      data => {
        this.data = data;
        this.init();
      });
  }

  /**
   * Initializes the graphic API with a one sec delay
   * wich allows a safe integration with Angular
   * 
   * @return void
   */
  
  init(): void {
    if(typeof(google) !== 'undefined') {
      google.charts.load('current', {'packages':['corechart']});
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.displayGraphics());
      }, 1000);
    }
  }

  displayGraphics(): void {
    this.displayPieChart();
    this.display3dPieChart();
    this.displayDonutChart();
    this.displayBarChart();
    this.displayLineChart();
    this.displayColumnChart();
  }

  displayPieChart(): void {
    const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);

    chart.draw(this.obtainDataTable(), this.obtainOptions());
  }

  display3dPieChart(): void {
    const el = document.getElementById('3d_pie_chart');
    const chart = new google.visualization.PieChart(el);
    const options = this.obtainOptions();

    options['is3D'] = true;
    chart.draw(this.obtainDataTable(), options);
  }

  displayDonutChart(): void {
    const el = document.getElementById('donut_chart');
    const chart = new google.visualization.PieChart(el);
    const options = this.obtainOptions();

    options['pieHole'] = 0.4;
    chart.draw(this.obtainDataTable(), options)
  }

  displayBarChart(): void {
    const el = document.getElementById('bar_chart');
    const chart = new google.visualization.PieChart(el);

    chart.draw(this.obtainDataTable(), this.obtainOptions());
  }

  displayLineChart(): void {
    const el = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(el);

    chart.draw(this.obtainDataTable(), this.obtainOptions());
  }

  displayColumnChart(): void {
    const el = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(el);

    chart.draw(this.obtainDataTable(), this.obtainOptions());
  }

  obtainDataTable(): any {
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Month');
    data.addColumn('number', 'Quantity');
    data.addRows(this.data);

    return data;
  }

  obtainOptions(): any {
    return{
      'title': 'Total of subscriptions on first semester',
      'width': 400,
      'height': 300
    }
  }

}


