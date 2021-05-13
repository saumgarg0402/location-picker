

const SEARCH_URL = "https://www.rentalcars.com/LocationAutocomplete.do?";
const SEARCH_TERM_PARAM = "term=";

const getSuggestions = async (searchQuery: string) => {

    try {

        const results = await fetch(SEARCH_URL+"&"+SEARCH_TERM_PARAM+searchQuery);
           
        return results.json();

    } catch(e) {
        return {};
    }

}

export default getSuggestions;
