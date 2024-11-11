// const heading = document.createElement("h1");
// heading.innerHTML = "This is Javascript code";

// const root = document.getElementById("root");
// root.appendChild(heading);

// React.createElement is and Object = which is converted into html using render method
const heading = React.createElement("h1", {
    id: "heading",
    abc: "xyz",
}, "This is React code");

console.log(heading);
const root = document.getElementById("root");
const rootEl = ReactDOM.createRoot(root);
rootEl.render(heading);