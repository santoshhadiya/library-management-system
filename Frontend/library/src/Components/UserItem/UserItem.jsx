
const UserItem = ({id,name,email,password}) => {
  return (
    <>
<tr>
     <td>
   ID: {id}
   </td>
   <td className="student_name">
   {name}
   </td>
  <td>
  {email}
  </td>
  <td>
{password}
  </td>
    </tr> 
    </>
  )
}

export default UserItem