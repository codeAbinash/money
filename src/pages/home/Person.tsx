import "../../assets/scss/pages/home/person.scss"
import Navigation from "../../components/NavigationBar"
export default function Home() {
    return <div id="homepage">
        <div className="container">
            <h1>Person</h1>
        </div>
        <Navigation active='person' />
    </div>
}