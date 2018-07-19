import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../servicos/select.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  select_value;
  selects: object[] = [];

  constructor(private service: SelectService) { }

  ngOnInit() {
    this.service.getSelects(environment.urlselects).subscribe(p => this.selects = p);
  }



}
