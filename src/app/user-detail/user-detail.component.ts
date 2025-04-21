import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collectionData, collection, doc, addDoc, onSnapshot } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { User } from 'src/models/user.class';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  userId: any = '';
  user: User = new User();
  constructor(private route: ActivatedRoute,public dialog: MatDialog ) { }
  firestore = inject(Firestore);

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    console.log(this.userId)
    this.getUser();
  }

  getUser() {
    onSnapshot(doc(this.firestore, 'users', this.userId), (doc) => {
      this.user = new User(doc.data())
      console.log(this.user)
    })
  }

  editMenu() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editUserDetails() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  
}
