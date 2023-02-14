import { Component } from '@angular/core';
import  { Platform } from '@ionic/angular';

// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      var firebaseConfig = {
        apiKey: "AIzaSyBLaYpLETK-9JIA9UKpOpu7a695bNejZPc",
        authDomain: "csd228-lab-database.firebaseapp.com",
        projectId: "csd228-lab-database",
        storageBucket: "csd228-lab-database.appspot.com",
        messagingSenderId: "33587848145",
        appId: "1:33587848145:web:dbc04798b9bb9b45a3b6f0",
        measurementId: "G-HV5J2B6Q95"
      }

      // Initialize Firebase
      const app = firebase.initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
  });
}
}
