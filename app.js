{
//     <div id = "container">
// {/* <div id:"container1"> */}
//         <h1>i am heading 1</h1>
//         <h2>i am heading 2</h2></div>
// {/* <div id:"container2"> */} */}
//         <h1>i am heading 1</h1>
//         <h2>i am heading 2</h2></div>
// <div id:"container3"> */}
//         <h1>i am heading 1</h1>
//         <h2>i am heading 2</h2></div>
//     </div>
}

const containerDiv = React.createElement("div", { id: "container" },
    [
React.createElement("h1", {}, "i am heading 1"),
React.createElement("h2", {}, "i am heading 2")

    ]);
    React.createElement("div", { id: "container1" },[
        React.createElement("h1", {}, "i am heading 3"),
        React.createElement("h2", {}, "i am heading 4")
        
            ]);
console.log(containerDiv);  //react element === object


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(containerDiv)