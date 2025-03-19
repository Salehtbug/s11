import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetprocatComponent } from './getprocat.component';

describe('GetprocatComponent', () => {
  let component: GetprocatComponent;
  let fixture: ComponentFixture<GetprocatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetprocatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetprocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
