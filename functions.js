async function getTopRated(msg, token) {
    const axios = require('axios');
    const randomPage = Math.floor(Math.random() * 11)

    axios
        .get(`https://api.themoviedb.org/3/discover/movie?api_key=${token}&&vote_average.gte=7.5&language=pt-BR&page=${randomPage}`)
        .then(movieObj => {
            const randomNumber = Math.floor(Math.random() * 20);
            const movie = movieObj['data']['results'][randomNumber]['title'];
            const movieId = movieObj['data']['results'][randomNumber]['id']
            const sinopse = movieObj['data']['results'][randomNumber]['overview']
            axios
                .get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${token}`)
                .then(trailerObj => {
                    const trailer = trailerObj['data']['results']
                    let trailerLink = 'https://www.youtube.com/watch?v='
                    for (x in trailer) {
                        if (trailer[x]['official'] === true && trailer[x]['type'] === 'Trailer' && trailer[x]['site']) {
                            trailerLink += trailer[x]['key'];
                            break;
                        }
                    }
                    if (movieObj.status === 200 && trailerLink != 'https://www.youtube.com/watch?v=') {
                        msg.reply(`Que tal **${movie}**?\n**Sinopse:** ${sinopse}\n**Confira o trailer:**\n${trailerLink}`)
                    } else {
                        getTopRated(msg, token)
                    }
                }).catch(error => {
                    console.log(error);
                    getTopRated(msg, token);
                })
        }).catch(error => {
            console.log(error);
            getTopRated(msg, token);
        })
}

async function getPopular(msg, token) {
    const axios = require('axios');
    const randomPage = Math.floor(Math.random() * 5)

    axios
        .get(`https://api.themoviedb.org/3/discover/movie?api_key=${token}&language=pt-BR&page=${randomPage}`)
        .then(movieObj => {
            const randomNumber = Math.floor(Math.random() * 20);
            const movie = movieObj['data']['results'][randomNumber]['title'];
            const movieId = movieObj['data']['results'][randomNumber]['id']
            const sinopse = movieObj['data']['results'][randomNumber]['overview']
            axios
                .get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${token}`)
                .then(trailerObj => {
                    const trailer = trailerObj['data']['results']
                    let trailerLink = 'https://www.youtube.com/watch?v='
                    for (x in trailer) {
                        if (trailer[x]['official'] === true && trailer[x]['type'] === 'Trailer' && trailer[x]['site']) {
                            trailerLink += trailer[x]['key'];
                            break;
                        }
                    }
                    if (movieObj.status === 200 && trailerLink != 'https://www.youtube.com/watch?v=') {
                        msg.reply(`**${movie}** está bombando!\n**Sinopse:** ${sinopse}\n**Confira o trailer:**\n${trailerLink}`)
                    } else {
                        getPopular(msg, token)
                    }
                }).catch(error => {
                    console.log(error);
                    getPopular(msg, token);
                })
        }).catch(error => {
            console.log(error);
            getPopular(msg, token);
        })
}

async function getByGenre(msg, token, genre) {
    const axios = require('axios');
    const randomPage = Math.floor(Math.random() * 11)

    axios
        .get(`https://api.themoviedb.org/3/discover/movie?api_key=${token}&with_genres=${genre}&vote_average.gte=7&language=pt-BR&page=${randomPage}`)
        .then(movieObj => {
            const randomNumber = Math.floor(Math.random() * 20);
            const movie = movieObj['data']['results'][randomNumber]['title'];
            const movieId = movieObj['data']['results'][randomNumber]['id']
            const sinopse = movieObj['data']['results'][randomNumber]['overview']
            axios
                .get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${token}`)
                .then(trailerObj => {
                    const trailer = trailerObj['data']['results']
                    let trailerLink = 'https://www.youtube.com/watch?v='
                    for (x in trailer) {
                        if (trailer[x]['official'] === true && trailer[x]['type'] === 'Trailer' && trailer[x]['site']) {
                            trailerLink += trailer[x]['key'];
                            break;
                        }
                    }
                    if (movieObj.status === 200 && trailerLink != 'https://www.youtube.com/watch?v=') {
                        msg.reply(`Que tal **${movie}**?\n**Sinopse:** ${sinopse}\n**Confira o trailer:**\n${trailerLink}`)
                    } else {
                        getByGenre(msg, token, genre)
                    }
                }).catch(error => {
                    console.log(error);
                    getByGenre(msg, token, genre);
                })
        }).catch(error => {
            console.log(error);
            getByGenre(msg, token, genre);
        })
}

module.exports = {getPopular, getTopRated, getByGenre}
