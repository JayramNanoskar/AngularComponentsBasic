import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {
  @Input() title: string;
  @Input("description") summary: string;

  constructor() { }

  ngOnInit(): void {
  }

}
