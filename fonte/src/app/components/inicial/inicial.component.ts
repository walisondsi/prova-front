import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  //imageSrc = require('../../../assets/check.png');

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    //const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(DialogBodyComponent, {
      height: '200px',
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}