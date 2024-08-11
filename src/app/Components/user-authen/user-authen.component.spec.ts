import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthenComponent } from './user-authen.component';

describe('UserAuthenComponent', () => {
  let component: UserAuthenComponent;
  let fixture: ComponentFixture<UserAuthenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAuthenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAuthenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
