import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { UploadFileService } from './upload-file.service';

describe('UploadFileService', () => {
  let service;

  beforeEach(() => {
    service = new UploadFileService();
  });

  it('should run #upload()', async () => {
    service.subject = service.subject || {};
    service.subject.next = jest.fn();
    service.subject.asObservable = jest.fn();
    service.upload({});
    // expect(service.subject.next).toHaveBeenCalled();
    // expect(service.subject.asObservable).toHaveBeenCalled();
  });

  it('should run #getSalesData()', async () => {

    service.getSalesData();

  });

});
