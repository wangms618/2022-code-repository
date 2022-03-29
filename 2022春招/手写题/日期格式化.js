const dateFormat = (dateInput, format) => {
    var day = dateInput.getDate()
    var month = dateInput.getMonth() + 1
    var year = dateInput.getFullYear()
    format = format.replace(/yyyy/, year)
    format = format.replace(/MM/, month)
    format = format.replace(/dd/, day)
    return format
}
function dateFormat(dateInput, format) {
    let day = dateInput.getDate()
    let month = dateInput.getMonth() + 1
}