import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: [ '../../node_modules/font-awesome/css/font-awesome.min.css',
  '../../node_modules/npm-font-open-sans/open-sans.css',
  '../../node_modules/primeng/resources/primeng.min.css',
  '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'users-app';
}
