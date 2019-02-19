<template>
    <div class="wrap">{{title}}
    <h4>不要问我从哪里来</h4>
    </div>
</template>

<script>
    export default {
        beforeCreate(){
            console.log("beforeCreate")
            console.log(this.title)
        },
        created(){
          console.log("created")
          console.log(this.title)
        },
        data(){``
            return {
                title:'就是这么屌'
            }
        }
    }
</script>

<style scoped>
    .wrap{
        background: red;
    }
    h4{
        background: green;
    }
</style>