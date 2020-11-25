import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() numberOfPages: number;
  pages: number[];
  @Output() pageNumberClick: EventEmitter<number> = new EventEmitter<number>();
  //Every angular component can emmit an output, which is always an event
  //EventEmitter requires generic type of which event need to be emitted
  //new EventEmitter<number>() - creating an instance of event emitter

  constructor() { }

  ngOnInit(): void {
    this.pages = new Array(this.numberOfPages); //create an array of the specified size with each element set to undefined.
  }

  pageNumberClicked(pageNumber){
    this.pageNumberClick.emit(pageNumber); //will let the parent know which page number has been clicked
    //makes this paginator component truly reusable, it's not worried about what parent is doing, it is just emitting an event when page number get clicked
    //parent components need to listen this emitted event
  }

}
