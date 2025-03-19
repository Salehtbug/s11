import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetproComponent } from './getpro.component';

describe('GetproComponent', () => {
  let component: GetproComponent;
  let fixture: ComponentFixture<GetproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetproComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
