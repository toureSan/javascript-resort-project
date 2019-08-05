import React, { Component } from 'react'
import Title from '../components/Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class componentName extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktails',
                info: ' Lorem ipsum dolar sit amet consectetur  adipiscicing elit. Magni, corporis !',
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: ' Lorem ipsum dolar sit amet consectetur  adipiscicing elit. Magni, corporis !',
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free shuttle',
                info: ' Lorem ipsum dolar sit amet consectetur  adipiscicing elit. Magni, corporis !',
            },
            {
                icon: <FaBeer />,
                title: 'strogest Beer',
                info: ' Lorem ipsum dolar sit amet consectetur  adipiscicing elit. Magni, corporis !',
            }

        ]
    }


    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                {this.state.services.map((item, index) => {
                    return (
                        <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                        </article>
                    );
                 
                })}
                </div>
            </section>

        )
    }
}
