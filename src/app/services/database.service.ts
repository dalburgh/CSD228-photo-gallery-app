import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {
  Database,
  getDatabase,
  ref,
  push,
  onValue,
  query,
} from 'firebase/database';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  db: Database;
  logins: any[] = [];

  constructor() {
    this.db = getDatabase(firebase.getApp());
  }

  writeLoginToDatabase(email: string) {
    const auditloginRef = ref(this.db, 'logins');

    let dbData = {
      email: email,
      loginDate: new Date().getTime(),
    };

    push(auditloginRef, dbData);
    this.loadLogins();
  }

  loadLogins() {
    let auditLogRef = ref(this.db, 'logins');

    onValue(query(auditLogRef), (snapshot) => {
      if (snapshot.hasChildren()) {
        this.logins = [];
        snapshot.forEach((child) => {
          this.logins.push(child.val());
        });
      }
    });
  }
}
