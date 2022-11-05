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
                <textarea v-model="newTweet" placeholder="What's Up" class="mt-3 pb-3 w-full focus:outline-none"/>
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
            <TransitionRoot as="template" :show="user == activeEdit">
                <Dialog as="div" class="relative z-10" @close="activeEdit = null">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <!-- <div class="sm:flex sm:items-start"> -->
                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Edit Tweet</DialogTitle>
                                <div class="mt-2">
                                    <textarea v-model="UesrDatas[index].text" class="mt-3 pb-3 w-full focus:outline-none"/>
                                    <!-- <input type="text" class="text-sm text-gray-500" > -->
                                </div>
                            </div>
                            <!-- </div> -->
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-400 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" @click="doneEdit(index)">Submit Edit</button>
                            <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="activeEdit = null" ref="cancelButtonRef">Cancel</button>
                        </div>
                        </DialogPanel>
                    </TransitionChild>
                    </div>
                </div>
                </Dialog>
        </TransitionRoot>
            <div class="w-full">
                <div class="flex items-center w-full">
                    <p class="font-semibold">{{user.name}}</p>
                    <p class="text-sm text-grey-400 ml-2">{{user.username}}</p>
                    <p class="text-sm text-grey-400 ml-2">{{user.location}}</p>
                    <font-awesome-icon icon="fa-solid fa-pencil" class="ml-auto text-gray-400 " @click="editTweet(user)"/>
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
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

export default{
    name:'homePage',
    data(){
        return{
            user1:{
                username: "Jolie_Ferne_boy",
                location: "Sweden",
                name: "Jolie Ferne",
                id: "0007"
            },
            search:'',
            users:[],
            UesrDatas:[],
            activeEdit:null,
        }
    },
    components:{
        Popover,
        Dialog,
        DialogPanel,
        DialogTitle,
        TransitionChild,
        TransitionRoot
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
        editTweet(user) {
            this.activeEdit = user
        },
        doneEdit(index) {
      if (!this.activeEdit) {
        return
      }
      this.activeEdit = null
      this.UesrDatas[index].text = this.UesrDatas[index].text.trim()
    },
        addNewTweet(e){
            let tweet=this.newTweet.trim()
            this.UesrDatas.unshift({
                author_id: "2605707936",
                text:tweet
            })
            this.users.unshift(this.user1)
            this.newTweet=""
            e.preventDefault()
        }
    }
   
}
</script>