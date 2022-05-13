# Talita

Bot para discord desenvolvido em JavaScript (node.js), tem como funcionalidade recomendar filmes. Criado para o canal Clube de Cinema do IFAL - Maceió. 

O nome é uma homenagem para a criadora do clube.

## Instruções:
### Utilizar o código em seu própiro bot:

Em relação aos tokens, crie um arquivo chamado ```config.js``` e adicione o seguinte código:
```JavaScript
const config = {
    botToken: ['token do discord*'],
    apiToken: ['token da api**'] 
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

## Colabore!

Caso tenha alguma ideia maneira que combine com o tema do bot, algo a acresentar, não hesite em realizar um `Pull Request`.

Tutorial de como realizar sua primeira contribuição <a href="https://github.com/firstcontributions/first-contributions/blob/master/translations/README.pt_br.md">aqui</a>.
<img width="150" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"> This product uses the TMDB API but is not endorsed or certified by TMDB.
