const { switchc } = VueSwitch;

new Vue({
  name:'c-app',
  el: '#container',
  created() {
      
  },
  data() {
    return {
      checked: true,
      text: '开关'
    }
  },
  methods:{
    
  },
  components: {
    'c-switch': switchc,
  }
});