<script setup>
// import {defineComponent} from 'vue';
import {reactive, computed} from 'vue';

// export default  defineComponent({
    // props: ['title','author'],
    // data() {
    //     return {  };
    // },
    // template: `
    //     <div>
    //         <p> Posts:  </p>
    //         <p> {{ title }} by {{ author }} </p>
    //     </div>
    // `

// });
const author = reactive({
    name: 'hussien Helal',
    age: '26',
    books: [{
        title: 'Vue.js 3 for Beginners'
    },
    {
        title: 'Bootstrap for Beginners'
    },
    {
        title: 'JavaScript for Beginners'
    }],
});

const book = computed(() => {
    // return book.value = author.books.map(book => book.title).join(', ');
    return author.books.map(book => book.title);
});

</script>

<template>
    <div>
        <p> books </p>
        <p v-for="title in book" :key="title"> {{ title }} by {{ author.name }}  {{ author.age + ' years old' }}</p> <br>
    </div>
</template>