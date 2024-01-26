import {HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Reporting} from './reporting.model';
import {User} from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'labs-angular-cypress-mockserver';
  list$:Observable<number[]>;
  user$:Observable<User>;
  reporting$:Observable<Reporting>;

  constructor(httpClient: HttpClient) {
    this.list$ = httpClient.get<number[]>('http://localhost:5005/api/list');
    this.user$ = httpClient.get<User>('http://localhost:5005/api/user/2/5');
    this.reporting$ = httpClient.get<Reporting>('http://localhost:5005/api/reporting');
  }
}
