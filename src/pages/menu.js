import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import * as styles from "../styles/menu.module.css"
import PageBanner from "../components/pagebanner"

export default function Menu({ data }) {
    return (
        <Layout>
            <PageBanner pageTitle="Krave Nutrition Menu"/>
            <div className="uk-section">
                <div className="uk-container uk-container-small">
                    <div className="uk-flex uk-flex-center">
                        <div className="uk-width-2xlarge">
                            <div className="uk-margin-medium-bottom">
                                <p>You can view our menu through image format with the links below or using the web format below.</p>
                                <ul className="uk-list">
                                    <li data-uk-lightbox><a href="https://res.cloudinary.com/hungryram19/image/upload/v1633193931/aj-garcia/power-basic-combo.png" className="accent">Choosing Power or Basic Combo</a></li>
                                    <li data-uk-lightbox><a href="https://res.cloudinary.com/hungryram19/image/upload/v1633136467/aj-garcia/power-tea-menu.png" className="accent">Power Tea Menu</a></li>
                                    <li data-uk-lightbox><a href="https://res.cloudinary.com/hungryram19/image/upload/v1633136469/aj-garcia/shake-menu.png" className="accent">Shake Menu</a></li>
                                    <li data-uk-lightbox><a href="https://res.cloudinary.com/hungryram19/image/upload/v1633136471/aj-garcia/hot-menu.png" className="accent">Hot Menu</a></li>
                                </ul>
                            </div>
                            <div className="step__one">
                                <h3>1. Choose a shake</h3>
                                <ul data-uk-accordion>
                                    <li>
                                        <a className="uk-accordion-title uk-light" href="#">Nutritional Shakes</a>
                                        <div className="uk-accordion-content uk-margin-medium-top">
                                            <p className="uk-text-bold">Under 200 calories, 17+ grams of protein, 45 essential vitatmins and minerals. Keto friendly.</p>
                                            <div className="uk-column-1-2">
                                                <ul className="uk-list uk-list-decimal">

                                                    {data.markdownRemark.frontmatter.shake_menu.shakes.map((node) => {
                                                        return (
                                                            <li><strong className="uk-text-uppercase">{node.name}</strong></li>
                                                        )
                                                    })}

                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul data-uk-accordion>
                                    <li>
                                        <a className="uk-accordion-title uk-light" href="#">Shake Add-ons</a>
                                        <div className="uk-accordion-content uk-margin-medium-top">
                                            <div className="uk-column-1-2">
                                                <ul className="uk-list uk-list-hyphen">

                                                {data.markdownRemark.frontmatter.shake_add_ons.map((node) => {
                                                        return (
                                                            <li><strong className="uk-text-uppercase">{node.name}</strong></li>
                                                        )
                                                    })}

                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="step__two uk-margin-medium-top">
                                <h3>2. Choose a basic tea or power tea</h3>
                                <ul data-uk-accordion>
                                    <li>
                                        <a className="uk-accordion-title uk-light" href="#">Power Teas</a>
                                        <div className="uk-accordion-content uk-margin-medium-top">
                                            <p className="uk-text-bold">Includes aloe, tea, liftoff</p>
                                            <div className="uk-column-1-2@s">
                                                <ul className="uk-list uk-list-hyphen">

                                                {data.markdownRemark.frontmatter.power_tea.p_teas.map((node) => {
                                                        return (
                                                        <li>
                                                            <strong className="uk-text-uppercase">{node.name}</strong><br />
                                                            <span>{node.ingredients}</span>
                                                        </li>                                                        
                                                        )
                                                    })}

                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul data-uk-accordion>
                                    <li>
                                        <a className="uk-accordion-title" href="#">Basic Teas</a>
                                        <div className="uk-accordion-content uk-margin-medium-top">
                                            <p className="uk-text-bold">Includes aloe, tea, liftoff</p>
                                            <div className="uk-column-1-2">
                                                <ul className="uk-list uk-list-hyphen">

                                                    
                                                {data.markdownRemark.frontmatter.basic_tea.b_tea.map((node) => {
                                                        return (
                                                            <li>
                                                            <strong className="uk-text-uppercase">{node.name}</strong><br />
                                                        </li>                                                
                                                        )
                                                    })}

                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul data-uk-accordion>
                                    <li>
                                        <a className="uk-accordion-title uk-light" href="#">Tea add-ons</a>
                                        <div className="uk-accordion-content uk-margin-medium-top">
                                            <p className="uk-text-bold">Need a little tea boost? View our add-ons. <em>Liftoff is included in a power tea.</em></p>

                                            <div className="uk-column-1-2">
                                                <ul className="uk-list uk-list-hyphen">


                                                {data.markdownRemark.frontmatter.tea_add_ons.map((node) => {
                                                        return (
                                                        <li>
                                                            <strong className="uk-text-uppercase">{node.name}</strong><br />
                                                            <span>{node.ingredients}</span>
                                                        </li>                                                        
                                                        )
                                                    })}

                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const MenuData = graphql`
 {
    markdownRemark {
      frontmatter {
        basic_tea {
          b_tea {
            name
          }
        }
        power_tea {
          p_teas {
            ingredients
            name
          }
        }
        shake_add_ons {
          name
        }
        shake_menu {
          shakes {
            name
          }
        }
        tea_add_ons {
          ingredients
          name
        }
        title
      }
    }
  }
  
`