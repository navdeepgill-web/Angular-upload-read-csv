import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UploadFileService {

  subject = new Subject();

  upload(file: File): Observable<any> {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const content = fileReader.result;
      const data = (<string>content).split("\n").slice(1);
      this.subject.next(data);
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
