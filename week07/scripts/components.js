Vue.component("todo-item", {
    prop: ["todo"],
    template: "<li>{{todo}}</li>"
});

let app7 = new Vue ({
    el: "#app7", 
        data: {
            groceryList:[
                {
                    id:0,
                    text: "Vegetables"
                },
                {
                    id:1,
                    text: "Cheese"
                },
                {
                    id:2,
                    text: "Drinks"
                },
                {
                    id:3,
                    text: "Protiens"
                }
            ]
        }

});
    