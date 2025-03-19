import { Component } from '@angular/core';
import { ServicesService } from '../../MyService/services.service';

@Component({
  selector: 'app-getcat',
  templateUrl: './getcat.component.html',
  styleUrl: './getcat.component.css'
})
export class GetcatComponent {
  data: any[] = [];
  errorMessage: string = ''; 

  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.service.getCategories().subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (error) => {
        console.error("Error fetching categories:", error);
        this.errorMessage = "Failed to load categories!";
      }
    });
  }
}
