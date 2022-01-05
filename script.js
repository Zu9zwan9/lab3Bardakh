var collapsArray = [];
const httpRequest = new XMLHttpRequest();


function createCollapse() {

    var position = document.getElementById("position").value;
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;


    var collapsItem = new CollapsItem(title, position, content);

    collapsArray.push(collapsItem);
    collapsArray.sort(function (a, b) {
        if (a.getPosition() > b.getPosition()) {
            return 1;
        }
        if (a.getPosition() == b.getPosition()) {
            return 0;
        }
        if (a.getPosition() < b.getPosition()) {
            return -1;
        }
    });

    var section3 = document.getElementById("section-3-content");
    section3.innerHTML = "";

    collapsArray.forEach(element => {
        section3.appendChild(element.createItemElement());
    });

    httpRequest.open('POST', 'save');
    httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    httpRequest.send('data=' + JSON.stringify(collapsArray));

    //console.log();

}
