import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogPostTileComponent } from './blog-post-tile/blog-post-tile.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { TruncatePipe } from './truncate.pipe';
import { PaginatorComponent } from './paginator/paginator.component';
import { BlogDataService } from './blog-data.service';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostTileComponent,
    BlogListComponent,
    TruncatePipe, //declared pipe as a component only
    PaginatorComponent,
    HighlightDirective //same like component declaration
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BlogDataService, // now service can be used by any component resides in app module
    TruncatePipe //same as we do for service 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
