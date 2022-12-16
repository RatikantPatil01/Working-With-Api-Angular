import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserNotFoundComponent } from './single-user-not-found.component';

describe('SingleUserNotFoundComponent', () => {
  let component: SingleUserNotFoundComponent;
  let fixture: ComponentFixture<SingleUserNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleUserNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleUserNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
