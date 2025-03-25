# 🧠 API Node.js + TypeScript + Sequelize

API RESTful robusta desenvolvida em **Node.js com TypeScript** utilizando o ORM **Sequelize** para interação com banco de dados **PostgreSQL**.  
O projeto foi criado com foco em arquitetura organizada (padrão MVC), escalabilidade e domínio de relacionamentos entre tabelas.

---

## 🚀 Tecnologias utilizadas

- 🟢 **Node.js**
- 🌀 **TypeScript**
- 🔗 **Sequelize ORM**
- 🐘 **PostgreSQL**
- 📁 **Express.js**
- 📦 **Sequelize CLI**
- 🌐 **Dotenv**

---

## 📐 Estrutura do Projeto
src/ ├── controllers/ # Lógica das requisições (camada controller) 
     ├── database/ # Configuração, migrations e seeders 
     ├── models/ # Models Sequelize e relacionamentos 
     ├── routes.ts # Arquivo central de rotas 
     ├── app.ts # App Express


---

## 📦 Funcionalidades

- ✅ CRUD completo de entidades
- 🔗 Relacionamentos 1:N com Sequelize (`hasMany`, `belongsTo`)
- 📄 Uso de Migrations e Seeders para versionamento do banco
- 📦 Organização seguindo o padrão MVC
- 🔍 Dados relacionados retornados com o método `include`
- 🛠️ Tratamento de erros básico com `try/catch`

---


🧪 Exemplos de Endpoints
GET /candidates → Lista todos os candidatos
POST /candidates → Cria um novo candidato
GET /candidates/:id → Retorna candidato por ID
PUT /candidates/:id → Atualiza candidato
DELETE /candidates/:id → Remove candidato
GET /jobs → Lista todas as vagas com dados da empresa
GET /companies/:id → Retorna uma empresa com suas vagas
