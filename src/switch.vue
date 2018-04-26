<template>
    <label class="switch" :style="[labelStyle]">
        <input v-model="checked" type="checkbox" />
        <i class="icon" :style="[totalStyle]">
            <span class="icon-before" :style="[beforeStyle]"></span>
            <span class="icon-after" :style="[afterStyle]"></span>
        </i>
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
        },
        height:{
            type:Number
        }
    },
    data(){
        return {
            checked: this.value
        }
    },
    computed:{
        colorfix(){
            if(!this.activeColor){
                return '';
            }
            return this.activeColor.indexOf('#') > -1 ? this.activeColor : '#' + this.activeColor;
        },
        labelStyle(){
            var style = {};
            if(this.width){
                style['paddingLeft'] = this.width + 5 + 'px';
            }
            return style;
        },
        totalStyle(){
            var style = {};
            if(this.width){
                style['width'] = this.width + 'px';
            }
            if(this.height){
                style['height'] = this.height + 'px';
                this.fAddPrefixProperty(style,'borderRadius', Math.floor(this.height/2) + 'px');
            }
            if(this.checked){
                if(this.colorfix){
                    style['backgroundColor'] = this.colorfix;
                    style['borderColor'] = this.colorfix;
                }
            }
            return style;
        },
        beforeStyle(){
            var style = {};
            if(this.width){
                style['width'] = this.width - 2 + 'px';
            }
            if(this.height){
                style['height'] = this.height -2 + 'px';
                this.fAddPrefixProperty(style,'borderRadius',Math.floor((this.height -2)/2) + 'px');
            }
            return style;
        },
        afterStyle(){
            var style = {};
            if(this.height){
                style['width'] = this.height - 2 + 'px';
                style['height'] = this.height -2 + 'px';
            }
            if(this.checked){
                if(this.width && this.height){
                    this.fAddPrefixProperty(style,'transform','translateX(' + (this.width - this.height) + 'px)');
                }
            }
            return style;
        }
    },
    watch:{
        checked(val){
            this.$emit('input',val);
        }
    },
    methods:{
        fAddPrefixProperty(obj,prop,value){
            var prefixs = ['-webkit',''];
            prefixs.forEach(function(item){
                obj[item + prop] = value;
            });
            return obj;
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
        padding-left: 65px;
    }
    .switch > input{
        opacity: 0;
        position: absolute;
    }
    .switch > input:checked ~ .icon .icon-before {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    .switch > input:checked ~ .icon{
        border-color: #0275d8;
        background-color: #0275d8;
    }
    .switch > input:checked ~ .icon .icon-after{
        -webkit-transform: translateX(30px);
        transform: translateX(30px);
    }
    .switch .icon{
        position:absolute;
        left:0;
        top:50%;
        transform: translate(0,-50%);
        -webkit-transform: translate(0,-50%);
        width: 60px;
        height: 30px;
        border-radius: 15px;
        border: 1px solid #dfdfdf;
        background-color: #dfdfdf;
        box-shadow:#fafafa 0 0 0 0 inset;        
    }
    .icon-before{
        width: 58px;
        height: 28px;
        border-radius: 14px;
        background-color: #fdfdfd;
    }
    .icon-after{
        width: 28px;
        height: 28px;
        border-radius:50%;
        background-color:#fff;
        box-shadow:0 1px 3px rgba(0,0,0,.4);
    }
    .icon-before,.icon-after{
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