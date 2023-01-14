import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import images from "../../assets/images/images"
import "../../assets/scss/pages/money/add_money.scss"
import TitleHeader from "../../components/TitleHeader"
import ls from "../../lib/ls"


export default function Add_money() {
    const [via, u_via] = useState('offline')
    const [type, u_type] = useState('take')
    const [money, u_money] = useState<any>('')
    const navigate = useNavigate()
    useEffect(() => {
        console.log(via)
    }, [via])
    return <div id="add_money">
        <TitleHeader title="Add Money" />
        <div className="container">
            <div className="top">
                {/* <img src={images.undraw_business_shop_re_ruf4} className='w90' /> */}
            </div>
            <div className="middle">
                <input type="number" className="amount" placeholder="Amount" autoFocus onInput={(e: any) => { u_money(e.target.value) }} />
                <div className="radio">
                    <div className="ra">
                        <input type="radio" value="Offline" name="payVia" id="offline" defaultChecked onChange={() => { u_via('offline') }} />
                        <label htmlFor="offline">Offline</label>
                    </div>
                    <div className="ra">
                        <input type="radio" value="Online" name="payVia" id="online" onChange={() => { u_via('online') }} />
                        <label htmlFor="online">Online</label>
                    </div>
                </div>

                <div className="radio">
                    <div className="ra" style={{backgroundColor : '#ff000022'}}>
                        <input type="radio" value="take" name="payType" id="take" defaultChecked onChange={() => { u_type('take') }} />
                        <label htmlFor="take">Take</label>
                    </div>
                    <div className="ra" style={{backgroundColor : '#00ff0033'}}>
                        <input type="radio" value="give" name="payType" id="give" onChange={() => { u_type('give') }} />
                        <label htmlFor="give">Give</label>
                    </div>
                </div>

            </div>
            <div className="bottom">
                <button className="btn100" onClick={add_money}>Add Money</button>
            </div>
        </div>
    </div>
    function add_money() {
        if (!Number(money)) {
            alert("Write money correctly")
            return
        }

        let yes = confirm("Are you sure ?")
        if (!yes)
            return
        let current_online_money = Number(ls.get('online_money'))
        let current_offline_money = Number(ls.get('offline_money'))
        let curr_money = Number(money)
        if (type == 'take') {
            if (via == 'online') {
                current_online_money -= curr_money
                ls.set('online_money', current_online_money)
            } else if (via == 'offline') {
                current_offline_money -= curr_money
                ls.set('offline_money', current_offline_money)
            }
        }
        else if (type == 'give') {
            if (via == 'online') {
                current_online_money += curr_money
                ls.set('online_money', current_online_money)
            } else if (via == 'offline') {
                current_offline_money += curr_money
                ls.set('offline_money', current_offline_money)
            }
        }
        navigate(-1)
    }
}