import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;

  rowHeight = '22';
  rowSelection = 'multiple';

  columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: true, checkboxSelection: true, width: 257},
    {headerName: 'Model', field: 'model', width: 300},
    {headerName: 'Price', field: 'price'}
  ];

  rowData: any;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
}

}
