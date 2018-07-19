import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take'; 
import { PerguntasService } from '../../servicos/perguntas.service';
import { ResultadoService } from '../../servicos/resultado.service';
import { environment } from '../../../environments/environment';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {

  alternativas: object[] = [];
  object = [];
  escolha0;
  escolha1;
  escolha2;
  escolha5;

  constructor(private servicePergunta: PerguntasService, private serviceResposta: ResultadoService) {}

  ngOnInit() {
    this.servicePergunta.getPerguntas(environment.urlperguntas).subscribe(p => this.alternativas = p);
  }

  validaCampos() {
    if (this.escolha0 && this.escolha1 && this.escolha2){
      return true;
    }
    else {
      return false;
    } 

  }

  selectedPerguntas = [];

  escolhas = [];

  change(pergunta, resposta){
    console.log(this.escolhas);
  }

  

  salvar() {

    var resultado = [
      {
        "id": 0,
        "pergunta": this.alternativas[0]['descricao'],
        "resposta": this.escolha0
      },
      {
        "id": 1,
        "pergunta": this.alternativas[1]['descricao'],
        "resposta": this.escolha1
      },
      {
        "id": 2,
        "pergunta": this.alternativas[2]['descricao'],
        "resposta": this.escolha2
      }
    ]

    this.serviceResposta.postResposta(environment.urlResposta, resultado);
  }

}
