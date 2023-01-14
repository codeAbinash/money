import { useNavigate } from "react-router-dom"
import icons from "../assets/icons/icons"
import '../assets/scss/components/titleHeader.scss'



function TitleHeader(props: any) {
    const navigate = useNavigate()
    const backFunction = props.back || navigate

    return (
        <div id="titleHeader">
            <div className="left">
                <img src={icons.left_arrow_solid} onClick={() => backFunction(-1)} />
            </div>
            <div className="center"><p>{props.title}</p></div>
            <div className="right"></div>
        </div>
    )
}

export default TitleHeader