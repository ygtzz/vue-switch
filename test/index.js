const { switchc } = VueSwitch;

new Vue({
  name:'c-app',
  el: '#container',
  created() {
      
  },
  data() {
    return {
      checked: true,
      text: '开关',
      width: 60,
      height: 30,
      activeColor: '#d9534f'
    }
  },
  methods:{
    
  },
  components: {
    'c-switch': switchc,
  }
});