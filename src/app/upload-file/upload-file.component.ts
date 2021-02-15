import { Component, ViewChild } from '@angular/core';
import { UploadFileService } from './services/upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
})

export class UploadFileComponent {
  records: any[] = [];
  @ViewChild('csvFileReader', { static: false }) csvFileReader: any;

  constructor(private uploadFileService: UploadFileService) { };

  uploadListener($event: any): void {
    let files = $event.srcElement.files;
    if (this.isValidCSVFile(files[0])) {
      this.uploadFileService.upload($event.target.files[0]).subscribe((output: any) => {
        // can do something
      },
        (error) => {
          console.log("Error: " + error)
        });
    }
    else {
      alert("Please provide valid .csv file.");
      this.resetFile();
    }
  }

  private isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  private resetFile() {
    this.csvFileReader.nativeElement.value = "";
    this.records = [];
  }
}  
