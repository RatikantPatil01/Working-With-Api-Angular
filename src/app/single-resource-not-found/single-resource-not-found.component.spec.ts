import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleResourceNotFoundComponent } from './single-resource-not-found.component';

describe('SingleResourceNotFoundComponent', () => {
  let component: SingleResourceNotFoundComponent;
  let fixture: ComponentFixture<SingleResourceNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleResourceNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleResourceNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
