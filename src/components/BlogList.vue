<script setup lang="ts">
import { useBlogStore } from "../store/blogStore";
import { BlogPost } from "../models/blogPost.model";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { TheCard, Button } from "flowbite-vue";
import { VueTruncateHtml } from "vue3-truncate-html";
import TimeAgo from "javascript-time-ago";
import AboutMe from "./AboutMe.vue"

// English.
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);

const isTruncated = ref(true);

const store = useBlogStore();
const { blogList } = storeToRefs(store);

onMounted(() => {
    store.loadBlogList();
});

function getTimeAgo(datetime: string) {
    const timeAgo = new TimeAgo("en-US");
    return timeAgo.format(Date.parse(datetime.toString()));
}

function navigateTo(url: string) {
    window.open(url);
}
</script>

<template>
    <about-me></about-me>
    <h1 class="md:ml-8 mt-8 md:pl-8 text-2xl ml-2 pl-2 ">My recent stories </h1>
    <div class="grid md:grid-cols-3 grid-cols-1 md:mt-0 md:m-8 md:p-8 gap-4">
        <div v-for="item in blogList">
            <div class="md:mx-auto">
                <a href="#" class="no-underline " @click="navigateTo(item.link as string)">
                    <the-card class="flex flex-col m-1 w-full h-[550px]">
                        <img class="rounded-t-lg w-full h-[200px]" :src="(item.thumbnail as string)" />
                        <div class="text-primary mt-2 mb-2">
                            {{ item.categories[0].toUpperCase() }} -
                            {{ getTimeAgo(item.pubDate.toString()) }}
                        </div>
                        <h5
                            class="hover:underline h-[70px] mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {{ item.title }}
                        </h5>
                        <p class="h-[130px] font-normal text-gray-700 dark:text-gray-400">
                            <vue-truncate-html v-model="isTruncated" :text="(item.content as string)" type="html"
                                hideButton />
                        </p>
                        <Button gradient="purple-blue" square class="inline-block align-bottom">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </Button>
                    </the-card>
                </a>
            </div>
        </div>
    </div>
</template>
