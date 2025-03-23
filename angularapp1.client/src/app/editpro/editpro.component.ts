import { Component } from '@angular/core';
import { ServicesService } from '../MyService/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editpro',
  templateUrl: './editpro.component.html',
  styleUrl: './editpro.component.css'
})
export class EditproComponent {

  product = {
    name: '',
    avatar: '',
    categoryId: 0
  };

  categories: any[] = [];
  proId: number = 0;
  constructor(private service: ServicesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.proId = Number(this.route.snapshot.paramMap.get("id"));
    this.getProduct();
    this.getCategories();
  }
    getProduct() {
        throw new Error('Method not implemented.');
    }

  getCategories() {
    this.service.getCategories().subscribe((d) => {
      this.categories = d;
    });
  }

  onSubmitData() {
    console.log("Submitting product:", this.product);
    this.service.editProducts(this.proId, this.product).subscribe(() => {
      alert("Product updated successfully!");
    });
  }


}
