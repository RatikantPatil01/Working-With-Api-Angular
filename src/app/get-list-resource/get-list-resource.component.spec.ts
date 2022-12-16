import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetListResourceComponent } from './get-list-resource.component';

describe('GetListResourceComponent', () => {
  let component: GetListResourceComponent;
  let fixture: ComponentFixture<GetListResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetListResourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetListResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
