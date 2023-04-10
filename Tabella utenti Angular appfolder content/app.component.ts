import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  name: string;
  username: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] = [];

  constructor(private http: HttpClient) {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => this.users = data);
  }
}