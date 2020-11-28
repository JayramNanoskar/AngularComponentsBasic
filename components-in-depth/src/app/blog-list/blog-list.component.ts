import { ChangeDetectionStrategy, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BlogDataService } from '../blog-data.service';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush //when object is deeply nested better to use OnPush ChangeDetectionStrategy(check top reference only) but bydefault ChangeDetectionStrategy is Defalt
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

  favAll(){
    //changing an object/instance by providing new object
    this.blogPosts[this.currentPage] = 
      this.blogPosts[this.currentPage]
      .map(post => ({
        title: post.title,
        summary: post.summary,
        isFav: true,
      }))

    //not changing an object/instance rather changing property of an instance
    this.blogPosts[this.currentPage] //giving all blogpost in that current page
    .forEach(post => post.isFav = true)
    
    //Change detection strategy get applies here
    //Angular1+ -> smart about to constantly looks for any changes and detect it(like we had used ngClass which listened for those changes and based on that add/remove class). We can customise the change detection
    //Angular js/Angular1-> used digest cycle for changes detection(keep the list of what has changed and based on that used to do right thing required). It was tedious process.
    
    //Change detection strategy - Bydefault it checks all the properties but we can tell angular  not to check whole instance properties but check only if top reference of an object/instance got change
    //makes application more efficient - by not to look deep into object(property or sub-property) but look just for change in top reference of an object/instance
  }

}
