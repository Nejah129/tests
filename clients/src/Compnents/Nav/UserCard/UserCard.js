import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteUser, getUsers } from '../../../redux/actions'
import EditUser from '../../EditUser'


const UserCard = ({user}) => {
    const dispatch = useDispatch()
    console.log(user)
    return (
        <div>
        <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>
      <h3>{user.email}</h3></Card.Text>
      <Card.Text> <h3>{user.number}</h3>
    </Card.Text>
    <Button variant="primary" onClick={()=>{dispatch(deleteUser(user._id));dispatch(getUsers())}}>DELETE</Button>
    <EditUser user={user}/>
  </Card.Body>
</Card>
        </div>
    )
}

export default UserCard;
