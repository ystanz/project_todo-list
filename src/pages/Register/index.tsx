import NewTaskForm from '../../containers/NewTaskForm'
import SideBar from '../../containers/SideBar'

const Register = () => {
  return (
    <>
      <SideBar displayFilters={false} />
      <NewTaskForm />
    </>
  )
}

export default Register
