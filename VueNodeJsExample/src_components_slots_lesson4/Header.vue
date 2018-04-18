<template>
    <div>
        <div>
            <slot></slot>
        </div>
        <div>
            <slot name="subtitle">default</slot>
        </div>
        <div>
            <slot name="copyright">A. Chemezov</slot> <!-- значение поумолчанию задается в тегах -->
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    div {
        text-align: center;
    }
    h2{
        color:green;
    }
</style>