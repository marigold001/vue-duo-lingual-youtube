<template>
    <div>
                <div class="header-color">
                <h1>{{translations.mainHeading[this.lang]}} ({{ $route.params.lang }})</h1>
                <h2>{{translations.listOfVideos[this.lang]}}</h2>
                </div>
                <ul>
                    <li v-for="(video, index) in videos[this.lang]" v-bind:key="index">
                        <img :src="generateThumbnailUrl(video.id)" alt="picture">
                        <h3 v-on:click="toggleModal(video.id)">
                            {{video.title}}
                        </h3>
                        
                    </li>
                </ul>

                <div v-on:click="toggleModal" v-if="showModal" id="modal">
                    <iframe width="560" height="315" :src="embedVideo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
    </div>
</template>

<script>
export default {
    name: 'Videos',
    data() {
        return {
           lang: this.$route.params.lang,
           showModal: false,
           embedVideo: null,
           enLanguage: false,
           rsLanguage: false,
           cookieLang: null,
           cookieObj: null,
           videos: {
               en: [
                    {
                        title: "(Meme Edition) You LAUGH You LOSE YLYL #0042",
                        id: "YC4TnbHzIMI"
                    },
                    {
                        title: "(Meme Edition) You LAUGH You LOSE YLYL #0042",
                        id: "LoRoODZcRqc"
                    },
                    {
                        title: "COPS VISIT MEME POSTER - YLYL #0017",
                        id: "djKwa9tPAJ0"
                    }
                    ],
               rs: [
                        {
                            title: "RASTA - RAGGA SESSION (Prod. by Rasta)",
                            id: "hzeLMm10lHY"
                        },
                        {
                            title: "AN NA - COKOLADA (Official video 2020) 6K",
                            id: "iGUb9gVLi8k"
                        },
                        {
                            title: "® SASA KOVACEVIC - Moja Malena (official video) NOVO! © 2020",
                            id: "bL7J_BSVnKg"
                        }
                        ]
           },
           translations: {
               mainHeading: {
                   en: 'Welcome to Duo Lingual Youtube',
                   rs: 'Dobrodosli na dvojezicni Youtube'
               },
               listOfVideos: {
                   en: 'List of videos',
                   rs: 'Lista klipova'
               }
           },
           translations2: {
               en: {
                   mainHeading: 'Welcome to Duo Lingual Youtube',
                   listOfVideos: 'List of videos'
               },
               rs: {
                   mainHeading: 'Dobrodosli na dvojezicni Youtube',
                   listOfVideos: 'Lista klipova'
               }
           }
        }
    },
    methods:{
            toggleModal(videoIdOrUrl) {
                if(this.showModal === false) {
                    this.embedVideo = this.generateEmbedUrl(videoIdOrUrl)
                    this.showModal = true
                } else {
                    this.showModal = false
                }
            },
            changeToRs() {
                this.rsLanguage = true;
                this.enLanguage = false;
            },
            changeToEn() {
                this.enLanguage = true;
                this.rsLanguage = false;
            },
            /**
             * Expects an argument that is either a youtube URL or a ID,
             * and returns back the ID.
             */
            getIdFromUrl: function(videoIdOrUrl) {
                if (videoIdOrUrl.indexOf('http') === 0) {
                    return videoIdOrUrl.split('v=')[1];
                } else {
                    return videoIdOrUrl;
                }
            },
            
            /**
             * Expects an argument that is either a youtube URL or a ID,
             * and returns back the URL of the thumbnail for that video.
             */
            generateThumbnailUrl: function(videoIdOrUrl) {
                return 'https://i3.ytimg.com/vi/' + this.getIdFromUrl(videoIdOrUrl) + '/default.jpg';
            },

            /**
             * Expects an argument that is either a youtube URL or a ID,
             * and returns back the URL for that video.
             */
            generateWatchUrl: function(videoIdOrUrl) {
                return 'https://www.youtube.com/watch?v=' + this.getIdFromUrl(videoIdOrUrl);
            },
            
            /**
             * Expects an argument that is either a youtube URL or a ID,
             * and returns back the embed URL for that video.
             */
            generateEmbedUrl: function(videoIdOrUrl) {
                return 'https://www.youtube.com/embed/' + this.getIdFromUrl(videoIdOrUrl);
            }

                
        },
        mounted() {
            this.cookieObj = new this.$cookie;
            this.cookieObj.create('language', this.lang, 10);
        }
}
</script>

<style lang="scss" scoped>
ul {
    padding: 0;
    width: 800px;
    list-style-type: none;  
    text-align: left;
    margin: 0 auto;
    background: #FAD698;
    li {
        // border: 1px solid rgb(116, 112, 112);
        // margin: 20px;
        // padding: 20px;
        box-sizing: content-box;
        display: block;
    }
    img {
        padding: 20px;
    }
    h3 {
        text-align: right;
        font-size: 120%;
        display: inline-block;
        position: relative;
        bottom: 80px;
        left: 0px;
        color: #2c3e50;
        font-weight: bold;
    }
}

    #modal {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba($color: #000000, $alpha: 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header-color {
        background-color:rgb(238, 182, 79);
        margin: 0px auto;
        padding: 20px;
        box-sizing: border-box;
        width: 800px;
        text-align: left;
    }
    
    h2 {
        margin-left: 30px;
    }
   
    h4 {
        font-size: 240%;
        color: #2c3e50;
        position: relative;
        right: 30px;
    }
    a {
        font-size: 200%;
        text-decoration: none;
        color: rgb(165, 22, 22);
        margin: 0 50px 40px 0px;
        display: inline-block;
    }
</style>