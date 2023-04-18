
import { Component, OnInit } from '@angular/core';
import { Post, User } from './api/models';
import { UserService } from './api/user.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'instantanea';

}
