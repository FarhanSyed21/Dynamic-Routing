import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const index = () => {
    const addMeetupHandler = (enteredMeetupData) => {
         console.log(enteredMeetupData)
    }

  return (
    <NewMeetupForm onAddMeetup = {addMeetupHandler} />
  )
}

export default index