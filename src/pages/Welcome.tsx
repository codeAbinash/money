
import { useNavigate } from 'react-router-dom'
import icons from '../assets/icons/icons'
import images from '../assets/images/images'
import '../assets/scss/pages/welcome.scss'
import ls from '../lib/ls'
export default function Welcome() {
    const navigate = useNavigate()
    return <div id="welcome">
        <div className="image">
            {/* <img src={icons.coin} className='coin' /> */}
            <img src={images.undraw_business_shop_re_ruf4} alt="" />
        </div>
        <div className="text">
            <h1>Welcome to <span className="lg">Money</span></h1>
            <p className='desc'>Keep track of your money</p>
            <img src={icons.diamond} className='diamond' />
            <img src={icons.coin} className='coin' />
        </div>
        <div className="button">
            <button className='btn-full-width' onClick={() => {
                ls.set('first_time', '1')
                navigate('/', { replace: true })
            }}>Get Started</button>
            <p className='end-text'>You agree our terms and conditions on getting started.</p>
        </div>
    </div>
}