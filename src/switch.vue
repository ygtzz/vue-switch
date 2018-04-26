<template>
    <label class="switch">
        <input v-model="checked" type="checkbox" name="mo-switch">
        <i class="icon"></i>
        <span v-if="!!text" v-text="text"></span>
    </label>
</template>

<script>
export default{
    name:'c-switch',
    props:{
        value:{
            type: Boolean,
            default: false
        },
        text:{
            type:String
        },
        activeColor:{
            type:String
        },
        width:{
            type:Number
        }
    },
    data(){
        return {
            checked: this.value
        }
    },
    computed:{
        switchWidth(){
            return this.width ? this.width + 'px' : 'auto';
        }
    },
    watch:{
        checked(val){
            this.$emit('input',val);
        }
    }
}
</script>

<style lang="sass" scoped>
    *, *:before, *:after {
        box-sizing: border-box;
    }
    .switch{
        position:relative;
        display:inline;
        margin:0;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
    }
    .switch > input:checked ~ .icon:before {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    .switch > input:checked ~ .icon{
        border-color: #0275d8;
        background-color: #0275d8;
    }
    .switch > input:checked ~ .icon:after{
        -webkit-transform: translateX(50px);
        transform: translateX(50px);
    }
    .switch .icon{
        position:absolute;
        left:0;
        top:50%;
        transform: translate(0,-50%);
        -webkit-transform: translate(0,-50%);
        width:112px;
        height:62px;
        border-radius:30px;
        border:1px solid #dfdfdf;
        background-color:#dfdfdf;
        box-shadow:#fafafa 0 0 0 0 inset;        
    }
    .icon:before{
        width: 110px;
        height: 60px;
        border-radius: 30px;
        background-color: #fdfdfd;
    }
    .icon:after{
        width: 60px;
        height: 60px;
        border-radius:50%;
        background-color:#fff;
        box-shadow:0 1px 3px rgba(0,0,0,.4);
    }
    .icon:before,.icon:after{
        position:absolute;
        top:0;
        left:0;
        content:'';
        -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.45,1,0.4,1);
        transition: -webkit-transform 0.35s cubic-bezier(0.45,1,0.4,1);
        transition: transform 0.35s cubic-bezier(0.45,1,0.4,1);
        transition: transform 0.35s cubic-bezier(0.45,1,0.4,1),-webkit-transform 0.35s cubic-bezier(0.45,1,0.4,1);
    }
</style>