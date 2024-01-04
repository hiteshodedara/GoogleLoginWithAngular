import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error404PageComponent } from './error-404-page.component';

describe('Error404PageComponent', () => {
  let component: Error404PageComponent;
  let fixture: ComponentFixture<Error404PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Error404PageComponent]
    });
    fixture = TestBed.createComponent(Error404PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
