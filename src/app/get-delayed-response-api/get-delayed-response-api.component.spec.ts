import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDelayedResponseApiComponent } from './get-delayed-response-api.component';

describe('GetDelayedResponseApiComponent', () => {
  let component: GetDelayedResponseApiComponent;
  let fixture: ComponentFixture<GetDelayedResponseApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDelayedResponseApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDelayedResponseApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
