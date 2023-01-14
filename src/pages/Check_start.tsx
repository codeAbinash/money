import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import password from "../lib/password"
import ls from "../lib/ls"

export default function Check_start() {
    const navigate = useNavigate()
    useEffect(() => {
        password.set_pass('0000')
        console.log(ls.get('first_time'))
        if (ls.get('first_time') == null) {
            // ls.set('first_time', '1')
            console.log('First Time')
            navigate('/welcome', { replace: true })
        }
        else {
            const current_password = password.get_pass()
            if (!current_password) {
                console.log("No Password")
                navigate('/home', { replace: true })
            } else {
                navigate('/pass', { replace: true })
            }
        }
    }, [])
    return <></>
}