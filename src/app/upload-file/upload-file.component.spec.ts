// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { UploadFileComponent } from './upload-file.component';
import { UploadFileService } from './services/upload-file.service';

@Injectable()
class MockUploadFileService { }

@Directive({ selector: '[oneviewPermitted]' })
class OneviewPermittedDirective {
  @Input() oneviewPermitted;
}

@Pipe({ name: 'translate' })
class TranslatePipe implements PipeTransform {
  transform(value) { return value; }
}

@Pipe({ name: 'phoneNumber' })
class PhoneNumberPipe implements PipeTransform {
  transform(value) { return value; }
}

@Pipe({ name: 'safeHtml' })
class SafeHtmlPipe implements PipeTransform {
  transform(value) { return value; }
}

describe('UploadFileComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        UploadFileComponent,
        TranslatePipe, PhoneNumberPipe, SafeHtmlPipe,
        OneviewPermittedDirective
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        { provide: UploadFileService, useClass: MockUploadFileService }
      ]
    }).overrideComponent(UploadFileComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(UploadFileComponent);
    component = fixture.debugElement.componentInstance;
  });

  afterEach(() => {
    component.ngOnDestroy = function () { };
    fixture.destroy();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #uploadListener()', async () => {
    component.isValidCSVFile = jest.fn();
    component.uploadFileService = component.uploadFileService || {};
    component.uploadFileService.upload = jest.fn().mockReturnValue(observableOf({}));
    component.resetFile = jest.fn();
    component.uploadListener({
      srcElement: {
        files: {}
      },
      target: {
        files: {
          0: {}
        }
      }
    });
    // expect(component.isValidCSVFile).toHaveBeenCalled();
    // expect(component.uploadFileService.upload).toHaveBeenCalled();
    // expect(component.resetFile).toHaveBeenCalled();
  });

  it('should run #isValidCSVFile()', async () => {

    component.isValidCSVFile({
      name: {
        endsWith: function () { }
      }
    });

  });

  it('should run #resetFile()', async () => {
    component.csvFileReader = component.csvFileReader || {};
    component.csvFileReader.nativeElement = {
      value: {}
    };
    component.resetFile();

  });

});
