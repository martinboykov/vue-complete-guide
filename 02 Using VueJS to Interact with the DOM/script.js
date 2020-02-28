new Vue({
    el: '#app',
    data: {
        title: 'Some title!',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com">link</a>',
        count: 0,
        x: 0,
        y: 0
    },
    methods: {
        sayHello: function() {
            return this.title;
        },
        increaseCount: function(e) {
            // console.log(e);
            return this.count += 1;
        },
        decreaseCount: function(e) {
            // console.log(e);
            return this.count -= 1;
        },
        increaseCountBy: function(step, e) {
            // console.log(e);
            return this.count += step;
        },
        updateCoord: function(e){
            // console.log(e);
            this.x = e.clientX;
            this.y = e.clientY;
        },
        dummy: function (e){
            e.stopPropagation();
        },
        alertMe: function (){
            console.log('Alert');
        },
        result: function (){
            console.log('Method');
            return this.count > 5 ? '> 5' : '<=5';
        }
    },
    // can run asynchronous tasks
    watch: {
        count: function(value){
            let vm = this;
            setTimeout(() => {
                vm.count = 0;
            }, 10000);
        }
    },

    // only synchronous tasks
    computed: {
        output: function (){
            console.log('Computed');
            return this.counter > 5 ? '> 5' : '<=5';
        }
    },
})
