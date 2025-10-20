import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singlefruit } from './singlefruit';

describe('Singlefruit', () => {
  let component: Singlefruit;
  let fixture: ComponentFixture<Singlefruit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Singlefruit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Singlefruit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
