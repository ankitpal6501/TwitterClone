<template>
  
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <button class="text-center mx-auto w-full">
            <font-awesome-icon icon="fa-brands fa-twitter" class= "h-12 text-blue-500 " />
        </button>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
      
      </div>
      <form @submit.prevent="handleSubmit" class="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input v-model="userInfo.email" id="email-address" type="email"  class=" mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" />
            <p v-if="v$.email.$error" class="text-red-600 mt-3">{{v$.email.$errors[0].$message}}</p>
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input v-model="userInfo.password" id="password" type="password" class="mt-3 relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
            <p v-if="v$.password.$error" class="text-red-600 mt-3">{{v$.password.$errors[0].$message}}</p>
         </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
          </div>
        </div>

        <div>
          <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import {  computed, reactive,onMounted } from 'vue' 
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, email,minLength ,helpers} from '@vuelidate/validators'

export default {
    name:'loginPage',

    setup () {
        const router = useRouter()
        const userInfo = reactive({
            email:'',
            password:''
        })
        const rules = computed(() => ({
            email:{required,email},
            password:{
            minLength:minLength(8),required,containsPasswordRequirement:helpers.withMessage(()=>"password require an UpperCase,Lowercase,Number & symbol",(value)=>
            /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$#!%*?&])/.test(value.toString()))
        } 
            
    }))
    onMounted(() => {
        let user=localStorage.getItem('user-info')
          if(user){
             router.push({name:'HomePage'})
          }
    })
       
    const v$ = useVuelidate(rules,  userInfo )

        const handleSubmit= async() => {
            
            const isFormCorrect=await v$.value.$validate()
            if(!isFormCorrect) return
            localStorage.setItem('user-info',JSON.stringify(userInfo))
            router.push({name:'HomePage'})
        }

    return { v$,handleSubmit,userInfo }
  },
}
</script>
<style >
</style>