import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToshokanComponent } from './toshokan.component';

describe('ToshokanComponent', () => {
  let component: ToshokanComponent;
  let fixture: ComponentFixture<ToshokanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToshokanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToshokanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
