import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'; 
import {
	FormBuilder,
	FormGroup,
} from "@angular/forms";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild("dialogConfigureTemplate", { static: true }) dialogConfigure: TemplateRef<ElementRef>;
  @ViewChild("dialogAlertTemplate", { static: true }) dialogAlert: TemplateRef<ElementRef>;
  checked='checked';
  configure:Array<object>;
  alertForm: FormGroup;
  tableData:Array<object>;
  displayedColumns: string[];
  dataSource:Array<object>;
  dialogEmailRef:any;
  dialogAlertRef:any;
  constructor(public dialog: MatDialog, private el: ElementRef, private fb: FormBuilder) { 
    this.dialogConfigure = this.el.nativeElement;
    this.dialogAlert = this.el.nativeElement;
    this.displayedColumns = ['Type', 'Conditions', 'Actions']
    this.tableData = [];
    this.dataSource = [];
    this.configure = [
      {
        email:"Vikash@mobileyug.com"
      },
      {
        email:"Rahul@testing.com"
      }
    ]
  }

  ngOnInit() {
    this.alertForm = this.fb.group({
      Type: [null],
      Conditions: [null],
      Actions: [null]
    })
   this.getData();
  }
  getData(){
    if(localStorage.getItem('alertObject') !==null && localStorage.getItem('alertObject') !==undefined){
      this.tableData = JSON.parse(localStorage.getItem('alertObject'))
      this.dataSource =  this.tableData;
    }
  }
  openDialogConfigure() {
  let dialogEmail = this.dialogEmailRef = this.dialog.open(this.dialogConfigure);
  console.log('this.dialogConfigure', this.dialogConfigure);
  
  this.dialogEmailRef = dialogEmail;
  }

  openDialogAlert() {
    let dialogAlert= this.dialog.open(this.dialogAlert);
    this.dialogAlertRef = dialogAlert;
  }
  addEmail(){
    localStorage.setItem('emailObject',JSON.stringify(this.configure))
    this.dialogEmailRef.close();
  }
  addAlert(obj:object){
    this.tableData.push(obj);    
    localStorage.setItem('alertObject',JSON.stringify(this.tableData))
    this.dataSource = JSON.parse(localStorage.getItem('alertObject'))
    this.dialogAlertRef.close();
  }
  deleteData(indexData:number){
    this.tableData.splice(indexData, 1);
    console.log('this.dataSourceSlice', this.tableData);
    localStorage.setItem('alertObject',JSON.stringify(this.tableData))
    this.getData();
  }
}
