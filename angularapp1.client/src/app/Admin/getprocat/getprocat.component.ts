import { Component } from '@angular/core';
import { ServicesService } from '../../MyService/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-getprocat',
  templateUrl: './getprocat.component.html',
  styleUrl: './getprocat.component.css'
})
export class GetprocatComponent {

  products: any[] = [];
  categoryId: any;
  errorMessage: string = '';
  constructor(private service: ServicesService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.getData();
  }

  getData() {
    this.categoryId = this.route.snapshot.paramMap.get("id");

    this.service.getProducts().subscribe((data) => {

      this.products = data.filter((p: any) => p.categoryId == this.categoryId)
      error: (error:any) => {
        console.error("Error fetching products:", error);
        this.errorMessage = "Failed to load products!";
      }
    })
  }
}
