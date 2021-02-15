import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { UploadFileService } from '../upload-file/services/upload-file.service';
import { UtilsService } from '../shared/services/utils.service';
import { Sales } from './model/sales';

@Component({
  selector: 'app-view-sales',
  templateUrl: './view-sales.component.html',
  styleUrls: ['./view-sales.component.css']
})

export class ViewSalesComponent implements AfterViewInit {
  sales: any;
  private vehicles: any;
  vehicleSoldMost: any;
  dataSource: MatTableDataSource<Sales>;
  displayedColumns: string[] = ['dealNumber', 'customerName', 'dealershipName', 'vehicle', 'price', 'date'];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  constructor(private uploadFileService: UploadFileService, private utilsService: UtilsService, private titleService: Title) {
    this.titleService.setTitle('Sales');
  };

  ngOnInit() {
    this.uploadFileService.getSalesData().subscribe(
      data => {
        this.sales = new Array;
        this.vehicles = new Array();
        data.forEach(row => {
          if (row) {
            const columns = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            let sale = new Sales();
            for (let i = 0; i < columns.length; i++) {
              let col = columns[i];
              if (typeof (col) === 'undefined' || !col) return;
              col = this.utilsService.clean(col);

              switch (i) {
                case 0: sale.dealNumber = Number(col); break;
                case 1: sale.customerName = col; break;
                case 2: sale.dealershipName = col; break;
                case 3: sale.vehicle = col; this.vehicles.push(col); break;
                case 4: sale.price = this.utilsService.getCurrencyFormat(col); break;
                case 5: sale.date = this.utilsService.getDateFormat(new Date(col)); break;
              }
            }
            this.sales.push(sale);
          }
        });

        this.dataSource = new MatTableDataSource<Sales>(this.sales);
        this.dataSource.paginator = this.paginator;
        this.vehicleSoldMost = this.utilsService.findMostFrequent(this.vehicles);
      }
      ,
      (error) => {
        console.log("Error: " + error)
      });
  }
}
