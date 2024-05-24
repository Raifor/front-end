/* tslint:disable */
/* eslint-disable */
export interface CreatePacienteDto {

  /**
   * Possui doença autoimune
   */
  autoimmuneDisease?: boolean;

  /**
   * Especie do paciente
   */
  especie?: string;

  /**
   * Nome do pet
   */
  namePet?: string;

  /**
   * Nome do tutor
   */
  nameTutor?: string;

  /**
   * Nome do veterinario
   */
  nameVet?: string;
}
