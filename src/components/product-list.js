import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  FlexList,
  Text,
  Heading,
  Box,
  Icon,
} from "./ui"

function Product(props) {
  return (
    <Box center style={{height:"200px", filter:"invert(1)"}} >
      {props.image && (
        <Icon 
          alt={props.image.alt}
          image={props.image.gatsbyImageData}
          size="large"
        />
      )}
      <Text style= {{width:"250px"}}>{props.text}</Text>
    </Box>
  )
}

export default function ProductList(props) {
  return (
    <Section style={{backgroundColor: "rgb(25, 44, 76)", padding: "0px", color:"black"}}>
      <Container style={{padding: "0px"}}>
        <Box center paddingY={4} style={{backgroundColor: "white", width: "100%", paddingTop: "30px", paddingBottom: "20px"}}>
          <Heading style={{color:"black", fontSize:"45px" }}>
            {props.heading}
          </Heading>
          {props.text && <Text>{props.text}</Text>}
        </Box>
        <FlexList gap={3} variant="center" style={{paddingTop: "60px", paddingBottom:"10px", filter:"invert(0)"}}>
          {props.content.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageProductListContent on HomepageProductList {
    id
    kicker
    heading
    text
    content {
      id
      heading
      text
      image {
        alt
        id
        gatsbyImageData
      }
      links {
        id
        href
        text
      }
    }
  }
`
