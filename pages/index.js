export default function Home(props) {
  console.log("PROPS:", props)
  return <div> hi </div>
}

export const getStaticProps = async () => {
  return {
    props: {
      myexampleprops: "test"
    }
  }
}