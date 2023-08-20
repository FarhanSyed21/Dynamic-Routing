import React, { Fragment } from 'react'

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
  return{
    fallback: true,
    paths: [
      { 
        params: {
        meetupId: 'm1',
        }, 
      },
      { 
        params: {
        meetupId: 'm2',
        }, 
      },
    ]
  }
}

export async function getStaticProps(context) {
  
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return{
    props: {
      meetupData: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
        id: meetupId,
        title: 'First Meet',
        address: 'some random street, some landmark, random appartment, some floor, some flat number',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      } 
    }
  }
}

export default index