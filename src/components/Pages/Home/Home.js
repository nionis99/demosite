import React from "react";
import Features from "./Features";
import ContactForm from "./ContactForm";
import Header from "./Header";
import Layout from "../../Layout/Layout";

function Home() {
    return <Layout>
        <Header/>
        <Features/>
        <ContactForm/>
    </Layout>;
}

export default Home;
