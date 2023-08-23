import { getDate } from "./getDate.js"

class BoardRow {
    id
    title
    content
    writer
    created_at
    hit

    constructor(row) {
        this.id = row.id
        this.title = row.title
        this.content = row.content
        this.writer = row.writer
        this.created_at = new Date(Date.now()).toLocaleDateString();
        this.hit = 0
    }
}

export default BoardRow
