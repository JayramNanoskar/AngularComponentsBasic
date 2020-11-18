import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  
  //ideally constructor need to keep lightweight, used for dependency injection
  //other stuff should be in ngOnInit() not in constructor() like - regarding initializing instances and also making rest service calls
  //because it is easiar for component testing(inside test classes) - to create new instances for component to run test on it 
  constructor() { }

  ngOnInit(): void { // one of angular lifecycle events marks by certain hooks(point)
    this.blogPosts.push(new BlogPost("Blog post 1", "Summary 1"));
    this.blogPosts.push(new BlogPost("Blog post 2", "Summary 2"));
    this.blogPosts.push(new BlogPost("Blog post 3", "Summary 3"));
  }

}