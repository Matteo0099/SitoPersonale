<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css");
</style>

<template>
    <div class="flex justify-center py-16">
        <div v-for="(social, index) in socialMedia" :key="index" class="flex items-center space-x-2 mx-2">
            <div class="bg-gray-200 px-3 py-2 rounded-full cursor-pointer hover:bg-gray-300"
                @mouseenter="showSocialTitle(social.title)" @mouseleave="hideSocialTitle(social.title)">
                <i :class="social.iconClass" class="text-3xl text-black"></i>
            </div>
            <div class="text-gray-800 bg-gray-200 origin-top shadow-md text-sm absolute -mt-20 p-0.5 hidden px-2 py-1 transition rounded-lg"
                :class="social.titleClass" :id="social.title">
                {{ social.title }}
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            socialMedia: [
                {
                    title: "Instagram",
                    iconClass: "bi bi-instagram",
                    titleClass: "instagram-title"
                },
                {
                    title: "Github",
                    iconClass: "bi bi-github",
                    titleClass: "github-title"
                },
                {
                    title: "Facebook",
                    iconClass: "bi bi-facebook",
                    titleClass: "facebook-title"
                },
                {
                    title: "Reddit",
                    iconClass: "bi bi-reddit",
                    titleClass: "reddit-title"
                },
            ],
        };
    },
    methods: {
        showSocialTitle(title) {
            const socialTitle = document.getElementById(title);
            socialTitle.classList.remove("hidden");
        },
        hideSocialTitle(title) {
            const socialTitle = document.getElementById(title);
            socialTitle.classList.add("hidden");
        },
    },
};
</script>