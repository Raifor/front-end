import {Routes} from "@angular/router";
import {ListaPacienteComponent} from "./vet/lista/listaPaciente.component";
import {IncluirPacienteComponent} from "./vet/incluir/incluirPaciente.component";
import {PacientesPorSituacaoComponent} from "./vet/pacientes-por-situacao/pacientes-por-situacao.component";

export const vetRoutes: Routes = [
  {
    path: "paciente",
    children: [
      {
        path: "listar",
        component: ListaPacienteComponent,
      },
      {
        path: "incluir",
        component: IncluirPacienteComponent,
        data: {
          acao: 'incluir'
        }
      },
      {
        path: ":id/alterar",
        component: IncluirPacienteComponent,
        data: {
          acao: 'alterar'
        }
      },
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      },
      {
        path: 'pacientesPorSituacao',
        component: PacientesPorSituacaoComponent,
      }
    ]
  }
];
