import MeetupList from '../components/meetups/MeetupList' 
import { MongoClient } from 'mongodb'

const index = (props) => {
  return (
    <MeetupList meetups = {props.meetups} />
  )
}

// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;

//     return{
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps(){
    const client = await MongoClient.connect('mongodb+srv://farhansyed0007:farhan12112@cluster0.btjikoo.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const meetups = await meetupsCollection.find().toArray();

        client.close();

    return{
        props: {
            meetups: meetups.map(meetups => ({
                title: meetups.title,
                address: meetups.address,
                image: meetups.image,
                id: meetups._id.toString(),
            }))
        },
    }
}

export default index