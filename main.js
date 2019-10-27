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

var app = new Vue({
    el: '#app',
    data: {

    },
});
