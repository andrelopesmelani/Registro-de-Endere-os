import { createI18n } from "vue-i18n";

const messages = {
  pt: {
    emptyState: {
      noAddresses: "Nenhum endereço cadastrado",
      registerAddressHint: "Cadastre um novo endereço no botão abaixo.",
    },
    titleSection: {
      lastRegisteredAddresses: "Últimos endereços cadastrados",
    },
    search: {
      placeholder: "Buscar",
    },
    routes: {
      home: "Home",
      registerAddress: "Cadastrar endereço",
    },
    common: {
      new: "Novo",
      save: "Salvar",
      cancel: "Cancelar",
      at: "às",
    },
    table: {
      total: "Total",
      records: "registros",
      itemsPerPage: "Itens por página",
    },
    address: {
      title: "Endereços",
      newAddress: "Novo Endereço",
      editAddress: "Editar Endereço",
      table: {
        title: "Título",
        zip_code: "CEP",
        complement: "Complemento",
        street: "Logradouro",
        neighborhood: "Bairro",
        locality: "Localidade",
        state: "UF",
        createdAt: "Criado em",
        updatedAt: "Atualizado em",
        actions: "Ações",
      },
    },
    validation: {
      requiredField: "Campo obrigatório",
      invalidZip: "CEP inválido.",
      zipNotFound: "CEP não encontrado.",
      zipFetchError: "Erro ao consultar CEP.",
    },
  },
  en: {
    emptyState: {
      noAddresses: "No addresses registered",
      registerAddressHint: "Register a new address using the button below.",
    },
    titleSection: {
      lastRegisteredAddresses: "Last registered addresses",
    },
    search: {
      placeholder: "Search",
    },
    routes: {
      home: "Home",
      registerAddress: "Register Address",
    },
    common: {
      new: "New",
      save: "Save",
      cancel: "Cancel",
      at: "at",
    },
    table: {
      total: "Total",
      records: "records",
      itemsPerPage: "Items per page",
    },
    address: {
      title: "Addresses",
      newAddress: "New Address",
      editAddress: "Edit Address",
      table: {
        title: "Title",
        zip_code: "ZIP Code",
        complement: "Complement",
        street: "Street",
        neighborhood: "Neighborhood",
        locality: "Locality",
        state: "State",
        createdAt: "Created At",
        updatedAt: "Updated At",
        actions: "Actions",
      },
    },
    validation: {
      requiredField: "Required field",
      invalidZip: "Invalid ZIP code.",
      zipNotFound: "ZIP code not found.",
      zipFetchError: "Error fetching ZIP code.",
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "pt",
  fallbackLocale: "pt",
  messages,
});
