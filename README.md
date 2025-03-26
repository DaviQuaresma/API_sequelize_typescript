# 🧠 API Node.js + TypeScript + Sequelize + Docker

API RESTful robusta desenvolvida em **Node.js com TypeScript**, utilizando o ORM **Sequelize** para integração com **PostgreSQL**.  
Agora totalmente **containerizada com Docker**, facilitando o setup do ambiente e tornando a aplicação mais portátil e escalável.

O projeto segue o padrão de arquitetura **MVC**, com foco em organização de código, abstração de dados e domínio de relacionamentos entre tabelas.

---

## 🚀 Tecnologias utilizadas

- 🟢 **Node.js**
- 🌀 **TypeScript**
- 🔗 **Sequelize ORM**
- 🐘 **PostgreSQL**
- 📁 **Express.js**
- 📦 **Sequelize CLI**
- 🌐 **Dotenv**
- 🐳 **Docker & Docker Compose**

---

## 📐 Estrutura do Projeto

.
├── config/

│   └── sequelize-cli.js           # Configuração da CLI do Sequelize

├── src/

│   ├── controllers/               # Camada de controle (lógica das requisições)

│   │   ├── candidates-controllers.ts

│   │   ├── companies-controllers.ts

│   │   └── jobs-controllers.ts

│   ├── database/

│   │   ├── migrations/            # Migrations Sequelize

│   │   └── seeders/               # Seeders Sequelize

│   ├── models/

│   │   ├── factories/             # Factories para geração de dados (futuros testes ou seeds)

│   │   ├── candidate.ts

│   │   ├── company.ts

│   │   ├── job.ts

│   │   └── index.ts               # Relacionamentos e exportações dos models

│   ├── app.ts                     # Instância e configuração do Express

│   └── routes.ts                  # Arquivo central de rotas

├── .env                           # Variáveis de ambiente

├── .dockerignore

├── .gitignore

├── docker-compose.yml            # Orquestração dos containers

├── Dockerfile                    # Imagem do container da aplicação

├── package.json

├── package-lock.json

├── README.md

├── tsconfig.json

└── .sequelizerc                  # Caminhos customizados do Sequelize

---

## 📦 Funcionalidades

- ✅ CRUD completo de entidades
- 🔗 Relacionamentos 1:N com Sequelize (`hasMany`, `belongsTo`)
- 📄 Versionamento do banco com Migrations e Seeders
- 🗂️ Estrutura organizada seguindo o padrão **MVC**
- 🔍 Dados relacionados retornados com o método `include`
- 🛠️ Tratamento de erros com `try/catch`
- 🐳 **Execução simplificada via Docker Compose**

---

## 🐳 Como rodar com Docker

```bash
# 1. Suba os containers
docker-compose up -d

# 2. Acesse o container (opcional)
docker exec -it api-backend sh

# 3. Execute as migrations (se necessário)
npx sequelize-cli db:migrate

# 4. Execute os seeders (se quiser dados de exemplo)
npx sequelize-cli db:seed:all

```

---

## 📥 Importar no Postman

Você pode testar todos os endpoints facilmente importando a coleção do Postman.


📁 [Clique aqui para baixar a coleção](https://github.com/user-attachments/files/19468754/APIsequelize.postman_collection.-.Copia.3.json)

🧪 Exemplos de Endpoints

GET    /candidates         → Lista todos os candidatos

POST   /candidates         → Cria um novo candidato

GET    /candidates/:id     → Retorna um candidato por ID

PUT    /candidates/:id     → Atualiza um candidato

DELETE /candidates/:id     → Remove um candidato

GET    /jobs               → Lista todas as vagas com dados da empresa

GET    /companies/:id      → Retorna uma empresa com suas vagas

---



Desenvolvido por Davi Quaresma da Silva Henriques
🔗 [linkedin.com/in/seu-perfil](https://www.linkedin.com/in/davi-quaresma/)


