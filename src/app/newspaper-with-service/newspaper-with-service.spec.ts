import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperWithService } from './newspaper-with-service';

describe('NewspaperWithService', () => {
  let component: NewspaperWithService;
  let fixture: ComponentFixture<NewspaperWithService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewspaperWithService],
    }).compileComponents();

    fixture = TestBed.createComponent(NewspaperWithService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
