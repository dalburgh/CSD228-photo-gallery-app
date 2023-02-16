import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo'
})
export class DateAgoPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (value) {

      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);

      if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
        return 'Just now';

      const intervals = [
        { title: 'year', seconds: 31536000 },
        { title: 'month', seconds: 2592000 },
        { title: 'week', seconds: 604800 },
        { title: 'day', seconds: 86400 },
        { title: 'hour', seconds: 3600 },
        { title: 'minute', seconds: 60 },
        { title: 'second', seconds: 1 },
      ];

      let counter;

      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i].seconds);
        if (counter > 0)
          if (counter === 1) {
            return counter + ' ' + intervals[i].title + ' ago'; // singular (1 day ago)
          } else {
            return counter + ' ' + intervals[i].title + 's ago'; // plural (2 days ago)
          }
      }
    }
    return value;
  }

}
