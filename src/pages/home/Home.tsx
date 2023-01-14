import "../../assets/scss/pages/home/homepage.scss"
import Navigation from "../../components/NavigationBar"
import icons from "../../assets/icons/icons"
import { useNavigate } from "react-router-dom"
import ls from "../../lib/ls"
import { useEffect } from "react"
const formatter = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'INR'
})


export default function Home() {
    const navigate = useNavigate()
    let online_money: any = Number(ls.get('online_money'))
    let offline_money: any = Number(ls.get('offline_money'))

    useEffect(() => {
        console.log(online_money, offline_money)
    }, [])


    return <div id="homepage">
        <div className="container">
            <h1 className="greet">Hello Abinash 💎</h1>
            <div className="top">
                <div className="banner">
                    <div className="left">
                        <span>Balance</span>
                        <span className="balance">{formatter.format(offline_money + online_money)}</span>
                        <span>Cash {formatter.format(offline_money)} • Online {formatter.format(online_money)}</span>
                    </div>
                    <div className="right">
                        <img src={icons.diamond_coin} />
                    </div>
                </div>

                <div className="buttons">
                    <button className="btn60" onClick={() => { navigate('/add_money') }}>Add Money</button>
                </div>
                <div className="blank"></div>
            </div>
        </div>
        <Navigation active='home' />
    </div>
}   