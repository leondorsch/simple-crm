import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';
import { Firestore, collectionData, collection, doc, addDoc, onSnapshot } from '@angular/fire/firestore';
import { inject } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[1]);
 

  firestore = inject(Firestore);

  user = new User();
  allUsers: User[] = [];

  constructor(public dialog: MatDialog) {
    onSnapshot(collection(this.firestore, 'users'), (snapshot) => {
      this.allUsers = snapshot.docs.map(doc => {let user = new User(doc.data()); user.id = doc.id; return user;});
      console.log(this.allUsers)
    });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent)
  }
}
