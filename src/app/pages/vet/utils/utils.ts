export class Utils {

  static getStatusPet(status: string): string {
    switch (status) {
      case 'EM_ESPERA':
        return 'Em espera';
      case 'EM_ATENDIMENTO':
        return 'Em atendimento';
      case 'AGUARDANDO_RETIRADA':
        return 'Aguardando retirada';
      case 'RETIRADO':
        return 'Retirado';
      default:
        return '';
    }
  }
}
