import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  // blogPosts: BlogPost[] = [];
  blogPosts: BlogPost[][]; //Array of array- here blogPosts is array of pages and each page is array of blog-posts i.e.[page][blog-post]
  currentPage: number;
  //ViewChild takes an argument same as a template reference variable(marked in view) to pickup value of view's that particular component instance
  @ViewChild("tile") blogPostTileComponent: BlogPostTileComponent;

  //ideally constructor need to keep lightweight, used for dependency injection
  //other stuff should be in ngOnInit() not in constructor() like - regarding initializing instances and also making rest service calls
  //because it is easiar for component testing(inside test classes) - to create new instances for component to run test on it 
  constructor() { }

  ngOnInit(): void { // one of angular lifecycle events marks by certain hooks(point)
    // this.blogPosts.push(new BlogPost("Blog post 1", "Summary 1"));
    // this.blogPosts.push(new BlogPost("Blog post 2", "Fairly pick teams without bias. No need to draw names out of a hat. No need to do a grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random.Fairly pick teams without bias. No need to draw names out of a hat. No need to do a grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random.Fairly pick teams without bias. No need to draw names out of a hat. No need to do a grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random.Fairly pick teams without bias. No need to draw names out of a hat. No need to do a grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random.Fairly pick teams without bias. No need to draw names out of a hat. No need to do a grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random."));
    // this.blogPosts.push(new BlogPost("Blog post 3", "Summary 3"));
    this.currentPage = 0;
    this.blogPosts = [
      [
        {title: "Blog post 1", summary: "No need to do a grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random."},
        {title: "Blog post 2", summary: "Fairly pick teams without bias. No need to draw names out of a hat. No need to do a grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random."},
        {title: "Blog post 3", summary: "A grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random."},
        {title: "Blog post 4", summary: "The most fair dividing method possible is random.Fairly pick teams without bias. No need to draw names out of a hat. No need to do a grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random.Fairly pick teams without bias. No need to draw names out of a hat. The most fair dividing method possible is random.Fairly pick teams without bias. No need to draw names out of a hat. No need to do a grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random.Fairly pick teams without bias. No need to draw names out of a hat. No need to do a grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random."}
      ],
      [
        {title: "Blog post 5", summary: "Fairly pick teams without bias. No need to draw names out of a hat. No need to do a grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random."},
        {title: "Blog post 6", summary: "No need to do a grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random."},
        {title: "Blog post 7", summary: "The most fair dividing method possible is random.Fairly pick teams without bias. No need to draw names out of a hat. No need to do a grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random.Fairly pick teams without bias. No need to draw names out of a hat."},
        {title: "Blog post 8", summary: "No need to do a grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random."}
      ],
      [
        {title: "Blog post 9", summary: "No need to do a grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random."},
        {title: "Blog post 10", summary: "Fairly pick teams without bias. No need to draw names out of a hat. No need to do a grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random."},
        {title: "Blog post 11", summary: "No need to do a grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random."}
      ]
    ];
  }

  updatePage(newPage){
    console.log("event emitted");
    this.currentPage = newPage;
  }

  expandAll(){
    console.log("Expand All");
    this.blogPostTileComponent.showFullSummary(); //getting the access of other component method using member variable(with template reference variable)
  }

}
