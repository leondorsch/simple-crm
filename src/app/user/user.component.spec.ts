import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Firestore, FirestoreModule } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { of } from 'rxjs';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  const firestoreMock = {
    collection: jasmine.createSpy().and.returnValue({
      valueChanges: jasmine.createSpy().and.returnValue(of([])),
      add: jasmine.createSpy().and.returnValue(Promise.resolve())
    })
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), MatDialogModule, RouterModule, MatMenuModule],
      declarations: [UserComponent],
      providers: [
        { provide: Firestore, useValue: firestoreMock }
      ]
    });
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
