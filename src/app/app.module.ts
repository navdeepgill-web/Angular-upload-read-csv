import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UploadFileComponent } from "./upload-file/upload-file.component";
import { ViewSalesComponent } from "./view-sales/view-sales.component";
import { UploadFileService } from "./upload-file/services/upload-file.service";
import { UtilsService } from "./shared/services/utils.service";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import "hammerjs";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadFileComponent,
    ViewSalesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [UploadFileService, UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
