import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import icons from '../assets/icons/icons'
import '../assets/scss/pages/enter_password.scss'
import password from '../lib/password'




export default function Enter_password() {
    const [pass, u_pass] = useState('')
    const navigate = useNavigate()
    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    const [pass_status_txt, u_pass_status_txt] = useState('Enter password to continue')

    useEffect(() => {
        no_pass_redirect()
    }, [])


    return (
        <div id="enter_password">
            <div className="blank"></div>
            <div className="display">

                <div className="money"><img src={icons.Lock} /><span>Money</span> </div>
                {Display(pass)}
                <p className='small'>{pass_status_txt}</p>
            </div>
            <div className="blank"></div>
            <div className="keyboard">
                <div className="keys">

                    {keys.map(k => {
                        return <div className="key" key={crypto.randomUUID()} onClick={() => password_input(k)}><span>{k}</span></div>
                    })}
                    <div className="key blank"><span></span></div>
                    <div className="key" onClick={() => { password_input('0') }}><span>0</span></div>
                    <div className="key" onClick={erase_pass}><img src={icons.delete_left_solid} className='invert' /></div>
                </div>
                <div className="bottom">
                    <span>This keeps your data secure.</span>
                </div>
            </div>

        </div>
    )

    function password_input(inp: string) {
        u_pass(pass + inp)
    }
    function erase_pass() {
        u_pass(pass.slice(0, -1))
    }
    function Display(pass: string) {
        console.log(pass)
        const dots = []
        if (pass.length == 4) {
            console.log("Maxlength Reached")
            if (pass == password.get_pass())
                navigate('/home', { replace: true })
            else {
                u_pass('')
                u_pass_status_txt('Wrong Password! Try again.')
            }
        }

        let active_pass_len = pass.length
        let extra_pass_len = 4 - active_pass_len
        for (let i = 0; i < active_pass_len; i++) {
            dots.push(<div className="dot active" key={crypto.randomUUID()}></div>)
        }
        for (let i = 0; i < extra_pass_len; i++) {
            dots.push(<div className="dot" key={crypto.randomUUID()}></div>)
        }
        return <div className='disp'>{dots}</div>
    }


    function no_pass_redirect() {
        const current_password = password.get_pass()
        if (!current_password) {
            console.log("No Password")
            navigate('/home', { replace: true })
        }
    }
}   