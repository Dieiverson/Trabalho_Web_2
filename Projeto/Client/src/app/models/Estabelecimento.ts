import { Endereco } from "./Endereco";

export class Estabelecimento{
  _id?:string;
  nome:string; 
  cnpj: string;
  senha: string;
  dataCadastro: Date;
  endereco: Endereco;
  telefone: string;
}