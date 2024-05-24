import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {MatSelectModule} from "@angular/material/select";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {ListaPacienteComponent} from "./vet/lista/listaPaciente.component";
import {IncluirPacienteComponent} from "./vet/incluir/incluirPaciente.component";
import {vetRoutes} from "./vet-routing.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    ListaPacienteComponent,
    IncluirPacienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(vetRoutes),
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatExpansionModule,
    MatCardModule,
    MatSidenavModule,
    MatMenuModule
  ]
})
export class VetModule { }
