import MeetupList from '../components/meetups/MeetupList' 

const DUMMY_MEETUPS = [
    {   id: "m1",
        title: "First Meet",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153",
        address: "some random street, some landmark, random appartment, some floor, some flat number",
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {   id: "m2",
        title: "Second Meet",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153",
        address: "some random street, some landmark, random appartment, some floor, some flat number",
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {   id: "m3",
        title: "Third Meet",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153",
        address: "some random street, some landmark, random appartment, some floor, some flat number",
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {   id: "m4",
        title: "Fourth Meet",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153",
        address: "some random street, some landmark, random appartment, some floor, some flat number",
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
]

const index = () => {
  return (
    <MeetupList meetups = {DUMMY_MEETUPS} />
  )
}

export default index