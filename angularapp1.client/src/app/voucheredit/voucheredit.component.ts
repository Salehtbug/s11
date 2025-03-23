import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-voucheredit',
  templateUrl: './voucheredit.component.html',
  styleUrl: './voucheredit.component.css'
})
export class VouchereditComponent {
  @Input() voucher: any;
  @Output() onSave = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<void>();

  save() {
    console.log('Save button clicked:', this.voucher); 
    this.onSave.emit(this.voucher);
  }

  cancel() {
    this.onCancel.emit(); 
  }
  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.voucher.image = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

}
