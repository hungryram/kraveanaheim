import * as React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/pagebanner"
import contact from "../../data/profile.json"
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt"
import { FaLocationArrow } from "@react-icons/all-files/fa/FaLocationArrow"
import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope"
import Seo from "../components/seo"

export default function Contact() {
    const info = contact.contact_information
    const social = contact.social_media
    return (
        <Layout>
            <PageBanner pageTitle="Contact Krave Nutrition" />
            <Seo
                title="Contact Krave Nutrition Anaheim"
                description="Contact Krave Nutrition in Anaheim for healthy nutritional drinks and shakes to power up your day!"
                />
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-grid-large" data-uk-grid>
                        <div className="uk-width-1-2@s">
                            <div className="uk-card">
                                <h3 className="uk-margin-medium-bottom">Get in touch</h3>
                                <ul className="uk-list contact__page">
                                    <li class="uk-margin-medium-bottom"><a href={`tel: ${info.office}`}><FaPhoneAlt /> {info.office}</a></li>
                                    <li class="uk-margin-medium-bottom"><a href={`mailto: ${info.email}`}><FaRegEnvelope /> {info.email}</a></li>
                                    <li class="uk-margin-medium-bottom"><a href=""><FaLocationArrow /> {info.address}, {info.city}, {info.state} {info.zip_code}</a></li>
                                </ul>
                                <div className="footer__social">
                                    <h3>Follow us</h3>
                                            <a href={social.facebook} target="_blank" rel="noopener"><FaFacebook /></a>
                                            <a href={social.instagram} target="_blank" rel="noopener"><FaInstagram /></a>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-2@s">
                            <div className="uk-card">
                                <h3>Send an email</h3>
                                <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" className="uk-grid-small" data-uk-grid action="/thank-you">
                                    <input name="bot-field" type="hidden" />
                                    <input type="hidden" name="Subject" value="Website Contact Form" />
                                    <div className="uk-width-1-2@s">
                                        <input className="uk-input" type="text" name="Name" id="uk-input-name" placeholder="Name" required />
                                    </div>
                                    <div className="uk-width-1-2@s">
                                        <input className="uk-input" type="text" name="Phone" id="uk-input-phone" placeholder="Phone" required />
                                    </div>
                                    <div className="uk-width-1-1">
                                        <input className="uk-input" type="email" id="input-email" name="Email" placeholder="Email" required />
                                    </div>
                                    <div className="uk-width-1-1">
                                        <textarea className="uk-textarea" rows="5" id="textarea-info" name="Message" placeholder="Message"></textarea>
                                    </div>
                                    <div className="uk-width-1-1">
                                        <button className="uk-button uk-button-primary uk-width-1-1">Submit</button>
                                    </div>
                                    <div className="uk-width-1-1">
                                        <p>By submitting the form with your information above you are agreeing to our <a href="/legal/terms-and-conditions">Terms and Conditions</a> and <a href="/legal/privacy-policy">Privacy Policy</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}