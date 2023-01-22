import { gql } from "@apollo/client";
import client from 'client';
import { BlockRenderer } from "components/BlockRenderer";

export default function Home(props) {
  console.log("PROPS:", props)
  return <div> 
    <BlockRenderer blocks={props.blocks}/>
     </div>
}

export const getStaticProps = async () => {
  const {data} = await client.query({
    query:gql`
    query NewQuery {
      nodeByUri(uri: "/") {
        ... on Page {
          id
          title
          blocksJSON
        }
      }
    }
    `
  })
  return {
    props: {
      blocks:JSON.parse(data.nodeByUri.blocksJSON),
      myexampleprops: "test"
    }
  }
}