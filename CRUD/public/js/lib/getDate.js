export const getDate = () => {
    const date = new Date(Date.now())
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours()
    const minute = date.getMinutes()
    const dateStr = `${year}-${month}-${day} | ${hour}:${minute}`
    return dateStr
}

