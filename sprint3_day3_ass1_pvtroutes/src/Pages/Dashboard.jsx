import React from "react";

import {Link} from "react-router-dom"
function Dashboard(){

return(
    <div>
        <h1>Welcome to Dashboard</h1>
        <Link to ="/dashboard/settings">Settings</Link>
    </div>
)
}
export default Dashboard