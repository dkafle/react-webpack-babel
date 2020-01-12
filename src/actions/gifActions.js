export const getGifAction = (dispatch) => {
    const API_KEY = 'TsBcDznUA5bcQK7u7lYRwEcIvCqHHXmM';
    const random_gif = 'http://api.giphy.com/v1/gifs/random';
    dispatch({type: 'GET_GIF_STARTED'});
    fetch(random_gif + '?api_key=' + API_KEY)
        .then(result => result.json())
        .then(json => {
            dispatch({
                type: 'GET_GIF_SUCCESS',
                data: json,
            });
        })
        .catch({type: 'GET_GIF_FAILURE'})
}

