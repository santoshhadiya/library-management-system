

const AuthorItem = ({author,name,id}) => {
  return (
    <>
    {
      author?(<tr>
        <td>ID {id}</td>
        <td>{author}</td>
        <td>{name}</td>
      </tr>):''
    }
    
    
    </>
  )
}

export default AuthorItem