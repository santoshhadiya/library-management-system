import React, { useContext } from 'react'
import StudentDashboard from './StudentDashboard'
import { userContext } from '../../Context/Context'
import AdminDashboard from './AdminDashboard';

const Dashboard = () => {

    const {user}=useContext(userContext);

  return (
    <>
    <main>
        {
            user=="student"?<StudentDashboard/>:<AdminDashboard/>
        }
       
    </main>
    </>
  )
}

export default Dashboard