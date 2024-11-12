import axios from "axios";

async function getData(user_id) {
    try {
        const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
        const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);

        return {
            ...user,
            posts: posts
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // İsteğe bağlı: hatayı yukarıya iletmek için
    }
}
getData(1).then(data => console.log(data));
export default getData

