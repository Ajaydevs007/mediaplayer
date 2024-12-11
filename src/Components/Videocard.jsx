import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo, saveHistory } from '../Services/allAPI';





function Videocard({displydata, setDeleteResponse,insidecategory }) {
  //display is the all video details props shared from view.jsx
  //setDeleteResponse statelift to delete videocaard
  console.log(displydata);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {

    // Posting history details when clicked on card
    const { caption, utubeurl } = displydata

    //creating date
    const localTime = new Date()
    console.log(localTime);
    const formattedTime = localTime.toLocaleString()
    console.log(formattedTime);

    //storing posting details in a variable
    const Historydata = { caption, utubeurl, formattedTime }


    try {
      // posting history  API call 
      await saveHistory(Historydata)
    }
    catch (err) {
      console.log(err);

    }

    setShow(true);
  }






  //deleting video
  const handleRemoveVideo = async (id) => {

    try {
      const result = await deleteVideo(id)
      setDeleteResponse(result.data)
      console.log(result);


    }
    catch (err) {
      console.log(err);

    }

  }


  //Drag and Drop
  const dragStarted = (e, videoId) => {

    //to check whether we are getting video or not
    //we get this videoId from onDrop event
    console.log(`onDragStarted ${videoId}`);

    //the event is passed along with the id because to transfer
    //the videoId to the dropping event we have to access the dataTransfer object in event
    //and the object has a method setData(). In this method we pass the videoId to the dropping event
    //the data is assed has kind of key value where key is string  ("videoId",videoId)
    e.dataTransfer.setData("videoId", videoId)

  }


  return (
    <>
      {/* setting draggable={true} and onDragStart */}
      <Card style={{ height: "100%" }} draggable={true} onDragStart={(e) => dragStarted(e, displydata.id)}>
        <Card.Img variant="top" src={displydata?.Imgurl} style={{ height: "200px", cursor: "pointer" }} onClick={handleShow} />
        <Card.Body>
          <Card.Title>

            <Row>
              <Col>
                <h6>{displydata?.caption}</h6>
              </Col>
              <Col className=''>
              {
                !insidecategory &&
                <button className='btn' onClick={() => handleRemoveVideo(displydata?.id)}><i className='fa-solid fa-trash fs-5' style={{ color: '#eb1c05' }} /></button>

              }

              </Col>
            </Row>

          </Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>
      </Card>






      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{displydata?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>



          <iframe width="100%" height="720" src={`${displydata?.utubeurl}?autoplay=1`}
            title="Travis Scott - FE!N ft. Playboi Carti" frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


        </Modal.Body>
      </Modal>



    </>
  )
}

export default Videocard