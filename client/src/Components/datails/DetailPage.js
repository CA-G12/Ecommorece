import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../nav/Navbar'
import Details from './Details'

function DetailPage(auth) {
  const { id } = useParams()
  const [productDetails, setProductDetails] = useState(null)

  useEffect(() => {
    fetch(`/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetails(data)
      })
  }, [])

  return (
    <>
      <Nav />
      {productDetails ? (
        <Details auth={auth} productDetails={productDetails} />
      ) : (
        'Loading....'
      )}
    </>
  )
}

export default DetailPage
