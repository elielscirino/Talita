async function getPopular(msg, token) {
    const axios = require('axios');
    const randomPage = Math.floor(Math.random() * 11)
    axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${token}&page=${randomPage}`)
        .then(movieObj => {
            const randomNumber = Math.floor(Math.random() * 20);
            const movie = movieObj['data']['results'][randomNumber]['title'];
            const movieId = movieObj['data']['results'][randomNumber]['id']
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
                    axios
                        .get(`https://api.themoviedb.org/3/movie/${movieId}/translations?api_key=${token}`)
                        .then(movieTrObj => {
                            const translations = movieTrObj['data']['translations']
                            let sinopse = '';
                            for (x in translations) {
                                if (translations[x]['iso_3166_1'] === 'BR') {
                                    sinopse += translations[x]['data']['overview'];
                                    break;
                                }
                            }
                            if (movieObj.status === 200 && trailerLink != 'https://www.youtube.com/watch?v=') {
                                msg.reply(`**${movie}** está bombando!\n**Sinopse:** ${sinopse}\n**Confira o trailer:**${trailerLink}`)
                            } else {
                                getPopular(msg, token)
                            }
                        })
                }).catch(error => {
                    console.log(error);
                    getPopular(msg, token);
                })
        }).catch(error => {
            console.log(error);
            getPopular(msg, token);
        })
}

async function getTopRated(msg, token) {
    const axios = require('axios');
    const randomPage = Math.floor(Math.random() * 101)

    axios
        .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${token}&page=${randomPage}`)
        .then(movieObj => {
            const randomNumber = Math.floor(Math.random() * 20);
            const movie = movieObj['data']['results'][randomNumber]['title'];
            const movieId = movieObj['data']['results'][randomNumber]['id']
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
                    axios
                        .get(`https://api.themoviedb.org/3/movie/${movieId}/translations?api_key=${token}`)
                        .then(movieTrObj => {
                            const translations = movieTrObj['data']['translations']
                            let sinopse = '';
                            for (x in translations) {
                                if (translations[x]['iso_3166_1'] === 'BR') {
                                    sinopse += translations[x]['data']['overview'];
                                    break;
                                }
                            }
                            if (movieObj.status === 200 && trailerLink != 'https://www.youtube.com/watch?v=') {
                                msg.reply(`**${movie}** está bombando!\n**Sinopse:** ${sinopse}\n**Confira o trailer:**${trailerLink}`)
                            } else {
                                getTopRated(msg, token)
                            }
                        })
                }).catch(error => {
                    console.log(error);
                    getTopRated(msg, token);
                })
        }).catch(error => {
            console.log(error);
            getTopRated(msg, token);
        })
}

module.exports = {getPopular, getTopRated}
