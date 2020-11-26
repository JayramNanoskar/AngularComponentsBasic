import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() { }

  getData(): BlogPost[][]{
    return [
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
}
