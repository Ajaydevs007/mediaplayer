import React, { useState } from 'react'
import Add from '../Components/Add'
import { Row, Col } from 'react-bootstrap'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'




function Home() {

  // state lifting from add.jsx to view.jsx when new video is added to refresh page(useEffect dependency)
  const [addVideoResponse, setaddVideoResponse] = useState("")

  //used to refresh when video dropped in category and deleted from all videos
  const [addcatdropResponse, setaddcatdropResponse] = useState("")


  const [deletevideofromviewResponse, setdeletevideofromviewResponse] = useState("")


  return (
    <>
      <div className='container-fluid my-5'>
        <Row className='justify-content-between'>
          <Col sm={12} md={5} className='text-center p-3 fw-bolder'>
            <Add setaddVideoResponse={setaddVideoResponse} />
          </Col>
          <Col sm={12} md={5} className='text-center p-3 fw-bolder'>
            <Link to={'/history'} style={{ textDecoration: "none" }}>Watch History</Link>
          </Col>
        </Row>
      </div>

      <div className="container-fluid my-5">
        <Row>
          <Col sm={12} md={6} className='text-center p-5'>
            <View addVideoResponse={addVideoResponse} addcatdropResponse={addcatdropResponse} setdeletevideofromviewResponse={setdeletevideofromviewResponse}/>
          </Col>
          <Col sm={12} md={6} className='text-center p-5'>
            <Category setaddcatdropResponse={setaddcatdropResponse} deletevideofromviewResponse={deletevideofromviewResponse} />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Home