<template>
    <Popover class="relative bg-white">
    <div class="mx-auto max-w-full px-4 sm:px-6">
      <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="hidden items-center justify-end sm:flex sm:flex-1 lg:w-0">
          <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
            <router-link to="/profilepage">
                <font-awesome-icon icon="fa-solid fa-user" class="text-2xl text-left mr-4" />
            </router-link>
          </a>
          <a @click="Logout" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Log Out</a>
        </div>
      </div>
    </div> 
  </Popover>
  <div class="flex container h-screen w-full">
    <div class="lg:w-1/5 border-r border-bg-slate-200 px-2 lg:px-6 py-2">
        <button class="h-12 w-12 hover:bg-lightblue-500 text-3xl rounded-full text-blue-500">
            <font-awesome-icon icon="fa-brands fa-twitter" />
        </button>
        <div>
            <button class="hover:text-blue-500 flex items-center py-2 px-4 hover:bg-lightblue-500 rounded-full mx-auto mb-3">
                <font-awesome-icon icon="fa-solid fa-house" class="text-2xl text-left mr-4"/>
                <p class="text-lg font-semibold text-left hidden lg:block">Home</p>
            </button>
            <router-link to="/profilepage">
                <button class="hover:text-blue-500 flex items-center py-2 px-4 hover:bg-lightblue-500 rounded-full mx-auto mb-3">
                    <font-awesome-icon icon="fa-solid fa-user" class="text-2xl text-left mr-4 " />
                    <p class="text-lg font-semibold text-left hidden lg:block">
                        Profile
                    </p>
                    
                </button>
            </router-link>
        </div>
        <button class="text-white bg-blue-500 rounded-full font-semibold focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-darkblue-500">
            <p class="hidden lg:block">Tweet</p>
            <font-awesome-icon icon="fa-solid fa-plus" class="lg:hidden"/>
        </button>
    </div>

    <!-- middel part -->
   <div class="w-1/2 h-full overflow-y-scroll">
        <div class="px-5 py-3 border-b border-slate-200 flex items-center justify-between">
            <h1 class="text-xl font-bold">Home</h1>
            <font-awesome-icon icon="fa-solid fa-star" class="text-xl text-blue-500"/>
        </div>
        <div class="px-5 py-3 border-b-8 border-slate-200 flex">
            <div class="flex-none">
                <img src="../assets/logo.png" alt="" class="flex-none w-12 h-12 rounded-full border border-slate-200">
            </div> 
            <form action="" class="w-full px-4 relative">
                <textarea v-model="userTweetData.text" placeholder="What's Up" class="mt-3 pb-3 w-full focus:outline-none"/>
                <div class="flex items-center">
                    <font-awesome-icon icon="fa-solid fa-image" class="text-lg text-blue-500 mr-4"/>
                    <font-awesome-icon icon="fa-solid fa-film" class="text-lg text-blue-500 mr-4"/>
                    <font-awesome-icon icon="fa-solid fa-chart-bar" class="text-lg text-blue-500 mr-4"/>
                    <font-awesome-icon icon="fa-solid fa-smile" class="text-lg text-blue-500 mr-4"/>
                </div>
                <button @click="addNewTweet" class="h-10 px-4 text-white font-semibold bg-blue-500 hover:bg-darkblue-500 focus:outline-none rounded-full absolute bottom-0 right-0">
                    Tweet
                </button>
            </form>
        </div>
        <div v-for="(user,index) in users" :key="user.id" class="w-full p-4 border-b hover:bg-slate-200 flex">

            <div class="flex-none mr-4">
                <img src="../assets/logo.png" alt="" class="h-12 w-12 rounded-full flex-none">
            </div>
            <div class="w-full">
                <div class="flex items-center w-full">
                    <p class="font-semibold">{{user.name}}</p>
                    <p class="text-sm text-grey-400 ml-2">{{user.username}}</p>
                    <p class="text-sm text-grey-400 ml-2">{{user.location}}</p>
                    <font-awesome-icon icon="fa-solid fa-pencil" class="ml-auto text-gray-400 "/>
                </div>
                <p class="py-2">
                    {{UesrDatas[index].text}}
                </p>
                <div class="flex items-center w-full justify-between">
                    <div class="flex items-center text-sm text-gray-400">
                        <font-awesome-icon icon="fa-solid fa-comment" class="mr-3 "/>
                        <p>1,000</p>
                    </div>
                    <div class="flex items-center text-sm text-gray-400">
                        <font-awesome-icon icon="fa-solid fa-retweet" class="mr-3 "/>
                        <p>550</p>
                    </div>
                    <div class="flex items-center text-sm text-gray-400">
                        <font-awesome-icon icon="fa-solid fa-heart" class="mr-3 "/>
                        <p>1,000,000</p>
                    </div>
                    <div class="flex items-center text-sm text-gray-400">
                        <font-awesome-icon icon="fa-solid fa-trash" class="mr-3 " @click="deleteTweet(index)"/>
                    </div>
                </div>
            </div>
        </div>
   </div>
   <!-- right part -->
   <div class="md:block hidden w-1/3 h-full border-l border-slate-200 py-2 px-6 overflow-y-scroll relative">
        <input type="text" class="pl-12 rounded-full w-full p-2 bg-slate-200 text-sm" placeholder="search twitter" v-model="search">
        <font-awesome-icon icon="fa-solid fa-search" class="absolute left-0 top-0 mt-5 ml-12 text-sm text-light"/>
        <div class="w-full rounded-lg bg-slate-100 mt-4">
            <div class="flex items-center justify-between p-3">
                <p class="text-lg font-bold">Trends for you</p>
                <font-awesome-icon icon="fa-solid fa-cog" class=" text-lg text-blue-500"/>
            </div>
            <button v-for="(tweet,index) in filterTweet" :key="tweet.id" class="w-full flex justify-between hover:bg-slate-200 p-3 border-t border-bg-slate-200">
                
                <div>
                    <p class="text-sm text-left leading-tight text-gray-400">{{tweet.handel}}</p>
                    <p class="font-bold text-left leading-tight">{{tweet.name}}</p>
                    <p class="text-left leading-tight text-gray-400">{{UesrDatas[index].text}}</p>
                </div>
                <font-awesome-icon icon="fa-solid fa-angle-down" class=" text-lg text-gray-400"/>
            </button>
        </div>
   </div>
  </div>
  
</template>
<script>
import { Popover} from '@headlessui/vue'

export default{
    name:'homePage',
    data(){
        return{
            user:{
                username: "Jolie_Ferne_boy",
                location: "Sweden",
                name: "Jolie Ferne",
                id: "0007"
            },
            userTweetData:{
            author_id: "0007",
            text: " "
        },
            search:'',
            users:[],
            UesrDatas:[],
        }
    },
    components:{
        Popover,
    },
    created(){
        fetch('https://tweets.free.beeceptor.com/tweets/all').then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong');
            })
            .then((result) => {
                this.UesrDatas=result.data 
                this.users=result.includes.users
            })
            .catch((error) => {
                console.log(error)
            });   
    },
    computed:{
        filterTweet(){
            return this.users.filter((user)=>{
             return user.name.match(this.search)
            })
        
        }
    },
    methods:{
        Logout(){
            localStorage.removeItem('user-info');
            this.$router.push({name:"LoginPage"})
        },
        deleteTweet(indx){
            this.users.splice(indx,1)
        },
        addNewTweet(){
            this.UesrDatas.unshift(this.userTweetData)
            this.users.unshift(this.user)
        }
    }
   
}
</script>