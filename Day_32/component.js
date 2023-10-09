"use strict";

class F8 {
  static component(nameEl, obj = { callback, templateEl }) {
    let arr = [];
    let keys = [];
    for (let key in obj) {
      arr[arr.length] = key;
    }
    if (arr.length === 2) {
      let data = obj[arr[0]]();
      Object.keys(data).forEach(function (key) {
        keys[keys.length] = key;
      });
      Object.keys(data).forEach(function (key) {
        window[key] = data[key];
      });
      obj[arr[1]] = obj[arr[1]].replaceAll("{{", "<span>{{");
      obj[arr[1]] = obj[arr[1]].replaceAll("}}", "}}</span>");
      customElements.define(
        nameEl,
        class extends HTMLElement {
          constructor() {
            super();
          }
          connectedCallback() {
            let shadow = this.attachShadow({
              mode: "open",
            });
            let template = document.createElement("template");
            template.innerHTML = obj[arr[1]];
            let templateNode = template.content.cloneNode(true);
            let handleChildren = function (elHandle) {
              Array.from(elHandle.children).forEach(function (element) {
                keys.forEach(function (key) {
                  if (element.innerText.includes(`{{ ${key} }}`)) {
                    let targetEl = Array.from(
                      element.querySelectorAll("span")
                    ).find(function (item) {
                      return item.innerText.includes(`{{ ${key} }}`);
                    });
                    targetEl.innerText = window[key];
                    targetEl.classList.add(key);
                  }
                });
                if (element.attributes.length > 0) {
                  let commands = element.getAttributeNames();
                  if (commands.length > 0) {
                    commands.forEach(function (command) {
                      let control = element.getAttribute(command);
                      let index = command.indexOf(":");
                      if (index !== -1) {
                        if (command.slice(0, index) === "v-on") {
                          let event = command.slice(index + 1);
                          let select = keys.find((key) => {
                            return control.includes(key);
                          });
                          element.addEventListener(event, function (e) {
                            eval(control);
                            let elSelected = Array.from(
                              shadow.querySelectorAll("span")
                            ).find(function (item) {
                              return item.classList.contains(select);
                            });
                            if (elSelected !== undefined) {
                              elSelected.innerText = window[select];
                            }
                          });
                        }
                      }
                    });
                  }
                }
                elHandle.append(element);
              });
            };
            Array.from(templateNode.children).forEach(function (element) {
              keys.forEach(function (key) {
                if (element.innerText.includes(`{{ ${key} }}`)) {
                  let targetEl = Array.from(
                    element.querySelectorAll("span")
                  ).find(function (item) {
                    return item.innerText.includes(`{{ ${key} }}`);
                  });
                  targetEl.innerText = window[key];
                  targetEl.classList.add(key);
                }
              });
              if (element.attributes.length > 0) {
                let commands = element.getAttributeNames();
                if (commands.length > 0) {
                  commands.forEach(function (command) {
                    let control = element.getAttribute(command);
                    let index = command.indexOf(":");
                    if (index !== -1) {
                      if (command.slice(0, index) === "v-on") {
                        let event = command.slice(index + 1);
                        let select = keys.find((key) => {
                          return control.includes(key);
                        });
                        element.addEventListener(event, function (e) {
                          eval(control);
                          let elSelected = Array.from(
                            shadow.querySelectorAll("span")
                          ).find(function (item) {
                            return item.classList.contains(select);
                          });
                          if (elSelected !== undefined) {
                            elSelected.innerText = window[select];
                          }
                        });
                      }
                    }
                  });
                }
              }
              if (element.children.length > 0) {
                handleChildren(element);
              }
              shadow.append(element);
            });
          }
        }
      );
    } else {
      customElements.define(
        nameEl,
        class extends HTMLElement {
          constructor() {
            super();
          }
          connectedCallback() {
            let shadow = this.attachShadow({
              mode: "open",
            });
            let template = document.createElement("template");
            template.innerHTML = obj[arr[0]];
            let templateNode = template.content.cloneNode(true);
            let handleChildren = function (elHandle) {
              Array.from(elHandle.children).forEach(function (element) {
                if (element.attributes.length > 0) {
                  let commands = element.getAttributeNames();
                  if (commands.length > 0) {
                    commands.forEach(function (command) {
                      let control = element.getAttribute(command);
                      let index = command.indexOf(":");
                      if (index !== -1) {
                        if (command.slice(0, index) === "v-on") {
                          let event = command.slice(index + 1);
                          element.addEventListener(event, function (e) {
                            eval(control);
                          });
                        }
                      }
                    });
                  }
                }
                elHandle.append(element);
              });
            };
            Array.from(templateNode.children).forEach(function (element) {
              if (element.attributes.length > 0) {
                let commands = element.getAttributeNames();
                if (commands.length > 0) {
                  commands.forEach(function (command) {
                    let control = element.getAttribute(command);
                    let index = command.indexOf(":");
                    if (index !== -1) {
                      if (command.slice(0, index) === "v-on") {
                        let event = command.slice(index + 1);
                        element.addEventListener(event, function (e) {
                          eval(control);
                        });
                      }
                    }
                  });
                }
              }
              if (element.children.length > 0) {
                handleChildren(element);
              }
              shadow.append(element);
            });
          }
        }
      );
    }
  }
}
