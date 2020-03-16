import fetch from 'node-fetch'

export const People = ({ person }) => {
  return (
    <>
      <h1>Person</h1>
      {JSON.stringify(person, null, 2)}
    </>
  )
}

export async function getStaticPaths() {
  const response = await fetch('https://swapi.co/api/people')
  const data = await response.json()

  const paths = data.results.map((_, index) => `/people/${index}`)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const response = await fetch(`https://swapi.co/api/people/${params.id}`)
  const person = await response.json()

  return { props: { person } }
}

export default People
