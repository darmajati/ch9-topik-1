import { useEffect, useState } from "react";
import { List, Button } from "reactstrap";
import { Link } from "react-router-dom"

export default function Home() {
    const [users, setUser] = useState([{id: 1, name: 'Elon Musk'}])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data => setUser(data)))
    }, [])

  return (
    <>

        <Button>
            <Link to={'/create-user'}>Create User</Link>
        </Button>

        <a href="/create-user">create user2</a>

      <h1>List All Users</h1>
      <List>
        {
            users.map(user => (
                <li key={user.id}>
                    {user.name}
                </li>
            ))
        }
      </List>
    </>
  );
}
