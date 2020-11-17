import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {
  @Input() post: BlogPost; // type of input member variable of child component should be same as the type being passed in by the parent component

  constructor() { }

  ngOnInit(): void {
  }

}
