import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { PerguntasComponent } from './components/perguntas/perguntas.component';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './components/inicial/inicial.component';
import { FormsModule }          from '@angular/forms';
import { SucessoComponent } from './components/sucesso/sucesso.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBodyComponent } from './components/dialog-body/dialog-body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectComponent } from './components/select/select.component';
import {MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';

const appRoutes: Routes = [
  { path: 'perguntas', component: PerguntasComponent },
  { path: 'inicial', component:  InicialComponent},
  { path: 'sucesso', component:  SucessoComponent},
  { path: '',
    redirectTo: '/inicial',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PerguntasComponent,
    InicialComponent,
    SucessoComponent,
    DialogBodyComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    [MatButtonModule, MatCheckboxModule, MatRadioModule],
    [MatToolbarModule, MatInputModule, MatTableModule],
    MatGridListModule,
    MatSelectModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogBodyComponent]
})
export class AppModule { }
