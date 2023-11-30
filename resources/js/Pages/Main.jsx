import React from "react";
import { Link, Head } from "@inertiajs/react";
import Content from "@/Components/Base/Content";
import Navbar from "@/Components/Base/Navbar";
import Footer from "@/Components/Base/Footer";

export default function Main(props) {
    return (
        <div data-theme="bumblebee">
            <Head title={props.title} />
            <div className="App">
                <Navbar />
                <Content />
                <Footer />
            </div>
        </div>
    );
}
