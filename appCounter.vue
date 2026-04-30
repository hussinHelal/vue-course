<script >
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return { count: 0 };
    },
    template: `
        <div>
            <p>Count: {{ count }}</p>
            <button @click="count++">Increment</button>
            <button v-if="count > 0" @click="count--">Decrement</button>
            <button @click="count = 0">Reset</button>
        </div>
              `
    });

</script>

<!-- <template>
        <div>
            <p>Count: {{ count }}</p>
            <button @click="count++">Increment</button>
            <button v-if="count > 0" @click="count--">Decrement</button>
            <button @click="count = 0">Reset</button>
        </div>    
</template> -->

