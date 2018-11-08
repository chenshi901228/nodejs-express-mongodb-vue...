



define(function () {
    let modal = {}
    modal.init = function (axios) {
        axios.post('http://localhost:3000/getProject', {
            type: "全部",
            currentPage: 1,
            pageSize: 10
        })
            .then(function (res) {
                console.log(res.data)
               
            })
            .catch(function (err) {
                console.log(err)
            })
    }
    return modal
})