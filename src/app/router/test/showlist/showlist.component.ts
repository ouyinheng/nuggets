import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.scss']
})
export class ShowlistComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  toNav(path: string) {
    this.router.navigate(['test/' + path]);
  }
}
