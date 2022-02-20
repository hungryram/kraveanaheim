import * as React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/pagebanner"
import Seo from "../components/seo"

export default function Thanks() {
    return (
        <Layout>
            <PageBanner
                pageTitle="Thank You"
            />
            <Seo
                title="Thank You"
            />
            <div className="uk-section">
                <div className="uk-container">
                    <h2>Thank you!</h2>
                    <p>We'll reach back out to you shortly!</p>
                </div>
            </div>
        </Layout>
    )
}