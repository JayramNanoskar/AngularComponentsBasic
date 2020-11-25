import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogPostTileComponent } from './blog-post-tile/blog-post-tile.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostTileComponent,
    BlogListComponent,
    TruncatePipe //declared pipe as a component only
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TruncatePipe //same as we do for service 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
