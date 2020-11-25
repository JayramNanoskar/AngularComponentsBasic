import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {
  @Input() post: BlogPost; // type of input member variable of child component should be same as the type being passed in by the parent component

  constructor(private truncatePipe: TruncatePipe) { //using Dependency Injection to create single instance(singleton) like we do for service 

   }

  ngOnInit(): void {
    this.post.summary = this.truncatePipe.transform(this.post.summary, 30);
  }

}
