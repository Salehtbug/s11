import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VouchereditComponent } from './voucheredit.component';

describe('VouchereditComponent', () => {
  let component: VouchereditComponent;
  let fixture: ComponentFixture<VouchereditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VouchereditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VouchereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
