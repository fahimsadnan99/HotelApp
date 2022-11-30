import Home from "../Pages/Home"
import Room  from "../Pages/Room"
import Dashboard from "../Pages/Dashboard"
import Signin from "../Pages/Signin"
import Signup from "../Pages/Signup"
import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import SingleRoom from "../Pages/Room/SingleRoom"



 const Route = createBrowserRouter([
    {
        path : "/",
        element : <App></App>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/room",
                element : <Room></Room>
            },
            {
                path : "/room/:id",
                element : <SingleRoom></SingleRoom>
            },
            {
                path : "/dashboard",
                element : <Dashboard></Dashboard>
            },
            {
                path : "/signin",
                element : <Signin></Signin>
            },
            {
                path : "/signup",
                element : <Signup></Signup>
            },
            {
                path : "*",
                element : <Home></Home>
            }
        ]
    }
])

export default Route