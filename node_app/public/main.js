
console.log("a")

require.config({
    baseUrl: "bin",
    paths: {
        "jquery": "https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min",
        "axios": "https://unpkg.com/axios/dist/axios.min",
        "moment": "moment",
        "index":"../js/index"
    }
})


require(['jquery','axios','moment','index'],function(jquery,axios,moment,index){
    index.init(axios)
})