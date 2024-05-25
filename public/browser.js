console.log("Frontend JS ishga tushdi");

function itemTemplate(item) {
    return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between ">
    <span class="item-text">
        ${item.reja}
    </span>
    <div>
        <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
        <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">Delete</button>
    </div>
</li>`

}

let createField = document.getElementById("create-field");

document.getElementById("create-form")
    .addEventListener('submit', (e) => {
        e.preventDefault();

        axios.post("/create-item", { reja: createField.value })
            .then((response) => {
                document.getElementById("item-list")
                    .insertAdjacentHTML("beforeend", itemTemplate(response.data));
                createField.value = "";
                createField.focus();
            })
            .catch((err) => {
                console.log("Iltimos qaytadan harakat qiling");
            });
    });