// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { ViewSalesComponent } from './view-sales.component';
import { UploadFileService } from '../upload-file/services/upload-file.service';
import { UtilsService } from '../shared/services/utils.service';
import { Title } from '@angular/platform-browser';

@Injectable()
class MockUploadFileService { }

@Injectable()
class MockUtilsService { }

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

describe('ViewSalesComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        ViewSalesComponent,
        TranslatePipe, PhoneNumberPipe, SafeHtmlPipe,
        OneviewPermittedDirective
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        { provide: UploadFileService, useClass: MockUploadFileService },
        { provide: UtilsService, useClass: MockUtilsService },
        Title
      ]
    }).overrideComponent(ViewSalesComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(ViewSalesComponent);
    component = fixture.debugElement.componentInstance;
  });

  afterEach(() => {
    component.ngOnDestroy = function () { };
    fixture.destroy();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngAfterViewInit()', async () => {

    component.ngAfterViewInit();

  });
});
