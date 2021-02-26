const API_KEY = "026890b0945cbc402813edbeb90f0223";
const BASE_URL = "https://api.themoviedb.org/3/";

export const getMoviesFromApiAsync = async (queryBody, pageNum) => {
  try {
    const body = queryBody && queryBody.length ? "'"+ queryBody +"'" : null;
    console.log(BASE_URL+ 'search/movie?api_key='+API_KEY+"&query="+body+"&page="+pageNum+'&language="fr-FR"');
    let response = await fetch(
      BASE_URL+ 'search/movie?api_key='+API_KEY+"&query="+body+"&page="+pageNum+'&language="fr-FR"',
      {
        "method":"GET"
      }
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}