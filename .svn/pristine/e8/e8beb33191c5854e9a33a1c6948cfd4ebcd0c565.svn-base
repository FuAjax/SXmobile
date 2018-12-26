<template>
    <div v-html="apply">
    {{apply}}
    </div>
</template>

<script>
    export default {
        name:"applyText",
         data(){
            return {
                apply:''
            }
        },
    mounted(){
        if (this.$route.query.type == 2){           // 支付宝
            let form = this.$route.query.htmls
            this.apply = form;
            this.$nextTick(()=> {
                document.forms[0].submit()
            })
        } else {
            this.run()
        }
    },
    created(){
    },
    methods:{
        run(){
            let form = this.$route.query.htmls
            this.apply = form;
            this.$nextTick(()=> {
                document.getElementById("sp").click();
            })
        }
    }
}
</script>

<style scoped>
</style>
