import { Component, inject } from '@angular/core';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';


@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {
  userId!: string
  user!: User;
  loading = false;
  birthDate!: Date;
  firestore = inject(Firestore);


  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) {

  }

  saveUser() {
    this.loading = true;
    updateDoc(doc(this.firestore, 'users', this.userId), this.user.toJSON()).then(()=>{
      this.loading = false;
      this.dialogRef.close();
    })
    
  }
}
