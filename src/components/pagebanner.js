import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"

export default function PageBanner({ pageTitle }) {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark {
        frontmatter {
          title
        }
      }
    }
`)

  return (
    <div className="uk-background-norepeat uk-background-cover uk-background-center-center uk-flex uk-flex-middle uk-height-large"  style={{ backgroundImage: `url("https://res.cloudinary.com/hungryram19/image/upload/v1633155566/aj-garcia/dots3.jpg")` }} uk-parallax="bgy: -100">
    <div className="uk-width-1-1">
        <div className="uk-container uk-container-large uk-text-center">
            <div>
                <h1>{ pageTitle }</h1>
            </div>
        </div>
    </div>
</div>
  )
}