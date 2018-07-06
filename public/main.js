var trash = document.getElementsByClassName("fa-trash");
document.getElementById("deleteAll").onclick = delList

        function delList (element) {
        const wholeList = this.parentNode.parentNode.childNodes[3]
        console.log(this.parentNode.parentNode.childNodes[3])
        console.log("button????")
        fetch('deleteall', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'wholeList': wholeList
          })
        }).then(function (response) {
          window.location.reload()
        })
};

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const item = this.parentNode.parentNode.childNodes[1].innerText
        console.log(this)
        console.log("hello????")
        fetch('deleteitem', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'item': item
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});


//create a function that car item then is pushed from the html to the database
