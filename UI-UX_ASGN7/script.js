document.getElementById("addTaskBtn").addEventListener("click", function () {
    const title = document.getElementById("taskTitle").value.trim();
    const desc = document.getElementById("taskDesc").value.trim();

    if (title === "" || desc === "") {
        alert("Please enter both title and description.");
        return;
    }

    createTask(title, desc);

    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDesc").value = "";
});

function createTask(title, desc) {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const titleEl = document.createElement("div");
    titleEl.className = "title";
    titleEl.textContent = title;

    const descEl = document.createElement("div");
    descEl.className = "description";
    descEl.textContent = desc;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Mark as Completed";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    taskDiv.append(titleEl, descEl, completeBtn, editBtn, deleteBtn);
    document.getElementById("taskList").appendChild(taskDiv);

    completeBtn.addEventListener("click", function () {
        taskDiv.classList.toggle("completed");
        completeBtn.textContent = taskDiv.classList.contains("completed")
            ? "Mark as Incomplete"
            : "Mark as Completed";
    });

    deleteBtn.addEventListener("click", function () {
        taskDiv.remove();
    });

    editBtn.addEventListener("click", function () {
        if (editBtn.textContent === "Edit") {
            const newTitle = document.createElement("input");
            newTitle.value = titleEl.textContent;

            const newDesc = document.createElement("textarea");
            newDesc.value = descEl.textContent;

            taskDiv.replaceChild(newTitle, titleEl);
            taskDiv.replaceChild(newDesc, descEl);

            editBtn.textContent = "Save";
        } else {
            const updatedTitle = taskDiv.querySelector("input").value;
            const updatedDesc = taskDiv.querySelector("textarea").value;

            titleEl.textContent = updatedTitle;
            descEl.textContent = updatedDesc;

            taskDiv.replaceChild(titleEl, taskDiv.querySelector("input"));
            taskDiv.replaceChild(descEl, taskDiv.querySelector("textarea"));

            editBtn.textContent = "Edit";
        }
    });
}
