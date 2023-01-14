import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./assets/scss/common/default.scss"
import Loading from "./pages/Loading"

const LazyHome = React.lazy(() => import('./pages/home/Home'))
const More = React.lazy(() => import('./pages/home/More'))
const Person = React.lazy(() => import('./pages/home/Person'))
const Charts = React.lazy(() => import('./pages/home/Charts'))
const Enter_password = React.lazy(() => import('./pages/Enter_password'))
const Add_money = React.lazy(() => import('./pages/money/Add_money'))
const Check_start = React.lazy(() => import('./pages/Check_start'))
const Welcome = React.lazy(() => import('./pages/Welcome'))

export default function App() {
    useEffect(() => { window.scrollTo(0, 0); }, [])
    return (
        <div className="container">
            <Router basename="/money">
                <React.Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path='/' element={< Check_start />} />
                        <Route path='/pass' element={< Enter_password />} />
                        <Route path='/home' element={< LazyHome />} />
                        <Route path='/more' element={< More />} />
                        <Route path='/charts' element={< Charts />} />
                        <Route path='/person' element={< Person />} />
                        <Route path='/loading' element={< Loading />} />
                        <Route path='/welcome' element={< Welcome />} />
                        <Route path='/add_money' element={< Add_money />} />
                    </Routes>
                </React.Suspense>
            </Router>
        </div >
    )
}