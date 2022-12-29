<script lang="ts" setup>
import { Avatar } from 'flowbite-vue'

</script>

<template>
    <div class="md:ml-8 mt-8 md:pl-8 ml-2  pl-2">
        <div class="grid grid-cols-12">
            <div class="md:col-span-9 col-span-12">
                <h1 class="text-4xl font-black text-gray-900 dark:text-white uppercase">Anil
                    Talla
                </h1>
                <p class="text-gray-500 dark:text-gray-400 mb-2">Director of Engineering</p>
                <p class="mb-4 text-base font-normal text-gray-600 dark:text-gray-400">I'm a passionate <span
                        class="font-bold">software
                        engineering
                        technology leader</span> who loves <span class="font-bold">building products and solving complex
                        business problems in a
                        simple way</span>.
                    Though I enjoy leading & managing engineering teams, I also love coding, architecting, and sharing
                    my learnings.
                    <br>
                    I am here to share knowledge, visit my profile & stay connected with me.
                </p>

                <div class="flex p-3">
                    <div class="w-20">
                        <a href="https://www.linkedin.com/in/anilkumartalla/" target="_blank">
                            <svg class="w-12 h-12 text-blue-500 fill-current" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path
                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <div class="w-20">
                        <a href="https://twitter.com/anilktalla" target="_blank">
                            <svg class="w-12 h-12 text-blue-300 fill-current" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </a>
                    </div>
                    <div class="w-20">
                        <a href="https://anilktalla.medium.com/" target="_blank">
                            <svg class="w-12 h-12 text-blue-300 fill-current" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1633.77 1150.51">
                                <path
                                    d="m883.45 576.26c0 163.67-131.78 296.35-294.33 296.35s-294.34-132.68-294.34-296.35 131.78-296.36 294.34-296.36 294.33 132.69 294.33 296.36" />
                                <path
                                    d="m1206.34 576.26c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279" />
                                <path
                                    d="m1338.41 576.26c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" />
                                <path
                                    d="m1633.77 0h-296.29v.25h-1041.19v-.25h-296.29v1150.07h119.51v.44h1410.41v-.44h103.85zm-296.29 296.54v557.67h-1041.19v-557.67z"
                                    fill="none" />
                            </svg>
                        </a>

                    </div>
                    <div class="w-20">
                        <a href="https://github.com/anilktalla" target="_blank">
                            <svg class="w-12 h-12 text-blue-300 fill-current" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 98 96">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                                    fill="#24292f" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="md:col-span-3 col-span-12 justify-self-center">
                <Avatar img="https://pbs.twimg.com/profile_images/1587263365579153409/t_VlEDyS_400x400.jpg" size="xl" />
            </div>

        </div>



    </div>
</template>