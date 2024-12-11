import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategory, getAllCategory, deleteCategory, getSingleVideo, updateCategory, deleteVideo } from '../Services/allAPI';
import { toast, ToastContainer } from 'react-toastify';
import { Col, Row } from 'react-bootstrap';
import Videocard from './Videocard';










//setaddcatdropResponse used to refresh when video dropped in category and deleted from all videos


function Category({setaddcatdropResponse,deletevideofromviewResponse}) {

  useEffect(() => {
    getCategory()
  }, [deletevideofromviewResponse])


  const [show, setShow] = useState(false);

  //to store new categoryname and the post
  //state name will be key like "categoryName":"songs"
  const [categoryName, setcategoryName] = useState("")
  // console.log(categoryName);


  const [allCategory, setallCategory] = useState([])
  
  


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // api call to add new categoryName
  const handleAddCategory = async () => {

    if (categoryName) {
      try {

        //allVideos:[] is added to store vidos details in each category 
        const result = await addCategory({ categoryName, allVideos: [] })
        console.log(result);
        toast.success(`${result.data.categoryName} is added to categorylist `)
        setcategoryName("")
        handleClose()
        getCategory()

      }
      catch (err) {
        console.log(err);

      }
    }
    else {
      toast.warning("Enter category name")
    }

  }


  //api call to GET all category

  const getCategory = async () => {

    try {
      const result = await getAllCategory()
      // console.log(result);

      setallCategory(result.data)
      console.log(allCategory);

    }
    catch (err) {
      console.log(err);
    }

  }


  //api call to delete category

  const delCategory = async (id) => {
    try {
      await deleteCategory(id)
      getCategory()

    }
    catch (err) {
      console.log(err);

    }
  }

  //Drag and Drop

  const videoDropped = async (e, categoryId) => {

    //checking whether we are getting category id or not
    console.log(`video dropped category ID ${categoryId}`);

    //by accessing the event of onDrop we get the videoId passed through event onDrag
    //pass the key of video id passed

    const videoId = e.dataTransfer.getData("videoId")

    console.log(`Drag started with video ID ${videoId} and dropped in category id ${categoryId}`);

    // using the videoId we have fetched the particular video details we are dropping
    // now we have to update it the allvidos[] of category 
    const { data } = await getSingleVideo(videoId)
    console.log(data);


    //we have used "PUT" so have to update full details
    //as we already have videodetails in data now we want category id and name
    //we have previsouly atored it in state for mapping so we can also use that state here
    //we to find that particular category list so we use find method with the help of category id
    const selectedCategory = allCategory.find((item) => item.id == categoryId)

    // pushed the data to the allvideos[]
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);



    // api calling for updating 

    await updateCategory(categoryId, selectedCategory)

    getCategory()

    //to delete video from allvideo(json) when dropped in category
   const result= await deleteVideo(videoId)
   setaddcatdropResponse(result.data)
   

  }


  const dragoverStart = (e) => {
    e.preventDefault()
  }

  const dragoverStarted = (e) => {
    e.preventDefault()

  }

  // drag and drop to All Videos 
  const dragstarted=(e,videoDetails,categoryId)=>{

    const shareData={videoDetails,categoryId}
    console.log(shareData);

    e.dataTransfer.setData("shareData",JSON.stringify(shareData))
    
  }


  return (
    <>

      <div className='d-flex justify-content-around my-5' >
        <h5 style={{ cursor: 'pointer' }}>All Category

        </h5>
        <i className="fa-solid fa-circle-plus fs-4" style={{ color: "#74C0FC", cursor: 'pointer' }} onClick={handleShow} />
      </div>

      <div className='container-fluid'>

      
        

        {
          allCategory.length > 0 ?

          
          

            allCategory.map(item => (

              
              
              

              // setting dropple={true} to make droppable possble

              //while dropping an to an element an event occurs that is onDrop
              //pass the event and also the category id of the category to which we are dropping

              //onDragover is another that is running b/w onDrag and onDrop
              //which actually refreshing onDrop and we cant console categoryid
              //so we have prevent this event ,bind this event in dropping element and
              //pass the event then e.preventDefault

              <div className='border border-3 border-light mb-3  p-3' droppable={true} onDrop={(e) => videoDropped(e, item.id)} onDragOver={(e) => dragoverStart(e)}>
                <div className='d-flex justify-content-between'>
                  <h6>{item?.categoryName}</h6>
                  <button className='btn' onClick={() => delCategory(item?.id)}><i className='fa-solid fa-trash fs-5' style={{ color: '#eb1c05' }} /></button>
                </div>
                <div className='mt-3'>
                  <Row>

                    {
                     item.allVideos.length > 0 &&

                      item.allVideos.map(video => (

                        <Col md={6} className='mb-2' draggable={true} droppable={true} onDragStart={(e)=>dragstarted(e,video,item.id)} onDragOver={(e)=>dragoverStarted(e)}>
                          
                          <Videocard displydata={video} insidecategory={true}/>
                        
                        </Col>

                      ))
                    }

                  </Row>
                </div>

              </div>

            ))

            :

            <div>No Favourites found</div>

        }

      </div>


      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <FloatingLabel controlId="floatingcat" label="Enter category name">
            <Form.Control type="text" placeholder="" onChange={(e) => setcategoryName(e.target.value)} />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>



      <ToastContainer position="top-right" autoClose={3000} theme="dark" />





    </>
  )
}

export default Category