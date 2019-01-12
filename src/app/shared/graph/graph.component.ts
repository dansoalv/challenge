import { API } from './../../../constant/response';
import { Component, OnInit } from '@angular/core';
import { GbmService } from 'src/services/gbm.service';
import * as moment from 'moment';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
  providers: [GbmService]
})
export class GraphComponent implements OnInit {

  public lineChartData: Array<any> = [];

  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor(private _gbmService: GbmService) { }

  ngOnInit() {
    this.getDataToGraph();
  }

  getDataToGraph() {
    console.log(API.resultObj);
    const data = [];
    const date = [];
    API.resultObj.forEach(element => {
      data.push(element.Precio);
      date.push( moment(element.Fecha).format('d-MM-YY'));
    });

    this.lineChartData = [
      {data: data, label: 'Precio'},
    ];
    this.lineChartLabels = date;

    console.log(this.lineChartData);

    console.log(this.lineChartLabels);

  }



}
