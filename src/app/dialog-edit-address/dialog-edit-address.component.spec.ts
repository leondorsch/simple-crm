import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditAddressComponent } from './dialog-edit-address.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';
import { MatMenuModule } from '@angular/material/menu';
import { FirebaseApp } from '@angular/fire/app';

describe('DialogEditAddressComponent', () => {
  let component: DialogEditAddressComponent;
  let fixture: ComponentFixture<DialogEditAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]),MatDialogModule, RouterModule, MatMenuModule],
      declarations: [DialogEditAddressComponent],
      providers:[
        {
          provide: MatDialogRef,
          useValue: {}
        },
        Firestore
      ]
    });
    fixture = TestBed.createComponent(DialogEditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
