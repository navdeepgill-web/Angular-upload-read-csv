import { formatCurrency, DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  findMostFrequent(arr) {
    let compare = "";
    let mostFreq = "";

    arr.reduce((acc, val) => {
      if (val in acc) {               // if key already exists
        acc[val]++;                   // then increment it by 1
      } else {
        acc[val] = 1;                 // or else create a key with value 1
      }
      if (acc[val] > compare) {       // if value of that key is greater than the compare value.
        compare = acc[val];           // than make it a new compare value.
        mostFreq = val;               // also make that key most frequent.
      }
      return acc;
    }, {})
    return mostFreq;
  }

  getCurrencyFormat(val) {
    return formatCurrency(val.replace(/,/g, ''), "en-CA", "CAD$", "CAD");
  }

  getDateFormat(val) {
    let pipe = new DatePipe('en-US'); // Use locale
    return pipe.transform(val, 'MM/dd/yyyy');
  }

  clean(val) {
    return val.trim().replace(/"/g, '');
  }
}
