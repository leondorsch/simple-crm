import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import {MatDialogRef} from '@angular/material/dialog';
import { Firestore, collectionData, collection, doc, addDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();
  birthDate!: Date;
  loading: boolean = false;
  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) { }
  firestore = inject(Firestore);

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.loading = true;
    await addDoc(collection(this.firestore, 'users'), this.user.toJSON())
    .then((result:any)=>{
      this.loading = false;
      console.log(result)
      this.dialogRef.close();
    })
  }
}
