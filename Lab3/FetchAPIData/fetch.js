fetchData(true);

function fetchData(sortData) {
    fetch("https://dummyjson.com/products") 
        .then(response => {
            return response.json();
        })
        .then(data => {
            let table = document.getElementById('items_list');
            const products = data.products;

            products.forEach(product => {
                const row = document.createElement('tr');
                const titleCell = document.createElement('td');
                const descriptionCell = document.createElement('td');
                const imgCell = document.createElement('td');
                const imgPic = document.createElement('img');
                
                titleCell.textContent = product.title;
                descriptionCell.textContent = product.description;

                imgPic.src = product.thumbnail;
                imgPic.width = 100;
                imgPic.height = 100;
                imgCell.appendChild(imgPic);

                row.appendChild(imgCell);
                row.appendChild(titleCell);
                row.appendChild(descriptionCell);

                table.appendChild(row);
            })

            handleTextInput();

            if (sortData) {
                handleSelect();
            }
        })
        .catch(error => {
            console.error("Something went wrong", error);
        });
}

function handleTextInput() {
    let input = document.getElementById('inputText');
    let filter = input.value.toLowerCase();
    let table = document.getElementById('items_list');
    let rows = table.rows;

    for (let i = 1; i < rows.length; i++) {
        let title = rows[i].getElementsByTagName('td')[1].innerHTML;
        if (title.toLowerCase().indexOf(filter) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

function handleSelect() {
    let selectValue = document.getElementById('filterSelect').value;
        
    if (selectValue === "ROSNĄCO") {
        sortTable('items_list', 1);
    } else if (selectValue === "MALEJĄCO") {
        sortTable('items_list', 0);
    } else { // Fetch data without sorting it
        let table = document.getElementById('items_list');
        let rows = table.rows;
        for (let i = rows.length - 1; i > 0; i--) {
            table.deleteRow(i);
        }
        fetchData(false);
    }
}

function sortTable(tableId, sortValue) {
    quickSort(tableId, 1, document.getElementById(tableId).rows.length - 1, sortValue);
}

function quickSort(tableId, left, right, descFlag) {
    if (left < right) {
        let pi = partition(tableId, left, right, descFlag);
        quickSort(tableId, left, pi - 1, descFlag);
        quickSort(tableId, pi + 1, right, descFlag);
    }
}

function partition(tableId, left, right, descFlag) {
    let table = document.getElementById(tableId);
    let pivot = table.rows[right].getElementsByTagName("td")[1];
    let i = left - 1;

    for (let j = left; j <= right - 1; j++) {
        if (descFlag && table.rows[j].getElementsByTagName("td")[1].innerHTML.toLowerCase() < pivot.innerHTML.toLowerCase()) {
            i++;
            swap(table, i, j);
        } else if (!descFlag && table.rows[j].getElementsByTagName("td")[1].innerHTML.toLowerCase() > pivot.innerHTML.toLowerCase()) {
            i++;
            swap(table, i, j);
        }
    }

    swap(table, i + 1, right);
    return i + 1;
}

function swap(table, i, j) {
    let row1 = table.rows[i];
    let row2 = table.rows[j];

    row1.parentNode.insertBefore(row2, row1);
}