import { Component, ContentChild, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  //cannot use @viewChild to access ng-content(app component indirectly) element/data here as this(shell component) does not have it as direct child 
  @ContentChild('appHeader') headerElement; //getting element from Template reference variable
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(){
    // console.log(this.headerElement.nativeElement);//<h4 _ngcontent-pqf-c17 header>Angular Blogs</h4>
  }

}
