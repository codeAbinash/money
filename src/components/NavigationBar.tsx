import icons from '../assets/icons/icons'
import '../assets/scss/components/navigationBar.scss'
import { Link, useNavigate } from 'react-router-dom'
function openPage(nav: string, navigate: any) {
    console.log(nav)
    navigate('/' + nav, { replace: true })
}


const Navigation = (props: any) => {
    const active = props.active
    const navigate = useNavigate()
    return (
        <div id="navigationBar">
            <div className={"tab " + makeActiveClass(active, 'home')} onClick={() => { openPage('home', navigate) }}>
                <img src={active == 'home' ? icons.home : icons.home_broken} />
                <span className="tabTitle">Home</span>
            </div>
            <div className={"tab " + makeActiveClass(active, 'charts')} onClick={() => { openPage('charts', navigate) }}>
                <img src={active == 'charts' ? icons.charts : icons.charts_broken} />
                <span className="tabTitle">Charts</span>
            </div>
            <div className={"tab " + makeActiveClass(active, 'person')} onClick={() => { openPage('person', navigate) }}>
                <img src={active == 'person' ? icons.person : icons.person_broken} />
                <span className="tabTitle">person</span>
            </div>
            <div className={"tab " + makeActiveClass(active, 'more')} onClick={() => { openPage('more', navigate) }}>
                <img src={active == 'more' ? icons.more : icons.more_broken} />
                <span className="tabTitle">More</span>
            </div>
        </div>
    )
}

export default Navigation



function makeActiveClass(active: string, current: string): string {
    if (active == current)
        return 'active'
    return ''
}