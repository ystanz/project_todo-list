import AddButton from '../../components/AddButton'
import SideBar from '../../containers/SideBar'
import TasksList from '../../containers/TasksList'

const Home = () => {
  return (
    <>
      <SideBar />
      <TasksList />
      <AddButton />
    </>
  )
}

export default Home
