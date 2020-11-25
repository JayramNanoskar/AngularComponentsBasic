import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  //The pipe function should be stateless.
  //That is, it should process an input to provide an output but it shouldn't store or remember anything.
  //pipe use for code reusability purpose
  transform(value: any, ...args: any[]): any {
    const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
    const trail = args.length > 1 ? args[1] : '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
