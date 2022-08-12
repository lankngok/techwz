import { ProductService } from 'src/app/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  list:any;
  constructor(private  ProductService : ProductService ) { }

  ngOnInit(): void {
    this.ProductService.getAll().subscribe((data) => {
      this.list = data;
    })
  }

}
