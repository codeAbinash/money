import { useNavigate } from "react-router-dom"
import "../../assets/scss/pages/home/more.scss"
import Navigation from "../../components/NavigationBar"
export default function More() {
    const navigate = useNavigate()
    return <div id="more">
        <div className="container">
            {/* <h1>More</h1> */}
            <div className="btn">

                <button className="btn60" style={{ paddingInline: '4em' }} onClick={reset}>Reset Everything</button>
            </div>
        </div>
        <Navigation active='more' />
    </div>
    function reset() {
        const yes = confirm('Reset Everything')
        if (!yes) return
        localStorage.clear()
        navigate('/', { replace: true })
    }
}