const app_name = "money"

function set(item: string, data: string|number) {
    localStorage.setItem(app_name + '.' + item, data.toString())
}
function get(item: string|number) {
    const elem = localStorage.getItem('money.' + item)
    return elem
}

function clear() {
    localStorage.clear()
}

const ls = {
    set, get, clear
}

export default ls