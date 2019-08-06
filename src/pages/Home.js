import React from 'react'
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRoom from '../components/FeaturedRooms';
import Button from '../components/Button';
export default function Home() {
    return (
        <>
        <Hero>
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $255">
                <Link to="/rooms" className="btn-primary">
                    Our rooms
                 </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRoom />
     
        </>
    )
}
