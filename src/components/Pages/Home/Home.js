import React from "react";
import Service from "./Service";
import ContactForm from "./ContactForm";
import Header from "./Header";
import Layout from "../../Layout/Layout";

function Home() {
    return <Layout>
        <Header/>
        <Service/>
        <ContactForm/>
    </Layout>;
}

export default Home;
