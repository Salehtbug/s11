import { Component } from '@angular/core';
import { ServicesService } from '../../MyService/services.service';
@Component({
  selector: 'app-addpro',
  templateUrl: './addpro.component.html',
  styleUrl: './addpro.component.css'
})
export class AddproComponent {
  categories: any[] = []; 
  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.getCategories();
  }
  getCategories() {
    this.service.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (error) => {
        console.error("Error fetching categories:", error);
        alert("Failed to load categories!");
      }
    });
  }

  onSubmitData(formData: any) {
    if (!formData.name || !formData.price || !formData.category) {
      alert("Please fill in all required fields!");
      return;
    }

    this.service.addProducts(formData).subscribe({
      next: () => {
        alert("Product added successfully!");
      },
      error: (error) => {
        console.error("Error adding product:", error);
        alert("Failed to add product!");
      }
    });
  }
}
