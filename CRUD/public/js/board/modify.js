import BoardRow from "../lib/BoardRow.js"
import Storage from "../lib/storage.js"
import { getParams } from "../lib/utils.js"

const storage = new Storage()
const form = document.querySelector("#modify-form")
const formTitle = document.querySelector("#title")
const formWriter = document.querySelector("#writer")
const formContent = document.querySelector("#content")

const { id } = getParams()
const to_be_modified = storage.getById(id)

formTitle.value = to_be_modified.title
formWriter.value = to_be_modified.writer
formContent.value = to_be_modified.content

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const title = e.target.title.value
    const writer = e.target.writer.value
    const content = e.target.content.value

    const dataRow = {
        id: id,
        title: title,
        writer: writer,
        content: content,
    }

    const boardRow = new BoardRow(dataRow)

    storage.modify(id, boardRow)

    location.href = `/board/view.html?id=${id}`
})
