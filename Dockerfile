FROM node:16

# Usa um caminho padrão Linux para o diretório do app
WORKDIR /app

# Copia arquivos de dependência
COPY package*.json ./

# Instala sequelize-cli globalmente
RUN npm install -g sequelize-cli

# Instala dependências do projeto
RUN npm install

# Copia o restante do código
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
