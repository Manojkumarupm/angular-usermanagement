import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { Workviewuser } from './workviewuser';
import { OimService } from './oim.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ButtonRendererComponent } from '../shared/button-renderer/button-renderer.component';
import { PaginationProxy } from 'ag-grid-community';


@Component({
  selector: 'pm-oim-list',
  templateUrl: './oim-list.component.html',
  styleUrls: ['./oim-list.component.css']
})
export class OimListComponent implements OnInit {
  pageTitle = 'OIM User List';
  errorMessage = '';
  _listFilter = '';
  public show_dialog: boolean = false;
  rowDataClicked1: Workviewuser;
  frameworkComponents: any;
  button_name: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.Workviewusers;
  }
  data$: Observable<any[]>;
  filteredProducts: Workviewuser[] = [];
  Workviewusers: Workviewuser[] = [];
  columnDefs: any;
  defaultColDef: any;
  private gridApi;
  private gridColumnApi;
  rowData: any;
  constructor(private oimservice: OimService,
    private route: ActivatedRoute,private router: Router, private http: HttpClient) {
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
    this.button_name="Click Here to Add New User"
  }

  ngOnInit(): void {

    this.oimservice.getUserDetails().subscribe(
      data => {
        this.createColumnDefs(data);
        this.rowData = data;
      }
    )
    this.oimservice.getUserDetails().
      subscribe({
        next: products => {
          this.Workviewusers = products;

          console.log("Value fetched : " + JSON.stringify(this.rowData));
        },
        error: err => this.errorMessage = err,

      });

    this.oimservice.getUserDetails().subscribe(
      {
        next: products => {
          this.rowData = products;
          console.log("Value retrieved: " + JSON.stringify(this.rowData));
        }
      }
    );


  }

  performFilter(filterBy: string): Workviewuser[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return this.Workviewusers.filter((product: Workviewuser) =>
      product.loginId.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  getSelectedRows() {
    const selectedRow = this.gridApi.getSelectedRows();
    console.log(selectedRow);

  }
  onBtnClick1(e) {
    this.rowDataClicked1 =<Workviewuser> e.rowData;
    this.router.navigateByUrl('/oim/'+this.rowDataClicked1.id+'/edit');
    console.log(this.rowDataClicked1);
  }
  createColumnDefs(col: Workviewuser[]) {
    this.columnDefs = [
      {
        headerName: 'Edit',
        cellRenderer: 'buttonRenderer',
        cellRendererParams: {
          onClick: this.onBtnClick1.bind(this),
          label: 'Edit'
        }
      },
      // { HeaderName: 'ID', field: "id" },
      { HeaderName: 'loginId', field: "loginId" },
      { HeaderName: 'modelId', field: "modelId" },
      //{ HeaderName: 'computerName', field: "computerName" },
      { HeaderName: 'DomainName', field: "DomainName" },
      { HeaderName: 'requestId', field: "requestId" },
      { HeaderName: 'Status', field: "status" },
      //{ HeaderName: 'operatingSystem', field: "operatingSystem" },
      //{ HeaderName: 'citrixAccess', field: "citrixAccess" },
      // { HeaderName: 'Department', field: "Department" },
      // { HeaderName: 'BusinessGroup', field: "BusinessGroup" },
      //{ HeaderName: 'Justification', field: "Justification" }


    ];
    this.defaultColDef = {
      sortable: true,
      resizable: true,
      filter: true,
      editable: true

    }

  }
  toggle() {
this.router.navigateByUrl('/oim/0/edit');
    /*
    this.show_dialog = !this.show_dialog;

    // CHANGE THE TEXT OF THE BUTTON.
    if (this.show_dialog)
      this.button_name = "Hide Tab";
    else
      this.button_name = "Click Here to Add New User";*/

  }
}
