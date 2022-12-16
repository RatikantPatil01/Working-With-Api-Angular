import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutUpdateApiComponent } from './put-update-api.component';

describe('PutUpdateApiComponent', () => {
  let component: PutUpdateApiComponent;
  let fixture: ComponentFixture<PutUpdateApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutUpdateApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutUpdateApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
