import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BlogDataService } from '../blog-data.service';
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
  // @ViewChild("tile") blogPostTileComponent: BlogPostTileComponent;
  @ViewChildren("tile") blogPostTileComponents: QueryList<BlogPostTileComponent>; //getting list of child instances by template reference variable

  //ideally constructor need to keep lightweight, used for dependency injection
  //other stuff should be in ngOnInit() not in constructor() like - regarding initializing instances and also making rest service calls
  //because it is easiar for component testing(inside test classes) - to create new instances for component to run test on it 
  constructor(private blogDataService: BlogDataService) { }

  ngOnInit(): void { // one of angular lifecycle events marks by certain hooks(point)
    // this.blogPosts.push(new BlogPost("Blog post 1", "Summary 1"));
    // this.blogPosts.push(new BlogPost("Blog post 2", "Fairly pick teams without bias. No need to draw names out of a hat. No need to do a grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random.Fairly pick teams without bias. No need to draw names out of a hat. No need to do a grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random.Fairly pick teams without bias. No need to draw names out of a hat. No need to do a grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random.Fairly pick teams without bias. No need to draw names out of a hat. No need to do a grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random.Fairly pick teams without bias. No need to draw names out of a hat. No need to do a grade school style draft or put hours of thought into the most balanced teams. The most fair dividing method possible is random."));
    // this.blogPosts.push(new BlogPost("Blog post 3", "Summary 3"));
    this.currentPage = 0;
    this.blogPosts = this.blogDataService.getData();
  }

  updatePage(newPage){
    console.log("event emitted");
    this.currentPage = newPage;
  }

  expandAll(){
    console.log("Expand All");
    //this.blogPostTileComponent.showFullSummary(); //getting the access of other component method using member variable(with template reference variable)
    this.blogPostTileComponents.forEach(element => {
      element.showFullSummary();
    });
  }

}
