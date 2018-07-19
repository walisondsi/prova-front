import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultadoService } from '../../servicos/resultado.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-sucesso',
  templateUrl: './sucesso.component.html',
  styleUrls: ['./sucesso.component.css']
})
export class SucessoComponent implements OnInit {

  displayedColumns: string[] = ['pergunta', 'resposta'];
  dataSource;

  constructor(private service: ResultadoService) { }

  ngOnInit() {
    this.service.getUltimaResposta(environment.urlResposta).subscribe(p => this.dataSource = p);
  }
}
