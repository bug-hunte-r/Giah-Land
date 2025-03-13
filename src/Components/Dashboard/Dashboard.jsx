import React from 'react'
import { useUser } from '../../Context/UserProvider'
import AdminDash from './AdminDash';
import UserDash from './UserDash';

const Dashboard = () => {

  const {user} = useUser();
  if(user._doc.isAdmin) return <AdminDash user={user}/>
  return <UserDash />
}

export default Dashboard