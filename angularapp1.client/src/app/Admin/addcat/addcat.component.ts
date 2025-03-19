import { Component } from '@angular/core';
import { ServicesService } from '../../MyService/services.service';

@Component({
  selector: 'app-addcat',
  templateUrl: './addcat.component.html',
  styleUrl: './addcat.component.css'
})
export class AddcatComponent {
  constructor(private service: ServicesService) { }


  submitCategory(data: any) {
    this.service.addCategories(data).subscribe(() => {
      alert("add category")
    })
  }
}
