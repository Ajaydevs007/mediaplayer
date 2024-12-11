import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideo } from '../Services/allAPI';
import { toast } from 'react-toastify';


//setaddVideoResponse statelifting to view.jsx to reload page when new video is added
function Add({ setaddVideoResponse }) {


  const [show, setShow] = useState(false);


  //this state is used to notify invalid utubeurl
  const [wronguturl, Setwronguturl] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //to store the details of newly  added videos recivied from input modal

  const [videoDetails, setVideoDetails] = useState({ caption: "", Imgurl: "", utubeurl: "" })
  console.log(videoDetails);



  //this function is used to convert utube url into embbed url
  const getembeddedurl = (link) => {

    if (link.includes("v=")) {
      let url = link.split("v=")[1].slice(0, 11)
      setVideoDetails({ ...videoDetails, utubeurl: `https://www.youtube.com/embed/${url}` })
      console.log(videoDetails);
      Setwronguturl(false)
    }
    else {

      setVideoDetails({ ...videoDetails, utubeurl: "" })
      Setwronguturl(true)

    }

  }



  //api call to upload videoDetails
  const handleUpload = async () => {

    const { caption, utubeurl, Imgurl } = videoDetails
    if (caption && utubeurl && Imgurl) {

      try {

        //API call for adding video details into json-server
        const result = await addVideo(videoDetails)

        console.log(result);

        //state Lifting
        setaddVideoResponse(result.data)

        // toast video added successfully

        toast.success(`${result.data.caption} is added to your collection`)

        setVideoDetails({ caption: "", Imgurl: "", utubeurl: "" })

        //close model when data successfuly added
        handleClose()

      }
      catch (err) {

        console.log(err);

      }


    }
    else {
      toast.warning("Please Enter the Field Completely")
    }



  }




  return (
    <>
      <div>
        <h5 onClick={handleShow} style={{ cursor: "pointer" }}>
          <i className="fa-solid fa-circle-arrow-up fs-4" style={{ color: "#74C0FC", }} />
          &nbsp;
          Add New Video</h5>
      </div>


      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className=''>

            {/* caption */}

            <FloatingLabel controlId="floatingInput" label="Enter Caption" className="mb-3">
              <Form.Control onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="" />
            </FloatingLabel>


            {/* imageurl */}

            <FloatingLabel controlId="floatingPassword" label="Enter Image URL">
              <Form.Control onChange={(e) => setVideoDetails({ ...videoDetails, Imgurl: e.target.value })} type="url" placeholder="" />
            </FloatingLabel>


            {/* youtubeurl */}


            <FloatingLabel controlId="floatingPassword" label="Enter YouTube URL" className='my-3'>
              <Form.Control onChange={(e) => getembeddedurl(e.target.value)} type="url" placeholder="" />
            </FloatingLabel>
            {
              wronguturl &&
              <div className='text-danger fw-bolder'>
                <p>Invalid YouTube Url</p>
              </div>

            }

          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>





    </>
  )
}

export default Add