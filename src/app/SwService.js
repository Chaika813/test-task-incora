const axios = require('axios');


export default class SwService {

    baseUrl = 'https://jsonplaceholder.typicode.com';

     getInfo = async (url) => {
        const result = await axios.get(`${this.baseUrl}${url}`);
        return await result.data;
    }

    getUsers = async () => {
        const users = await this.getInfo('/users');
        return users;
    }

    getUserPosts = async (id) => {
        const posts = await this.getInfo(`/posts/?userId=${id}`);
        return posts;
    }

    postPost = async (post, {id}) => {
        debugger
        return axios.post(`${this.baseUrl}/posts?userId=${id}`, post)
    }
}