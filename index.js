let inputElem = document.getElementById("inputField");
console.log(inputElem);

inputElem.addEventListener("input", () => {
    if(inputElem.value.trim() == ""){
        // means khali h input field therefore button dissable krdo Unpressable!
        clickbtn.disabled = true;
    }   
    else{
        // nOn empty h means enable krdo
        clickbtn.disabled = false;
    }
});


// Now clicking event:
let clickbtn = document.querySelector(".btn");
console.log(clickbtn);

let todoAddELem = document.querySelector(".toDoListElem");

const addToDo = () => {

    // Check:
    if(inputElem.value.trim() == ""){
        // means agr empty h input elem ka text box
        alert("Invalid Empty Input");
        return;     // vapas laut jao bina kuch kie!
    }

    // console.log(inputElem);
    // console.log(inputElem.value);

    // Creating a Whole Div Container:
    let toDoItem = document.createElement("div");   // div tag create kiya hai!
    toDoItem.classList.add("toDoItem");   // class add kiya hai div ko! class = "toDoItem" dynamically!
    
    // Create the paragraph element to show task
    let pElem = document.createElement("p");      // tag name create kiya hai p mtlb paragraph tag
    pElem.textContent = inputElem.value;     // jo bhi input field m type kiya hai wo p tag m chala jayega!
    // console.log(pElem);

    // Creating the delete button:
    let delBtn = document.createElement("button");   // button tag create kiya hai !
    delBtn.textContent = "Delete";
    delBtn.classList.add("deleteBtn");   // class add kiya hai button ko! class = "delBtn" dynamically!

    // Now Adding click event to delete button!
    delBtn.addEventListener("click", () => {
        toDoItem.remove();  // toDoItem ko remove kar do! jo bhi div create kiya hai usko remove kar do! pura ka pura container he remove ho jayega for that entry!
    });

    // Adding Both Elements to the todoitem div contianer:
    toDoItem.appendChild(pElem);   // ab p tag ko toDoItem div m dal diya hai! ab dono ek sath hain!
    toDoItem.appendChild(delBtn);

    todoAddELem.append(toDoItem);
   
   // ab firse inoyt field ko khali krdenge:
   inputElem.value = "";
   clickbtn.disabled = true;   // button ko disable kar do! kyuki ab input field khali hai firse ab!
   
};

clickbtn.addEventListener("click", () => {
    addToDo();      // function call mardi hai
});
