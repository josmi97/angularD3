import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  chartData;

  constructor() { }

  ngOnInit(): void {
    this.generateData();
  }

  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
    this.chartData.push([
    `Index ${i}`,
    Math.floor(Math.random() * 100)
    ]);
   }

   console.log('&&&&', this.chartData)
 }

}
