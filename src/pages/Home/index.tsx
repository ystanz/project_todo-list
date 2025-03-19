import AddButton from '../../components/AddButton'
import SideBar from '../../containers/SideBar'
import TasksList from '../../containers/TasksList'

const Home = () => {
  return (
    <>
      <SideBar displayFilters />
      <TasksList />
      <AddButton />
    </>
  )
}

export default Home
