import { Component } from '@angular/core';
import { ServicesService } from '../../MyService/services.service';

@Component({
  selector: 'app-getpro',
  templateUrl: './getpro.component.html',
  styleUrl: './getpro.component.css'
})
export class GetproComponent {

  constructor(private service: ServicesService) { }

  ngOnInit() {

    this.getData();
  }


  products: any[] = []
  getData() {

    this.service.getProducts().subscribe((data) => {

      this.products = data;
    })
  }
}
