class MessageBox {
  constructor(option) {
    this.option = option;

    this.msgBoxArea = document.querySelector("#msgbox-area");

    if (this.msgBoxArea === null) {
      this.msgBoxArea = document.createElement("DIV");
      this.msgBoxArea.setAttribute("id", "msgbox-area");
      this.msgBoxArea.classList.add("msgbox-area");

      document.body.appendChild(this.msgBoxArea);
    }
  }

  show(msg, title, legend, link, callback, closeLabel) {
    if (msg === "" || msg === undefined || msg === null)
      throw "Message is empty or not defined.";
    if (closeLabel === undefined || closeLabel === null) closeLabel = "Close";

    const option = this.option;
    const msgboxBox = document.createElement("DIV");
    const msgboxContent = document.createElement("DIV");
    const msgboxCommand = document.createElement("DIV");
    const msgboxClose = document.createElement("A");
    const msgboxTitle = document.createElement("h5");
    const msgboxLegend = document.createElement("h2");

    msgboxTitle.classList.add("msgbox-title");
    msgboxTitle.innerText = title;
    msgboxLegend.classList.add("msgbox-legend");
    msgboxLegend.innerText = legend;
    msgboxContent.classList.add("msgbox-content");
    msgboxContent.innerHTML = msg;
    msgboxCommand.classList.add("msgbox-command");
    msgboxClose.classList.add("msgbox-close");
    msgboxClose.setAttribute("href", "#");
    msgboxClose.innerText = closeLabel;
    msgboxBox.classList.add("msgbox-box");
    msgboxBox.appendChild(msgboxTitle);
    msgboxBox.appendChild(msgboxLegend);
    msgboxBox.appendChild(msgboxContent);
    msgboxCommand.appendChild(msgboxClose);

    if (link != undefined || link != null) {
      const msgboxExplore = document.createElement("A");
      msgboxExplore.classList.add("msgbox-close");
      msgboxExplore.setAttribute("href", link);
      msgboxExplore.setAttribute("target", "_blank");
      msgboxExplore.innerText = "Explore";
      msgboxCommand.appendChild(msgboxExplore);
    }

    msgboxBox.appendChild(msgboxCommand);

    this.msgBoxArea.appendChild(msgboxBox);
    msgboxClose.onclick = (evt) => {
      evt.preventDefault();
      if (msgboxBox.classList.contains("msgbox-box-hide")) return;
      clearTimeout(this.msgboxTimeout);
      this.msgboxTimeout = null;
      this.hide(msgboxBox, callback);
    };

    if (option.closeTime > 0) {
      this.msgboxTimeout = setTimeout(() => {
        this.hide(msgboxBox, callback);
      }, option.closeTime);
    }
  }

  hideMessageBox(msgboxBox) {
    return new Promise((resolve) => {
      msgboxBox.ontransitionend = () => {
        resolve();
      };
    });
  }

  async hide(msgboxBox, callback) {
    if (msgboxBox !== null) msgboxBox.classList.add("msgbox-box-hide");
    await this.hideMessageBox(msgboxBox);
    this.msgBoxArea.removeChild(msgboxBox);
    clearTimeout(this.msgboxTimeout);
    if (typeof callback === "function") callback();
  }
}

const msgbox = new MessageBox({
  closeTime: 10000,
});

document.querySelectorAll("#msgbox").forEach((button) => {
  button.addEventListener("click", function () {
    msgbox.show(
      this.dataset.message,
      this.dataset.title,
      this.dataset.legend,
      this.dataset.link
    );
  });
});
