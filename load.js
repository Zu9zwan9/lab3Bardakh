var collapsArray = [];

var interval;

window.onload = function () {


    interval = window.setInterval(function () {
        var httpRequest = new XMLHttpRequest();

        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {

                var jsonValue = JSON.parse(httpRequest.responseText);
                collapsArray = [];
                var section3 = document.getElementById("section-3-content");
                section3.innerHTML = "";

                jsonValue.forEach(element => {
                    collapsArray.push(new CollapsItem(element.title, element.position, element.content));
                });

                collapsArray.forEach(element => {
                    section3.appendChild(element.createItemElement());
                });


            }
            ;
        }

        httpRequest.open("GET", "/get", false);
        httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        httpRequest.send();
    }, 1000);


    /*
    
    */

};