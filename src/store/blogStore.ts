import { defineStore } from 'pinia'
import axios from 'axios'
import { BlogPost } from '../models/blogPost.model'


export const useBlogStore = defineStore('blog', {
    state: (): State => {
        return {
            blogList: []
        }
    },
    actions: {
        async loadBlogList() {
            try {
                const { data } = await axios.get<BlogFeedResponse>('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@anilktalla?v=' + new Date().getTime());
                console.log(data);
                this.blogList = data.items;
            } catch (error: any) {
                if (axios.isAxiosError(error)) {
                    console.log('error message: ', error.message);
                    return error.message;
                } else {
                    console.log('unexpected error: ', error);
                    return 'An unexpected error occurred';
                }
            }

        }
    }
})

interface State {
    blogList: BlogPost[]
}

interface BlogFeedResponse {
    items: BlogPost[]
}
