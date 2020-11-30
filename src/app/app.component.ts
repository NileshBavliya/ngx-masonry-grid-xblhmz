import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  baseUrl: string = 'https://s3.amazonaws.com/sample-v1';

  images = ['architecture', 'boat', 'bonding', 'books', 'family', 'overlooking', 'overview', 'river', 'rocks', 'wedding'];

  list: any[] = [];

  ngOnInit(): void {
    this.list = this.images.map(name => `${this.baseUrl}/${name}.jpg`);
  }

}
