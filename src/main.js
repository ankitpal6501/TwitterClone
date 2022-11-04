import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret,faHouse,faUser,faPlus, faSearch,faCog,faAngleDown,faStar,faImage,faFilm,faChartBar,faSmile,faComment,faRetweet,faHeart,faTrash,faPencil} from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret,faTwitter,faHouse,faUser,faPlus,faSearch,faCog,faAngleDown,faStar,faImage,faFilm,faChartBar,faSmile,faComment,faRetweet,faHeart,faTrash,faPencil)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
