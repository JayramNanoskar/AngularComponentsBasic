import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss'],
  //encapsulation: ViewEncapsulation.None //bydefault Emulated
  //none- stops encapsulation- won't crete extra attribute on element at runtime
})
export class BlogPostTileComponent implements OnInit {
  @Input() post: BlogPost; // type of input member variable of child component should be same as the type being passed in by the parent component
  fullSummary: string;

  constructor(private truncatePipe: TruncatePipe) { //using Dependency Injection to create single instance(singleton) like we do for service 

   }

  ngOnInit(): void {
    this.fullSummary = this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.post.summary, 30);
  }

  showFullSummary(){
    this.post.summary = this.fullSummary;
  }

  toggleFav(){
    this.post.isFav = !this.post.isFav; // toggle the value
  }
}
