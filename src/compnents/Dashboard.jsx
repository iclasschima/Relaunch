import React, {useState} from "react"
import Sidenav from "./dashboard/Sidenav"
import Body from "./dashboard/Body"


export default () => {
    const [state, setState] = useState(false)
    
    return (
        <div>
            <Sidenav state={state} action={setState}/>
            <Body action={setState} state={state}/>
        </div>
    )
}