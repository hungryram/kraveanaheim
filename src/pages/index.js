import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/home.module.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Krave Nutrition Anaheim"
    description="Krave Nutrition is a healthy beverage bar that serves drinks which not only satisfies your taste buds, it also hits the requirements to fuel your body with the best nutrition!" />
    <div className={`uk-visible@m uk-background-norepeat uk-background-cover uk-background-center-center uk-flex uk-flex-middle ${styles.hero}`} data-uk-height-viewport>
		<div className="uk-width-1-1">
			<div className="uk-container uk-container-large">
                <div className="uk-width-2xlarge">
					<div data-uk-scrollspy="cls:uk-animation-slide-top-small">
						<h1 data-uk-parallax="y: -200; opacity: 1,0,0,0;" className="uk-heading-large">KRAVE <span className="uk-display-block uk-margin-large-left">NUTRITION</span></h1>
					</div>
					<div data-uk-scrollspy="uk-animation-slide-bottom-small">
					<div className="hero__body" data-uk-parallax="y: 200; opacity: 1,0,0,0;">
						<p className="uk-text-bold uk-margin-medium uk-text-italic">SMART — FAST — NUTRITION</p>
						<a href="/menu" className="uk-button uk-button-primary">View the Menu</a>
					</div>
				</div>
                </div>
			</div>
		</div>
	</div>
	<div className={`uk-hidden@m uk-background-cover ${styles.mobileHero}`} data-uk-height-viewport>
		<div className="uk-position-bottom">
			<div className="uk-section uk-section-large">
				<div className="uk-container">
					<div className="hero__heading" data-uk-scrollspy="cls:uk-animation-slide-top-small">
						<h1 data-uk-parallax="y: -200; opacity: 1,0,0,0;" className="uk-heading-large">KRAVE <span className="uk-display-block uk-margin-large-left">Nutrition</span></h1>
					</div>
					<div data-uk-scrollspy="uk-animation-slide-bottom-small">
					<div className="hero__body" data-uk-parallax="y: 200; opacity: 1,0,0,0;">
						<p className="uk-text-bold uk-margin-medium uk-text-italic">SMART — FAST — NUTRITION</p>
						<a href="/menu" className="uk-button uk-button-secondary">View the Menu</a>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  

	<div className="uk-background-norepeat uk-background-top-right uk-background-image@s uk-section uk-section-large">
		<div className="uk-container uk-container-large">
			<div className="uk-grid-large uk-grid-margin-large uk-grid">
				<div className="uk-width-xlarge@l" data-uk-scrollspy="cls:uk-animation-fade;delay:300">
					<div>
						<h2 className="uk-h1">DRINKS YOU CANNOT RESIST</h2>
                        <p className="uk-text-bold uk-text-uppercase">The best nutrition drinks in Anaheim</p>
					</div>
					<div className="uk-panel uk-margin-medium uk-width-xlarge">
						<p>Krave Nutrition is a healthy beverage bar that serves drinks which not only satisfies your taste buds, it also hits the requirements to fuel your body with the best nutrition!</p>
					</div>
					<div className="uk-margin">
						<Link className="uk-button uk-button-primary" to="/about">About Us</Link>
					</div>
				</div>
                <div className="uk-width-expand@l" data-uk-scrollspy="cls:uk-animation-fade;delay:300">
					<div className="uk-margin" id="page#1-0-1-0">
						<div className="uk-child-width-1-2 uk-grid-match uk-grid">
							<div>
								<div className="uk-panel uk-margin-large-top">
									<img src="https://res.cloudinary.com/hungryram19/image/upload/v1633057485/aj-garcia/krave-nutrition-drink.jpg"/>
								</div>
							</div>
							<div>
								<div className="uk-panel">
									<img src="https://res.cloudinary.com/hungryram19/image/upload/v1633058487/aj-garcia/pumpkin-spice.jpg"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

  <div className="uk-section uk-section-small uk-padding-remove">
	<div className="uk-container uk-container-large uk-text-center">
		<h2>Krave Nutrition serves the best healthy meal combo</h2>
		<p>36 amazing flavors for your meal substitute</p>
		<a href="/menu" className="uk-button uk-button-primary">View Menu</a>
	</div>
</div>
<div className="uk-section">
	<div className="uk-container uk-container-large">
		<div className="uk-grid-small uk-grid-margin-small uk-grid">
			<div className="uk-grid-item-match uk-grid-margin uk-flex-middle uk-width-2-3@l">
				<div className="uk-panel uk-width-1-1">
					<div className="uk-margin uk-text-center">
						<div className="uk-child-width-1-1 uk-child-width-1-2@s uk-grid-small uk-grid">
							<div className="uk-grid-item-match uk-grid-margin ">
								<div>
									<a className="uk-inline-clip uk-transition-toggle uk-link-toggle" href="/menu" tabindex="0"><img alt="" src="https://res.cloudinary.com/hungryram19/image/upload/v1633067672/aj-garcia/2-drink-donuts.jpg"/>
									<div className="uk-overlay-default uk-transition-fade uk-position-cover"></div>
									<div className="uk-position-center">
										<div className="uk-overlay uk-transition-fade uk-margin-remove-first-child">
											<div className="el-title uk-h1 uk-margin-top uk-margin-remove-bottom">
												Shakes & Teas
											</div>
										</div>
									</div></a>
								</div>
							</div>
							<div className="uk-grid-item-match uk-grid-margin ">
								<div>
									<a className="uk-inline-clip uk-transition-toggle uk-link-toggle" href="/menu" tabindex="0"><img alt="" src="https://res.cloudinary.com/hungryram19/image/upload/v1633067464/aj-garcia/drink-donut2.jpg"/>
									<div className="uk-overlay-default uk-transition-fade uk-position-cover"></div>
									<div className="uk-position-center">
										<div className="uk-overlay uk-transition-fade uk-margin-remove-first-child">
											<div className="el-title uk-h1 uk-margin-top uk-margin-remove-bottom">
												Protein Donuts
											</div>
										</div>
									</div></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="uk-grid-item-match uk-grid-margin uk-width-1-3@l">
				<div className={`uk-tile uk-flex uk-flex-middle ${styles.featured}`}>
					<div className="uk-panel uk-width-1-1">
						<h2 className="uk-h1 uk-width-medium uk-margin-auto uk-text-center">Saturday Special<br/>
						Protein Donuts</h2>
						<div className="uk-panel uk-margin uk-width-medium uk-margin-auto uk-text-center">
							<p>Pre-order your protein donuts on Friday and pick it up Saturday. Our donuts are freshly baked on Saturday mornings and flavors rotate every weekend!</p>
						</div>
						<div className="uk-margin uk-width-medium uk-margin-auto uk-text-center">
							<a className="uk-button uk-button-text" href="/contact">Send pre-order</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1151.2425408764623!2d-117.7894315884421!3d33.86072139400709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd14aed8c1345%3A0xcd1342b7978722ac!2sKrave%20Nutrition!5e0!3m2!1sen!2sus!4v1633119544301!5m2!1sen!2sus" height="450" allowfullscreen="" loading="lazy"></iframe>


  </Layout>
)

export default IndexPage
