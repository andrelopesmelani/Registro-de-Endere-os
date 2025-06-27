import axios from "axios";

export async function fetchAddressByCep(cep: string) {
  const unformattedCep = cep.replace(/\D/g, '');
  if (unformattedCep.length !== 8) return null;

  const { data } = await axios.get(`https://viacep.com.br/ws/${unformattedCep}/json/`);
  if (data.erro) return null;
  return data;
}

export function isValidCep(cep: string): boolean {
  const digitsOnly = cep.replace(/\D/g, '')
  return digitsOnly.length === 8
}
