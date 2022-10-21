import React from 'react'

function Usercard({user}) {
  return (
    <div>
      <img style={{width:"40%", margin:"auto", borderRadius:"50%"}} src={user.avatar_url} alt="user" />
      <h2>{user.login}</h2>
    </div>
  );
}

export default Usercard
