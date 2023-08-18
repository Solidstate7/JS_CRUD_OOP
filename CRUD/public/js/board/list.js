import Storage from "../lib/storage.js" // Datatype
const storage = new Storage()
const list = storage.get()

const components = list.map((row) => {
    return `
    <tr>
        <td>${row.id}</td>
        <td><a href="view.html?id=${row.id}">${row.title}</a></td>
        <td>${row.writer}</td>
        <td>${row.created_at}</td>
        <td>${row.hit}</td>
    </tr>`
}).join("")


const tbody = document.querySelector("tbody")
tbody.innerHTML = components

const clearbtn = document.querySelector(".clear btn")
clearbtn.onclick = () => {
    storage.clear()
    location.href = "./list.html"
}