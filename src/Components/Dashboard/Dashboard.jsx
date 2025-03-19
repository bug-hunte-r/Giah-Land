import React from 'react';
import { useUser } from '../../Context/UserProvider';
import AdminDash from './AdminDash';
import UserDash from '../UserDashboard/UserDash'

const Dashboard = () => {
  const { user, loading } = useUser();

  console.log('Dashboard - user:', user, 'loading:', loading);

  if (loading) {
    return <div>Loading your dashboard, hold up...</div>;
  }
  if (!user) {
    return <div>No user found, bro. Log in or check your session.</div>;
  }
  if (user._doc && user._doc.isAdmin) {
    return <AdminDash user={user} />;
  }
  return <UserDash />;
};

export default Dashboard;