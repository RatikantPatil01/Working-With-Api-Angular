import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRegisterUnsucessfullApiComponent } from './post-register-unsucessfull-api.component';

describe('PostRegisterUnsucessfullApiComponent', () => {
  let component: PostRegisterUnsucessfullApiComponent;
  let fixture: ComponentFixture<PostRegisterUnsucessfullApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostRegisterUnsucessfullApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostRegisterUnsucessfullApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
