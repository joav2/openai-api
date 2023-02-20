# openai-api

## Consumindo api openAI

- Endpoints

 | Financeiro endpoint                                        | Corpo                  |
 | ---------------------------------------------------------- | ---------------------- |
 | `POST` /api/v1/financeiro-banco/categorizacao              | { "pergunta": string } |
 | `POST` /api/v1/financeiro-banco/loop-template              | { "pergunta": string } |
 | `POST` /api/v1/financeiro-banco/estratificacao             | { "pergunta": string } |

 | Imoveis endpoint                                           | Corpo                  |
 | ---------------------------------------------------------- | ---------------------- |
 | `POST` /api/v1/imovel-incorporadora/categorizacao          | { "pergunta": string } |
 | `POST` /api/v1/imovel-incorporadora/categorizacao-autonoma | { "pergunta": string } |
 | `POST` /api/v1/imovel-incorporadora/loop-template          | { "pergunta": string } |
 | `POST` /api/v1/imovel-incorporadora/plano-acao             | { "pergunta": string } |
 | `POST` /api/v1/imovel-incorporadora/sumarizacao            | { "pergunta": string } |
 | `POST` /api/v1/imovel-incorporadora/estratificacao         | { "pergunta": string } |

 | Saude endpoint                                             | Corpo                  |
 | ---------------------------------------------------------- | ---------------------- |
 | `POST` /api/v1/saude-hospital/categorizacao                | { "pergunta": string } |
 | `POST` /api/v1/saude-hospital/loop-template                | { "pergunta": string } |
 | `POST` /api/v1/saude-hospital/plano-acao                   | { "pergunta": string } |

 | Varejo endpoint                                            | Corpo                  |
 | ---------------------------------------------------------- | ---------------------- |
 | `POST` /api/v1/varejo-loja-fisica/loop-template            | { "pergunta": string } |
 | `POST` /api/v1/varejo-loja-fisica/plano-acao               | { "pergunta": string } |
