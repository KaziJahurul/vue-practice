//When inStock is false, bind a class to the “Out of Stock” p tag that adds  text-decoration: line-through to that element.

Vue.component('task-list', {
    template: `
    <ul>
        <li v-for="task in tasks">{{task.task}}</li>
    </ul>
    `,
    data() {
        return {
            tasks: [
                {task: 'go to mall', complete: true},
                {task: 'go to email', complete: false},
                {task: 'go to shop', complete: false},
                {task: 'go to work', complete: false},
            ],
        }
    },
});

Vue.component('task', {
    template: `
    <ul>
        <li>Foo Bar</li>
        <li>
            <task-list></task-list>
        </li>
    </ul>
    `,
    data() {
        return {
            
        }
    },
});
Vue.component('joe-card', {
    props: ["title", "body"],
    template: `
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="image" alt="Card image cap">
        <div class="card-body">
            <h5 v-show="isVisisble" class="card-title">{{title}}</h5>
            <p v-show="isVisisble" class="card-text">{{body}}</p>
            <a href="#" @click.prevent="hideModal" class="btn btn-primary">Hide Content</a>
            <button @closeall.prevent="hideAll">Close All</button>
        </div>
    </div>
    `,
    data() {
        return {
            image: 'https://via.placeholder.com/300/09f/fff.png',
            isVisisble: true,
        }
    },
    methods: {
        hideModal() {
            this.isVisisble = ! this.isVisisble;
        },
        hideAll() {
            this.$emit('closeall');
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        hideallparentVar: null,
    },
    methods: {
        hideAllInParent() {
            this.hideallparentVar = false;
        }
    }
});
