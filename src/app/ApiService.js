const axios = require('axios');


export default class ApiService {

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

    addNewPost = async (post) => {
        return axios.post(`${this.baseUrl}/posts?userId=${post.userId}`, post)
    }

    getComments = async (postId) => {
        const comments = await this.getInfo(`/comments?postId=${postId}`);
        return comments;
    }

    updatePost = async (post) => {
        return axios.put(`${this.baseUrl}/posts/${post.id}`, post)
    }

    deletePost = async (postId) => {
        return axios.delete(`${this.baseUrl}/posts/${postId}`)
    }
    
}