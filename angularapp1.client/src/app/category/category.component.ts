import { Component } from '@angular/core';
import { ServicesService } from '../MyService/services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  constructor(private service: ServicesService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.getData();
  }

  data: any[] = []
  getData() {
    this.service.getCategories().subscribe(d => {
      this.data = d
    })
  }

  editCategory(categoryId: number) {
    this.router.navigate(['/editcat', categoryId]);
  }
}
