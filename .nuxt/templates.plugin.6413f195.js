import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false


  
  
    import  { fas as fortawesomefreesolidsvgicons_fas } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_fas)
  

  
  
    import  { fab as fortawesomefreebrandssvgicons_fab } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_fab)
  

  
  
    import  { far as fortawesomefreeregularsvgicons_far } from '@fortawesome/free-regular-svg-icons'
    library.add(fortawesomefreeregularsvgicons_far)
  


Vue.component('fa', FontAwesomeIcon)