import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {VetControllerService} from "../../../api/services/vet-controller.service";
import {Utils} from "../utils/utils";

@Component({
  selector: 'app-incluir-paciente',
  templateUrl: './incluirPaciente.component.html',
  styleUrls: ['./incluirPaciente.component.css']
})

export class IncluirPacienteComponent {

  protected readonly Utils = Utils;
  formGroup!: FormGroup;
  id!: number;
  listaStatus = [
    'EM_ESPERA', 'EM_ATENDIMENTO', 'AGUARDANDO_RETIRADA', 'RETIRADO'
  ];

  constructor(private service: VetControllerService,
                    private formBuilder: FormBuilder,
                    private snackBar: MatSnackBar,
                    public router: Router,
                    public route: ActivatedRoute
  ) {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      const codigo = parseInt(paramId);
      this.service.getById({id: codigo}).subscribe(
        (retorno) => {
          this.id = retorno.id;
          this.formGroup.patchValue(retorno);
        }
      )
    }
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      namePet: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      nameTutor: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      nameVet: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      especie: [null, [Validators.required]],
      autoimmuneDisease: [false, [Validators.required]],
    })
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  };

  onSubmit() {
    if (this.formGroup.valid) {
      if (!this.id) {
        this.service.create({body: this.formGroup.value}).subscribe(
          (retorno) => {
            this.showMensagemSimples("Paciente incluido com sucesso!")
            this.router.navigate(['/paciente']);
          }, (erro) => {
            console.log("Erro:" + erro);
            alert("Ocorreu algum erro ao incluir o paciente!");
          }
        )
      } else {
        this.service.update({id: this.id, body: this.formGroup.value}).subscribe(
          (retorno) => {
            this.showMensagemSimples("Paciente Alterado com sucesso!")
            this.router.navigate(['/paciente']);
          }, (erro) => {
            console.log("Erro:" + erro);
            alert("Ocorreu algum erro ao alterar o paciente!");
          }
        )
      }
    }
  }

  showMensagemSimples(mensagem: string, duracao: number = 2000) {
    this.snackBar.open(mensagem, 'Fechar', {
      duration: duracao,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
