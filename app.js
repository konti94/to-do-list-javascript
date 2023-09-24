const addItem = document.querySelector("#addItem");
const itemInput = document.querySelector("#itemInput");
const todoList = document.querySelector(".todo-list");
let itemHTML;
let clicked = false;

addItem.addEventListener("click", () => {
	if (itemInput.value.length === 0) {
		alert("Please enter a task");
	} else {
		renderList();
	}
});

itemInput.addEventListener("keydown", (e) => {
	if (e.keyCode === 13) {
		renderList();
	}
});

const renderList = () => {
	todoList.innerHTML += `
		<div class="todo-list-item">
			<span>${itemInput.value}</span>
			<button type="button" class="button button--red">
				Remove
			</button>
		</div>
	`;

	const removeItems = document.querySelectorAll(".button--red");
	for (let i = 0; i < removeItems.length; i++) {
		removeItems[i].onclick = function () {
			this.parentNode.remove();
		};
	}

	itemInput.value = "";
};
