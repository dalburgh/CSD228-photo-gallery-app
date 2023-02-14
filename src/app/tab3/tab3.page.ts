import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public database: DatabaseService) {}

}
