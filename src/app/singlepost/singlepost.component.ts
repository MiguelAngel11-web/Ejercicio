import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {
  public post:any = [];
  public comment: any = [];
  public noComments = false;

  constructor(public activatedRoute: ActivatedRoute, public api: ApiService) {
    this.activatedRoute.params.subscribe( params =>{
      api.getPostsForUser(`https://jsonplaceholder.typicode.com/posts/${params['id']}`).then(p => {
        this.post = p;
      })
     api.getComments(`https://jsonplaceholder.typicode.com/posts/${params['id']}/comments`).then( c =>  {
       this.comment = c;
       this.noComments = false;
      });
      if(this.comment == null){
        this.noComments = true;
      }

    })
   }

  ngOnInit(): void {
  }

}
