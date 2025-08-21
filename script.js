document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("addButton");
    const deleteButton = document.getElementById("deleteButton");
    const list = document.querySelector(".list");
    const input = document.getElementById("input1");

    addButton.addEventListener("click", () => {
        const text = input.value.trim();

        if (text != "") {
            const newTask = document.createElement("div");
            newTask.innerHTML = text;
            newTask.classList.add("task");

            newTask.addEventListener("click", () => {
                newTask.classList.toggle("clicked")
            })

            list.appendChild(newTask);
        }
    })

    deleteButton.addEventListener("click", () => {
        const selected = document.querySelectorAll(".task.clicked");
        selected.forEach(task => {
            task.remove();
        })
    })


})   