class CollapsItem {

    constructor(title, position, content) {
        this.title = title;
        this.content = content;
        this.position = parseInt(position);
    }

    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    setPosition(position) {
        this.position = parseInt(position);
    }

    getPosition() {
        return this.position;
    }

    setContent(content) {
        this.content = content;
    }

    getContent() {
        return this.content;
    }


    createItemElement() {

        var details = document.createElement("details")
        details.classList.add("content-collaps");

        var summary = document.createElement("summary")
        summary.classList.add("head-collaps");
        summary.append(this.title);

        var body = document.createElement("div");
        body.classList.add("body-collaps");
        body.append(this.content);

        details.appendChild(summary);
        details.appendChild(body);

        return details;
    }
};
