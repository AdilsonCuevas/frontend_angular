import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaUsersComponent } from './crea-users.component';

describe('CreaUsersComponent', () => {
  let component: CreaUsersComponent;
  let fixture: ComponentFixture<CreaUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreaUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
