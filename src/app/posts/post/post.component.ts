import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,NavigationEnd } from '@angular/router';
import { ApiService } from '../../service/api.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public post: any;
  public userName:any;

  cPage: number = 1;

  public path: any = [];

  constructor(private api : ApiService,private activate: ActivatedRoute){
    this.api.posts(`https://jsonplaceholder.typicode.com/posts`)
    .then(p=>{
     this.post = p;
    }).catch( e => console.log(e));
    this.api.getUsers(`https://jsonplaceholder.typicode.com/users`)
    .then( u => {
      this.userName = u;
    })

    this.activate.url.subscribe(data => {

        this.path = data[0].path;
    });
    console.log(this.path);
    this.getImage();




  }

  getImage() {
    switch (this.path) {
      case 'posts':
        return 'https://i.pinimg.com/originals/29/80/8e/29808e5801fcd4070611f6e170d8d070.jpg';
      case 'users':
        return 'http://4.bp.blogspot.com/-hqSplfhJWHk/TverLVB4H6I/AAAAAAAAAV0/R2hPv5RFHXs/s1600/1317808168962.jpg';
      case 'singlepost':
        return './assets/images/zzz.png';
    }
  }


  ngOnInit(): void {

  }

}
