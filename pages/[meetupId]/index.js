import React, { Fragment } from 'react'
import { MongoClient } from 'mongodb'

const index = () => {
  return (
    <Fragment>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153' alt='First Meet'/>
      <h1>First Meet</h1>
      <address>some random street, some landmark, random appartment, some floor, some flat number</address>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </Fragment>
  )
}

export async function getStaticPaths(){

  const client = await MongoClient.connect('mongodb+srv://farhansyed0007:farhan12112@cluster0.btjikoo.mongodb.net/meetups?retryWrites=true&w=majority');
  
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()

  client.close();

  return{
    fallback: true,
    paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() } }))
  }
}

export async function getStaticProps(context) {
  
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect('mongodb+srv://farhansyed0007:farhan12112@cluster0.btjikoo.mongodb.net/meetups?retryWrites=true&w=majority');
  
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({ _id: meetupId });

  client.close();

  return{
    props: {
      meetupData: selectedMeetup, 
    }
  }
}

export default index