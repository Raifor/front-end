import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSnackBar} from "@angular/material/snack-bar";
import {VetControllerService} from "../../../api/services/vet-controller.service";
import {Utils} from "../utils/utils";

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './listaPaciente.component.html',
  styleUrls: ['./listaPaciente.component.css']
})
export class ListaPacienteComponent implements OnInit{
  displayedColumns: string[] = ['id','namePet', 'nameTutor', 'nameVet', 'especie', 'dateRegister', 'autoimmuneDisease', 'statusPet', 'acoes'];

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  protected readonly Utils = Utils;

  listaStatus = [
    'EM_ESPERA', 'EM_ATENDIMENTO', 'AGUARDANDO_RETIRADA', 'RETIRADO'
  ];

  constructor(
    public vetControllerService: VetControllerService,
    public snackBar: MatSnackBar
  ) {
  }
  ngOnInit(): void {
    this.buscarDados();
  }

  private buscarDados() {
    this.vetControllerService.listAll().subscribe({
      next: data => {
        // data.sort((a: any, b: any) => a.id - b.id);
        this.dataSource.data = data;
        console.log("Dados:", data)
      }
    })
  }

  showResult($event: any[]) {
    this.confDataResult($event);
  }

  private confDataResult(data: any[] | undefined) {
    this.dataSource = new MatTableDataSource<any>(data || []);
  }

  remover(paciente: any){
    this.vetControllerService.remove({id: paciente.id!})
      .subscribe((retorno) => {
          this.buscarDados();
          this.mostrarMensagem("Excluído com sucesso ",5000);
          console.log("Exclusão:", retorno);
        }, (error) => {
          if (error.status === 404) {
            this.mostrarMensagem("Paciente não existe")
          } else {
            this.mostrarMensagem("Erro ao excluir");
            console.log("Erro:", error);
          }
        }
      )
  }

  converterBoolean(valor: boolean) {
    return valor ? 'Sim' : 'Não';
  }
  mostrarMensagem( mensagem: string, duracao: number = 2000) {
    this.snackBar.open(mensagem, 'Fechar', {
      duration: duracao,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  atualizarStatus(status: string, paciente: any) {
    switch (status) {
      case 'EM_ESPERA':
        this.vetControllerService.setStatusEspera({id: paciente.id}).subscribe((retorno) => {
          this.buscarDados();
          this.mostrarMensagem("Status atualizado com sucesso");
        }, (error) => {
          this.buscarDados();
          this.mostrarMensagem("Erro ao atualizar status");
        }
      );
        return;
      case 'EM_ATENDIMENTO':
        this.vetControllerService.setStatusAtendimento({id: paciente.id}).subscribe((retorno) => {
          this.buscarDados();
          this.mostrarMensagem("Status atualizado com sucesso");
        }, (error) => {
          this.buscarDados();
          this.mostrarMensagem("Erro ao atualizar status");
        }
      );
        return;
      case 'AGUARDANDO_RETIRADA':
        this.vetControllerService.setStatusAguardandoRetirada({id: paciente.id}).subscribe((retorno) => {
          this.buscarDados();
          this.mostrarMensagem("Status atualizado com sucesso");
        }, (error) => {
          this.buscarDados();
          this.mostrarMensagem("Erro ao atualizar status");
        }
      );
        return;
      case 'RETIRADO':
          this.vetControllerService.setStatusRetirada({id: paciente.id}).subscribe((retorno) => {
            this.buscarDados();
            this.mostrarMensagem("Status atualizado com sucesso");
          }, (error) => {
            this.buscarDados();
            this.mostrarMensagem("Erro ao atualizar status");
          }
        );
          return;
    }
  }
}

