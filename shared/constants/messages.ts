export const MESSAGES = {
   AUTH: {
      INVALID_CREDENTIALS: "Email ou senha inválidos",
      INVALID_TOKEN: "Token inválido",
      TOKEN_EXPIRED: "Token expirado",
      UNAUTHORIZED: "Não autorizado",
      LOGIN_SUCCESS: "Login realizado com sucesso",
   },

   VALIDATION: {
      INVALID_ID: "ID inválido",
      REQUIRED_FIELDS: "Campos obrigatórios não preenchidos",
      INVALID_DATA: "Dados inválidos",
   },

   TEAM: {
      NOT_FOUND: "Time não encontrado",
      CREATED: "Time criado com sucesso",
      UPDATED: "Time atualizado com sucesso",
      DELETED: "Time removido com sucesso",
      ALREADY_EXISTS: "Time já existe",
   },

   PLAYER: {
      NOT_FOUND: "Jogador não encontrado",
      CREATED: "Jogador criado com sucesso",
      UPDATED: "Jogador atualizado com sucesso",
      DELETED: "Jogador removido com sucesso",
      ALREADY_EXISTS: "Jogador já existe",
   },

   USER: {
      NOT_FOUND: "Usuário não encontrado",
      CREATED: "Usuário criado com sucesso",
      UPDATED: "Usuário atualizado com sucesso",
      DELETED: "Usuário removido com sucesso",
   },

   COMMON: {
      INTERNAL_SERVER_ERROR: "Erro interno do servidor",
      FORBIDDEN: "Acesso negado",
      SUCCESS: "Operação realizada com sucesso",
   },
} as const;