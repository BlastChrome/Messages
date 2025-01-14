class UIMessage {
  constructor() {
    this.init();
    this.messageElement = this.createMessageElement();
    this.body = document.querySelector("body").appendChild(this.messageElement);
  }

  init() {
    // Create a <link> element to link to the CSS file
    let cssLink = document.createElement("link");
    // Set the attributes for the <link> element
    cssLink.rel = "stylesheet";
    cssLink.href = "https://blastchrome.github.io/Messages/messages.css"; // CDN URL for Bootstrap
    // Append the <link> element to the <head> of the document
    document.head.appendChild(cssLink);
  }

  createMessageElement() {
    const el = document.createElement("div");
    el.classList.add("message");
    return el;
  }

  hideMessage() {
    if (this.messageElement.classList.contains("show-in")) {
      this.messageElement.classList.remove("show-in");
    }
    this.messageElement.classList.add("show-out");
  }

  showMessage(text = "", duration = 1000) {
    if (!text || text.length <= 0) return;
    this.messageElement.innerText = text.toString().trim();

    if (this.messageElement.classList.contains("show-out")) {
      this.messageElement.classList.remove("show-out");
    }
    this.messageElement.classList.add("show-in");
    setTimeout(this.hideMessage.bind(this), duration);
  }
}
