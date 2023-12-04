import axios from "axios"

const baseApi ="https://api.unsplash.com/photos/random/?client_id=";
const keyApi = "DhTqyYlsXkXiKkZl9dLZWnNlJs9juwcZVwMkK-CE3mk";
const dumyJson = "https://dummyjson.com/products"

export const getImages = async () => {
    const response = await axios.get(
        // dibawah adalah dari unshplash
        `${baseApi}${keyApi}`

        // dibawah adalah dari dumyJson.com
        // `${dumyJson}`
        )
    return response.data;
};
