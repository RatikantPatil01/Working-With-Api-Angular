import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchUpdateApiComponent } from './patch-update-api.component';

describe('PatchUpdateApiComponent', () => {
  let component: PatchUpdateApiComponent;
  let fixture: ComponentFixture<PatchUpdateApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatchUpdateApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatchUpdateApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
