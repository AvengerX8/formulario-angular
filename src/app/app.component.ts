import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Atividade';
  name = '';
  id !: number;
  parents = '';
  graduation = '';
  tel !: number;
  marriage = '';
  age!: number;
  checklist = false;
  partner = '';
  yeargradu!: number;
  yearespc!: number;
  institution = '';

  check() {
    if (this.name == '') {
      alert('Preencha o campo NOME');
      return;
    }
    if (this.id == null) {
      alert('Preencha o campo CPF');
      return;
    }
    if (this.age < 18)
      if (this.parents == '' || this.tel == null) {
        alert('Preencha o campo RESPONSÁVEIS e TELEFONE');
        return;
      }
    if (this.graduation == '') {
      alert('Preencha o campo ESCOLARIDADE');
      return;
    }
    if (this.graduation == 'Ensino Superior Completo' && this.yeargradu == null) {
      alert('Preencha o campo ANO DE FORMAÇÃO!');
      return;
    }
    if (this.graduation == 'Especialização') {
      if (this.institution == '' || this.yearespc == null) {
        alert('Preencha o campo INSTITUIÇÃO e ANO DE FORMAÇÃO');
        return;
      }
      if (this.marriage == '') {
        alert('Preencha o campo ESTADO CIVIL');
        return;
      }
      if (this.marriage == 'Casado' && this.partner == '') {
        alert('Preencha o campo CÔNJUGE');
        return;
      }
    }
    this.checklist = true;
  }
}
