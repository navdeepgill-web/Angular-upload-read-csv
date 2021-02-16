import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { UploadFileService } from "../upload-file/services/upload-file.service";
import { UtilsService } from "../shared/services/utils.service";
import { Sales } from "./model/sales";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-view-sales",
  templateUrl: "./view-sales.component.html",
  styleUrls: ["./view-sales.component.css"]
})
export class ViewSalesComponent implements AfterViewInit {
  sales: any;
  private vehicles: any;
  vehicleSoldMost: any;
  dataSource: MatTableDataSource<Sales>;
  displayedColumns: string[] = [
    "dealNumber",
    "customerName",
    "dealershipName",
    "vehicle",
    "price",
    "date"
  ];
  @ViewChild(MatPaginator, { static: false })
  paginator: MatPaginator;

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  constructor(
    private uploadFileService: UploadFileService,
    private utilsService: UtilsService,
    private titleService: Title
  ) {
    this.titleService.setTitle("Sales");
  }

  ngOnInit() {
    this.uploadFileService.getSalesData().subscribe(
      data => {
        this.sales = new Array();
        this.vehicles = new Array();
        let sales = new Array<Sales>();
        JSON.parse(data).forEach(row => {
          row.Price = this.utilsService.getCurrencyFormat(row.Price);
          row.Date = this.utilsService.getDateFormat(row.Date);
          sales.push(new Sales(row));
          this.vehicles.push(row.Vehicle);
        });

        this.dataSource = new MatTableDataSource<Sales>(sales);
        this.dataSource.paginator = this.paginator;
        this.vehicleSoldMost = this.utilsService.findMostFrequent(this.vehicles);
      },
      error => {
        console.log("Error: " + error);
      }
    );
  }
}

