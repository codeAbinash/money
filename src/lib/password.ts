import ls from "./ls"

function get_pass() {
    return ls.get('current_password')
}
function set_pass(pass: string) {
    ls.set('current_password', pass)
}
const password = {
    get_pass, set_pass
}
export default password