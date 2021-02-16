import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UploadFileService {

  subject = new Subject();

  upload(file: File): Observable<any> {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const content = fileReader.result;
      const rows = (<string>content).split("\n"); //.slice(1);
      let data = [];
      const headers = rows[0].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
      for (var i = 1; i < rows.length; i++) {
        var obj = {};
        var currentRow = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        for (var j = 0; j < headers.length; j++) {
          headers[j] = headers[j].trim().replace(/"/g, '');
          obj[headers[j]] = typeof (currentRow[j]) === "undefined" ? "" : currentRow[j].replace(/"/g, '');
        }
        data.push(obj);
      }

      this.subject.next(JSON.stringify(data));
    }

    fileReader.onerror = function () {
      console.log('Error occured while reading file');
    }

    fileReader.readAsText(file, 'ISO-8859-1');
    return this.subject.asObservable();
  }

  getSalesData(): Subject<any> {
    return this.subject;
  }
}
