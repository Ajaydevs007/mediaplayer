import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';



function Landing() {
  return (
    <>

      <div className='container-fluid my-5' style={{ height: '100%' }}>

        <Row className='justify-content-evenly'>
          <Col sm={12} md={5} className='p-5'>
            <h4 className='my-5'>Welcome to <span className='' style={{ color: "#b2ffff" }}>MEDIA PLAYER</span></h4>
            <p style={{ textAlign: "justify" }} className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At exercitationem nisi corporis
              ducimus sapiente explicabo ex repellendus
              illum harum tenetur nulla ipsam maiores saepe cum sit neque perspiciatis, quasi hic?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus nisi iure qui amet, natus, deserunt ratione modi nihil id facere laboriosam! Dolore numquam possimus
              harum maiores incidunt, iure modi explicabo?</p>
            <div className='d-grid'>
              <Link className='fw-bold btn mt-5' to={'/home'} style={{ backgroundColor: "#b2ffff " }}>Let's Go</Link>

            </div>


          </Col>
          <Col sm={12} md={5} className='p-5'>
            <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="" className='img-fluid' />
          </Col>
        </Row>

      </div>


      <div className='container-fluid my-5'>
        <h4 className='text-center my-5 p-5'>FEATURES</h4>
        <Row className='justify-content-evenly'>

          <Col sm={12} md={3} className=''>

            <Card className='boder rounded'>
              <Card.Img variant="top" src="https://www.hubspot.com/hs-fs/hubfs/faking%20it%20until%20you%20make%20it.gif?width=380&height=380&name=faking%20it%20until%20you%20make%20it.gif" height={'250px'} />
              <Card.Body>
                <Card.Title className='text-center my-2'>MANAGE VIDEOS</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Effortlessly manage videos with our platform's robust features. Upload, categorize, and edit videos seamlessly while tracking views and engagement. Enjoy secure storage,
                  intuitive search, and sharing options for streamlined video management
                </Card.Text>
              </Card.Body>
            </Card>

          </Col>



          <Col sm={12} md={3} className=''>

            <Card className='boder rounded'>
              <Card.Img variant="top" src="https://gifdb.com/images/high/computer-squirrel-thumbs-up-approval-5noe49cb8yt9ty59.gif" height={'250px'} />
              <Card.Body>
                <Card.Title className='text-center my-2'>CATEGORIZE VIDEOS</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Effortlessly manage videos with our platform's robust features. Upload, categorize, and edit videos seamlessly while tracking views and engagement. Enjoy secure storage,
                  intuitive search, and sharing options for streamlined video management
                </Card.Text>
              </Card.Body>
            </Card>

          </Col>


          <Col sm={12} md={3} className=''>

            <Card className='boder rounded'>
              <Card.Img variant="top" src="https://media.tenor.com/OTzJy4d4xGMAAAAM/computer-stick-man.gif" height={'250px'} />
              <Card.Body>
                <Card.Title className='text-center my-2'>MANAGE HISTORY</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Effortlessly manage videos with our platform's robust features. Upload, categorize, and edit videos seamlessly while tracking views and engagement. Enjoy secure storage,
                  intuitive search, and sharing options for streamlined video management
                </Card.Text>
              </Card.Body>
            </Card>

          </Col>


        </Row>
      </div>


      <div className='container-fluid p-5 my-5'>

        <div className="container my-5">
          <Row className='border border shadow'>
            <Col sm={12} md={6} className='p-5'>
              <h4>
                <Link to={'/'} style={{ textDecoration: "none" }}>
                  MEDIA PLAYER
                </Link>
              </h4>
              <p style={{ textAlign: "justify" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi dolorem mollitia atque,
                deserunt sequi consequatur, eveniet soluta deleniti nesciunt,
                asperiores autem adipisci ipsum! Odio omnis dolorum eum ipsam? Consequatur, tenetur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sint cumque atque mollitia, quaerat
                deserunt similique necessitatibus.
                Quos tempora natus ipsam ex nesciunt cumque vitae velit cupiditate dignissimos, nihil quas?</p>
            </Col>
            <Col sm={12} md={6} className='p-5'>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/AbtpZvC8aT4?si=DZepx3hpdTtO2ehk"
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Col>
          </Row>
        </div>

      </div>






    </>
  )
}

export default Landing