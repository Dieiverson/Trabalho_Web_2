import { Endereco } from "./Endereco";

export class Usuario{
  _id?:string;
  usuario: string;
  nome: string;
  cpf: string;
  senha: string;
  dataCadastro: Date;
  enderecos: Endereco[];
}