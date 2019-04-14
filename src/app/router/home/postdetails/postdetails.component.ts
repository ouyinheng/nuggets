import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.scss']
})
export class PostdetailsComponent implements OnInit {

  constructor(
    @Inject('post') private postService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params: any) => {
      this.id = params['id'];
    })
  }
  id: string;
  ngOnInit() {
    this.postService.getAnthur({
      token: JSON.parse(localStorage.userinfo).token,
      id: this.id
    });
    this.postService.getPost({
      token: JSON.parse(localStorage.userinfo).token,
      id: this.id
    });
  }

}
