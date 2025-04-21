import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddUserComponent } from './dialog-add-user.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';
import { MatMenuModule } from '@angular/material/menu';
import { of } from 'rxjs';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogAddUserComponent', () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

  const firestoreMock = {
    collection: jasmine.createSpy().and.returnValue({
      valueChanges: jasmine.createSpy().and.returnValue(of([])),
      add: jasmine.createSpy().and.returnValue(Promise.resolve())
    })
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), MatDialogModule, RouterModule, MatMenuModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, FormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule],
      declarations: [DialogAddUserComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
        { provide: Firestore, useValue: firestoreMock }
      ]
    });
    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
