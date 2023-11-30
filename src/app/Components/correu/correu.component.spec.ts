import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreuComponent } from './correu.component';

describe('CorreuComponent', () => {
  let component: CorreuComponent;
  let fixture: ComponentFixture<CorreuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorreuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorreuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
