# Talita

Bot para discord desenvolvido em JavaScript (node.js), tem como funcionalidade recomendar filmes. Criado para o canal Clube de Cinema do IFAL - Maceió. 

O nome é uma homenagem para a criadora do clube.

## Instruções:

Em relação aos tokens, crie um arquivo chamado ```config.js``` e adicione o seguinte código:
```JavaScript
const config = {
    botToken: ['token do discord*'],
    apiToken: ['token da api*'] 
};

module.exports = { config };
```
*: Token obtido em <a href="https://discord.com/developers/docs/intro">Discord Developer Portal</a> acessando o link <a href="https://discord.com/developers/applications">make an app</a> disponível no site.

**: <a href="https://www.themoviedb.org/documentation/api?language=pt-BR">API TMDB</a>, é possível conseguir um cadastro e então sua api key acessando <a href="https://www.themoviedb.org/settings/api">este link</a>.

Além disso, é necessário instalar as bibliotecas ```discord.js``` e ```axios```.

```
npm install discord.js
```
```
npm install axios
```