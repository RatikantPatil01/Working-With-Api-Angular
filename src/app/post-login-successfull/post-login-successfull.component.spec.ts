import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLoginSuccessfullComponent } from './post-login-successfull.component';

describe('PostLoginSuccessfullComponent', () => {
  let component: PostLoginSuccessfullComponent;
  let fixture: ComponentFixture<PostLoginSuccessfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostLoginSuccessfullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostLoginSuccessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
