import { Component } from '@angular/core';
import { ServicesService } from '../MyService/services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editcat',
  templateUrl: './editcat.component.html',
  styleUrl: './editcat.component.css'
})
export class EditcatComponent {

  category: { name: string, img: string } = { name: '', img: '' };
  id: any
  cat: any
  constructor(private service: ServicesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');


    this.service.getCategoryById(this.id).subscribe((data: any) => {
      this.category = data;

    });
  }

  onSubmitData(data: any) {
    this.service.editCategory(this.id, data).subscribe(() => {
      alert("edited category")
    })
  }

}
