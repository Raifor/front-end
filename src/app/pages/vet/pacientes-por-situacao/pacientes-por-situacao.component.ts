import {Component, OnInit} from '@angular/core';
import {Utils} from "../utils/utils";
import {VetControllerService} from "../../../api/services/vet-controller.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
    selector: 'app-pacientes-por-situacao',
    templateUrl: './pacientes-por-situacao.component.html',
    styleUrls: ['./pacientes-por-situacao.component.css']
})
export class PacientesPorSituacaoComponent implements OnInit {
    displayedColumns: string[] = ['namePet', 'nameTutor', 'nameVet', 'especie'];

    protected readonly Utils = Utils;

    dataSourceEmEspera: MatTableDataSource<any> = new MatTableDataSource<any>([]);
    dataSourceEmAtendimento: MatTableDataSource<any> = new MatTableDataSource<any>([]);
    dataSourceAguardandoRetirada: MatTableDataSource<any> = new MatTableDataSource<any>([]);
    dataSourceRetirado: MatTableDataSource<any> = new MatTableDataSource<any>([]);

    constructor(public service: VetControllerService) {
    }

    getPacientesPorSituacao(situacao: any, dataSourceEmEspera: MatTableDataSource<any>) {
        this.service.listarPorSituacao({situacao: situacao}).subscribe({
            next: data => {
                dataSourceEmEspera.data = data;
            }
        });
    }

    ngOnInit(): void {
        this.getPacientesPorSituacao('EM_ESPERA', this.dataSourceEmEspera);
        this.getPacientesPorSituacao('EM_ATENDIMENTO', this.dataSourceEmAtendimento);
        this.getPacientesPorSituacao('AGUARDANDO_RETIRADA', this.dataSourceAguardandoRetirada);
        this.getPacientesPorSituacao('RETIRADO', this.dataSourceRetirado);
    }
}
