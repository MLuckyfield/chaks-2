

 const Sidebar =()=> {

  //const { user } = useAuthDataContext();
  const user = JSON.parse(localStorage.getItem('user'));
    return (
      <div class='sidebar'>
        <div class='col'>
            Welcome {user.name}
        </div>
          <a href='#'>Dashboard</a>
          <a href='#'>Dashboard</a>
          <a href='#'>Dashboard</a>
      </div>
    )
  }

export default Sidebar;
