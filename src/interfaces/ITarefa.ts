import IPROJETO from "./IProjeto";

export default interface ITarefa {
    duracaoEmSegundos: number,
    descricao: string,
    projeto: IPROJETO
  }