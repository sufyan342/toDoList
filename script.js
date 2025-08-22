document.addEventListener("DOMContentLoaded", () => {
    
    const addButton = document.getElementById("addButton");
    const deleteButton = document.getElementById("deleteButton");
    const deleteAll = document.getElementById("deleteAll");
    
    const list = document.querySelector(".list");
    
    const input = document.getElementById("input1");

    function render() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        
        storedTasks.forEach(text => {
            const newTask = document.createElement("div");
            newTask.textContent = text;
            newTask.classList.add("task");

            newTask.addEventListener("click", () => {
                newTask.classList.toggle("clicked");
            })

            list.appendChild(newTask);
        })
    }

    render();
   
    addButton.addEventListener("click", () => {
        const text = input.value.trim();

        if (text != "") {
            const newTask = document.createElement("div");
            newTask.innerHTML = text;
            newTask.classList.add("task");

            let storeTasks = JSON.parse(localStorage.getItem("tasks")) || [];
            storeTasks.push(text);
            localStorage.setItem("tasks", JSON.stringify(storeTasks));

            newTask.addEventListener("click", () => {
                newTask.classList.toggle("clicked");
            })

            list.appendChild(newTask);
            input.value = "";
        }
    })

    deleteButton.addEventListener("click", () => {
        const selected = document.querySelectorAll(".task.clicked");
        let storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

        selected.forEach(task => {
            storedTasks = storedTasks.filter(t => t != task.textContent);
            task.remove();
        })
        
        localStorage.setItem("tasks", JSON.stringify(storedTasks));

    })

    deleteAll.addEventListener("click", () => {
        const all = document.querySelectorAll(".task");
        
        all.forEach(task => {
            task.remove();
        })

        localStorage.setItem("tasks", JSON.stringify([]));
    })    

})   