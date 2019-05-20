WIN_COMBOS = [[1, 2, 3,], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7], [2, 5, 8], [3, 6, 9]]

let callBack = (e) => {
    e.preventDefault()
    alert('test')
}

let btn = document.createElement("BUTTON");
btn.innerHTML = "TEST_BUTTON"
btn.addEventListener('click', callBack)
document.body.appendChild(btn)

