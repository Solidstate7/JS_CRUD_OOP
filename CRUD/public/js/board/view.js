import { getParams } from "../lib/utils.js"
import Storage from "../lib/storage.js"

try {
    const storage = new Storage()

    const { id } = getParams()
    const row = storage.getById(id)

    const title = document.querySelector("#title")
    const writer = document.querySelector("#writer")
    const content = document.querySelector("#content")

    title.innerHTML = row.title
    writer.innerHTML = row.writer
    content.innerHTML = row.content
    
    // hit +1 & modify
    row.hit++
    storage.modify(id, row)
    // modify page loader
    document.querySelector("#modify").href = `./modify.html?id=${id}`

    // delete
    const btn = document.querySelector("#delete")
    btn.addEventListener("click", () => {
        const {id} = getParams()
        storage.delete(id)
        location.href = "./list.html"
    })
} catch (e) {
    alert(e.message)
    location.href = "./list.html"
}
