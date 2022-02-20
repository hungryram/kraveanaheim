import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/pagebanner"
import Seo from "../components/seo"

export default function About() {
    return (
        <Layout>
            <PageBanner pageTitle="About Krave Nutrition" />
            <Seo
                title="About Krave Nutrition Anaheim"
                description="Krave Nutrition is a Healthy Beverage Bar that serves drinks which not only satisfies your taste buds, it also hits the requirements to fuel your body with the best nutrition!"
                />
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <div className="uk-grid uk-flex uk-flex-middle">
                        <div className="uk-width-3-5@s">
                            <h2 className="uk-h1">Your one-stop shop for healthy nutritional shakes and teas</h2>
                            <div>
                                <p>Krave Nutrition is a Healthy Beverage Bar that serves drinks which not only satisfies your taste buds, it also hits the requirements to fuel your body with the best nutrition!</p>
                                <p>Here at Krave we serve a Healthy Meal Combo! You start off with an Aloe shot that helps your digestive system. You know how aloe heals your skin? Does the exact same thing on the inside of your body! 0 sugar.</p>
                                <p>The second part is the Energizing Tea which is packed with antioxidants! Boosts your energy and metabolism, making you feel energized and ready to go! Rejuvenated is more like it! Helps with mental focus and clarity.</p>
                                <p>The third part is the Meal Replacement Shake! So many different flavors and all has the same nutritional facts! It’s under 200 calories, 17-24g of protein and packed with so many vitamins and minerals! We have flavors like Cookies and Creme, Banana Bread, Mint Chip, Peanut Butter Cup. A total of 36 different flavors! Leaving your tastes buds happy and fulfilled! These shakes are a great substitute for a meal and are dangerously delicious!</p>
                            </div>
                        </div>
                        <div className="uk-width-expand@s">
                        <StaticImage
                                src="../images/about-krave-nutrition.jpg"
                                alt="Krave Nutrition owners in Anaheim"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-section uk-section-small">
                <div className="uk-container uk-container-large uk-text-center">
                    <h2>Meet the founders</h2>
                    <p>Learn more about the founders of Krave Nutrition</p>
                </div>
            </div>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <div className="uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
                        <div className="uk-card-media-left">
                        <StaticImage
                                src="../images/tatiana-k.jpg"
                                alt="Tatiana of Krave Nutrition"
                            />
                        </div>
                        <div>
                            <div className="uk-card-body">
                                <h3 className="uk-heading-small">Tatiana Kovacs</h3>
                                <p>My name is Tatiana Kovacs and I am 24 years old. I am a former professional soccer player, played in Budapest Hungary for a Division 1 team for 3 years. I fell in love with health and fitness which lead me to start coaching people!</p>
                                <p>That’s the reason I opened Krave because I love serving people healthy nutrition, knowing what they are putting into their body is quality. I help people with their goals, such as dropping inches, bulking, gaining energy and I also help with mentality growth!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <div className="uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
                        <div className="uk-card-media-left">
                        <StaticImage
                                src="../images/aj.jpg"
                                alt="AJ Garcia of Krave Nutrition"
                            />
                        </div>
                        <div>
                            <div className="uk-card-body">
                                <h3 className="uk-heading-small">Alejandro Garcia</h3>
                                <p>My name is Alejandro Garcia and I’m 27 years. Former professional soccer player, I played at Orlando City for 1 year and then took my career to Mexico for 4 years. My time as a professional I had no idea about nutrition, so imagine what your typical person knows about nutrition. I gained 25 lbs of lean muscle and it inspired me to show others what is possible with a balanced diet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}