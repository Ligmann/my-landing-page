import * as React from "react";
import LeftSection from '../components/left-section';
import RightSection from '../components/right-section';
import "../scss/base.scss";
import {graphql} from "gatsby";

const IndexPage = ({data}) => {
  return (
      <main role={'main'}>
          <div className={"wrap-columns wrap-columns-coll-mob"}>
              <div className={"columns-50"}>
                  <LeftSection Leftcontent={data.wpPage.homeACF}/>
              </div>
              <div className={"columns-50 columns-50--40 columns-50--dn"}>
                  <RightSection image={data.wpPage.featuredImage.node} />
              </div>
          </div>
      </main>
  )
}

export default IndexPage

export const query = graphql`
    query {
        wpPage(slug: {eq: "home"}) {
            featuredImage {
                node {
                    sourceUrl
                    altText
                }
            }
            homeACF {
                headerGroup {
                    headerTop
                    headerCenter
                    headerColor
                }
                subHeader
                content
                contaktDetaild {
                    contakt
                    textAlternative
                }
            }
        }
  }
`

export const Head = () => <title>Damian Ligmann</title>
