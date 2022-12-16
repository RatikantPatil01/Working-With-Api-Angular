import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRegistrationApiComponent } from './post-registration-api.component';

describe('PostRegistrationApiComponent', () => {
  let component: PostRegistrationApiComponent;
  let fixture: ComponentFixture<PostRegistrationApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostRegistrationApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostRegistrationApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
