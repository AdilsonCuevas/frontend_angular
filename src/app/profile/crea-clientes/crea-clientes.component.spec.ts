import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaClientesComponent } from './crea-clientes.component';

describe('CreaClientesComponent', () => {
  let component: CreaClientesComponent;
  let fixture: ComponentFixture<CreaClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreaClientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
