// import { computed } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import appCounter from "./appCounter.vue";
import appGreeting from "./appGreeting.vue";
import test from "./test.vue";

// const router = createRouter({
//     history: createWebHistory(import.meta.env.BASE_URL),
//     routes: [
//         { path: '/', component: appCounter },
//       { path: '/greeting', component: appGreeting },
//         { path: '/test', component: test },
//     ],
// });
// 

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: '/',          component: appCounter },
    { path: '/greeting',  component: appGreeting },
    { path: '/test',      component: test },
  ]
})

const app = Vue.createApp({
    components: {
       'app-counter': appCounter,
       'app-greeting': appGreeting,
       'app-test': test,
    },
    
    //    components: { 
    //     'app-counter': {
    //         data() {
    //             return { count: 0 };
    //         },
    //         template: `
    //             <div>
    //                 <p>Count: {{ count }}</p>
    //                 <button @click="count++">Increment</button>
    //                 <button v-if="count > 0" @click="count--">Decrement</button>
    //                 <button @click="count = 0">Reset</button>
    //             </div>
    //         `
    //     }
    // },
    data() {
        return {
            greeting: "Hello From VueJs",
            result: 0,
            firstNumber: 0 ,
            secondNumber: 0 ,
            operator: "" ,
            count: 0 ,
            name : "Json" ,
            age : 55 ,
            isActive: false,
            date: 'today',
            username: "vue",
            eg: 0,
            egResult: 0,
            sar: 0,
            sarResult: 0,
            hour: 0,
            hourResult: 0,
            minute: 0,
            minuteResult: 0,
            second: 0,
            secondResult: 0,
            posts: [{
                id: 1,
                author: "Post 1 author",
                title: 'first post',
            },{
                id: 2,
                author: "Post 2 author",
                title: 'second post',
            },{
                id: 3,
                author: "Post 3 author",
                title: 'third post',
            },{
                id: 4,
                author: "Post 4 author",
                title: 'fourth post',
            },{
                id: 5,
                author: "Post 5 author",
                title: 'fifth post',
            }],
            // test: '<span style="color: red;">This is a test</span>',
            // test: location.reload(),
            imageUrl:"https://vuejs.org/images/logo.png",
            imageSrc: "vue.png",
            imageAlt: "Vue Logo",
            
        }
    },

    mounted() {
        setTimeout(() => { this.greeting = " Vue Changed This after 2 seconds "; },2000);
    },
   
    methods:{
        
        // sayHi(name) {
        //     return "WTF, " + name ;
        // },
    
        // calculate() {
        //     const first = parseFloat(this.firstNumber);
        //     const second = parseFloat(this.secondNumber);

        //     switch(this.operator) {
        //         case "+":
        //             this.result = first + second;
        //             break;
        //         case "-":
        //             this.result = first - second;
        //             break;
        //         case "*":
        //             this.result = first * second;
        //             break;
        //         case "/":
        //             this.result = first / second;
        //             break;
        //         default:
        //             this.result = "Invalid Operator";
        //     }
        // }
        newDate() {
            return setInterval(() => {
                const currentDate = new Date();
                this.date = currentDate.toLocaleTimeString();
                 currentDate;
            }, 1000);
        },
    },
    computed: {
          validateUserName(){ 
            
                if(!this.username) { return " username is required"; } 
                else if(!isNaN(this.username) && this.username.length > 0) { return 'username cannot contain numbers only'; } 
                else if(this.username.length < 3) { return 'username must be at least 3 characters long'; }
                return this.username;
             }
            //  set(value) {
            //     this.username = value;
            // },
    },
    watch: {
        eg(v) 
        {
            this.egResult = (parseFloat(v) * 13.86).toFixed(3);
            console.log("eg run"); 
        },
        sar(v) 
        {
            this.sarResult = (parseFloat(v) / 13.86).toFixed(3);
            console.log("sar run");
      },
      hour(v)
      {
        this.minute = v * 60;
        console.log('hour'); 
      },
      minute(v)
      {
        this.hour = v / 60;
        this.second = v * 60;
        console.log('minute'); 
      },
      second(v)
      {
        this.minute = v / 60;
        console.log('second'); 
      },
    }
        
});
    
//     app.component('app-counter', {
//     data() {
//         return { count: 0 };
//     },
//     template: `
//         <div>
//             <p>Count: {{ count }}</p>
//             <button @click="count++">Increment</button>
//             <button v-if="count > 0" @click="count--">Decrement</button>
//             <button @click="count = 0">Reset</button>
//         </div>
//     `
// }); 
//    app.component('app-greeting', {
//     props: ['title','author'],
//     data() {
//         return {  };
//     },
//     template: `
//         <div>
//             <p> Posts:  </p>
//             <p> {{ title }} by {{ author }} </p>
//         </div>
//     `
// });


// }).mount('#app');
app.use(router).mount('#app');