import { Component } from '@angular/core';
import { ServicesService } from '../MyService/services.service';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent {
  savedata: any[] = [];
  selectedVoucher: any = null;

  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.getvocher();
  }

  getvocher() {
    this.service.getvoacher().subscribe((data) => {
      this.savedata = data.map((v: any) => ({
        ...v,
        image: 'https://th.bing.com/th/id/OIP.SXlrjFkuc-t1SQxLdl3dewHaGz?rs=1&pid=ImgDetMain'
      }));
    });
  }


  openEdit(item: any) {
    this.selectedVoucher = { ...item }; 
  }

  handleSave(voucher: any) {
    if (voucher.id) {
      this.service.updateVoucher(voucher).subscribe(() => {
        this.getvocher();
        this.selectedVoucher = null;
      });
    } else {
      this.service.addVoucher(voucher).subscribe(() => {
        this.getvocher();
        this.selectedVoucher = null;
      });
    }
  }


  handleCancel() {
    this.selectedVoucher = null;
  }
  openNewVoucher() {
    this.selectedVoucher = {
      name: '',
      price: 0,
      quantity: 0,
      image: 'https://th.bing.com/th/id/OIP.SXlrjFkuc-t1SQxLdl3dewHaGz?rs=1&pid=ImgDetMain'
    };
  }

}
