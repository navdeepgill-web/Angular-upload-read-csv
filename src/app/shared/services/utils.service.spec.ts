import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let service;

  beforeEach(() => {
    service = new UtilsService();
  });

  it('should run #findMostFrequent()', async () => {

    service.findMostFrequent([{}, {}]);

  });

  it("should find most frequent value", function () {
    var result = service.findMostFrequent(['a', 'a', 'a', 'b', 'c', 'd']);
    expect(result).toEqual('a');
  });


  it('should run #getCurrencyFormat()', async () => {

    service.getCurrencyFormat('val');

  });

  it('should run #getDateFormat()', async () => {

    service.getDateFormat({});

  });

  it('should run #clean()', async () => {

    service.clean('val');

  });

});
