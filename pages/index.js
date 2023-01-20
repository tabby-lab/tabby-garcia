import { gql } from "@apollo/client";
import client from 'client';

export default function Home(props) {
  console.log("PROPS:", props)
  return <div> hello </div>
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