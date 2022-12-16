import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLoginUnsuccessfullComponent } from './post-login-unsuccessfull.component';

describe('PostLoginUnsuccessfullComponent', () => {
  let component: PostLoginUnsuccessfullComponent;
  let fixture: ComponentFixture<PostLoginUnsuccessfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostLoginUnsuccessfullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostLoginUnsuccessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
