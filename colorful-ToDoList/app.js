let inputText = document.getElementById("input-text")
let send_it = document.getElementById("sendit");
let todoList = document.getElementById("todo-list");

let sendIt=()=>{
    // get input value if input value is "" alert("input a text")
    if(inputText.value ===""){
        alert("type a text")
    }else{
        let li = document.createElement("li"); // create Element <li> and input inputText.value inside <li> element
        li.innerHTML = inputText.value;        
        todoList.appendChild(li); // <li> 在 <ul>下, ul新增子標籤 Element.appendChild(element) element為小寫
        
        let span = document.createElement("span")
        span.innerHTML = "x";
        li.appendChild(span); // <span> 在 <li>下 故<li>新增子標籤<span>
    }
    inputText.value = "";
    saveList();
}
// click <ul id="todo-list"> 無法直接取得<li>
// 但獲取 <ul>標籤內容 element印出PointEvent點擊事件
todoList.addEventListener("click", function(element){
    console.dir(element) // PointerEvent{isTrused: true, ...}
    console.dir(element.target); // 知道你點哪個標籤的內容如<li>或<span>   

    if(element.target.tagName ==="LI"){ // element.target.tagName // 取得element的名字 // LI <li>        
        element.target.classList.toggle("check"); // toggle() ：有包含指定的 class name就移除，沒有的話就加上去
        saveList();
    }else if( element.target.tagName === "SPAN"){ // 取得element的名字 // SPAN <span> 
        // 如果點擊<span>就移除他的父標籤<li> parentElement.remove()
        element.target.parentElement.remove() //  element.target.parentElement is <li>
        saveList();
    }
})
// save data in browser localStorage()
let saveList=()=>{
    localStorage.setItem("data",todoList.innerHTML);
}
// open the web, get the data 
let showList = ()=>{
    todoList.innerHTML = localStorage.getItem("data");
}
showList()

// The target property returns the element on which the event occurred, opposed to the currentTarget property, 
// which returns the element whose event listener triggered the event.