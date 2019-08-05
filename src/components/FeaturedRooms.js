import React, { Component } from 'react'
import { RoomContext } from "../context";
import Room from "../pages/Room";
import Loading from "./Loading";
import Title from './Title';


export default class componentName extends Component {
    static contextType = RoomContext; // creation du contexte general 
    render() {
        let  { loading,featuredRooms:rooms } = //creatio de deux variable contenant le contexte general 
        this.context;
        rooms = rooms.map(room =>{
            return <Room key={room.id} room={room}/>
        })
        return (
           <section className="featured-rooms">
           <Title title="featured rooms" />
            <div className="featured-rooms-center">
            {loading?<Loading/>:rooms}
            </div>
           
           </section>
        )
    }
}

