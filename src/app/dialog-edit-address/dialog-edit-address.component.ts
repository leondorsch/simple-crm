import { Component, inject } from '@angular/core';
import { User } from 'src/models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {
  user!: User;
  userId: any;
  loading = false;
  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) { }
  firestore = inject(Firestore);

  saveUser() {
    this.loading = true;
    updateDoc(doc(this.firestore, 'users', this.userId), this.user.toJSON()).then(()=>{
      this.loading = false;
      this.dialogRef.close();
    })
    
  }

}
