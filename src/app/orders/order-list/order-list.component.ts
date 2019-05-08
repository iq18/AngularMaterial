import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

const ELEMENT_DATA = [
  {orderDate: new Date(), orderNumber: 100, orderTotal: 29.99, description: '3lbs of steak', isChecked: false },
  {orderDate: new Date(), orderNumber: 101, orderTotal: 9.99, description: '6lbs of eggs', isChecked: false },
  {orderDate: new Date(), orderNumber: 102, orderTotal: 5.00, description: '4lbs of cheese', isChecked: false },

];

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  displayedColumns: string[] = ['action', 'orderNumber', 'orderDate', 'description', 'total'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;


  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
