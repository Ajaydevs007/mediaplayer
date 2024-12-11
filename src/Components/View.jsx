import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Videocard from './Videocard'
import { addVideo, getAllVideos, getSinglecategory, updateCategory } from '../Services/allAPI'





//addVideoResponse to add in dependency to refresh page when new video is added
//addcatdropResponse used to refresh when video dropped in category and deleted from all videos

function View({ addVideoResponse, addcatdropResponse,setdeletevideofromviewResponse }) {

  //state lift to refresh after deletevideo
  const [DeleteResponse, setDeleteResponse] = useState("")


  useEffect(() => {

    getAllVideo()

    //addVideoResponse to add in dependency to refresh page when new video is added
    //DeleteResponse delete video statelift and refresh dependency
  }, [addVideoResponse, DeleteResponse, addcatdropResponse])


  // To store Getting video detalis
  const [AllVideos, setAllVideos] = useState([])






  // created a funtion coz in useEffect async and await cannot be used and calling newly created funtion in useEffect
  const getAllVideo = async () => {
    const result = await getAllVideos()
    // console.log(result);

    // checkng status before storing videos details in state
    if (result.status >= 200 && result.status <= 300) {
      setAllVideos(result.data)
      // console.log(AllVideos);


    }
  }


  const dragOverView = (e) => {

    e.preventDefault()

  }

  const handleCategoryvideo = async (e) => {

    const { videoDetails, categoryId } = JSON.parse(e.dataTransfer.getData("shareData"))
    console.log(videoDetails, categoryId);

    try {

     const {data}= await getSinglecategory(categoryId)
     console.log(data);


     const selectedCategoryVideoList=data.allVideos.filter(video =>video.id!=videoDetails.id)
     console.log(selectedCategoryVideoList);

     const {id,categoryName}=data

     const categoryResult=await updateCategory(categoryId,{id,categoryName,allVideos:selectedCategoryVideoList})
     setdeletevideofromviewResponse(categoryResult.data)

     await addVideo(videoDetails)
     getAllVideo()
     
     

    }
    catch (err) {
      console.log(err);

    }


  }


  return (
    <>
      <div>
        <h4 className='my-5'>All videos</h4>
      </div>

      <Row className='border p-3' droppble={true} onDragOver={(e) => dragOverView(e)} onDrop={(e) => handleCategoryvideo(e)}>
        {

          // iterating videocard depending on data in state

          AllVideos.length > 0 ?

            AllVideos?.map(videos => (

              <Col key={videos?.id} sm={12} md={6} lg={4} className='mb-3'>
                <Videocard displydata={videos} setDeleteResponse={setDeleteResponse} />
              </Col>

            ))

            :
            <div className='text-danger fw-bolder fs-3'>Nothing to disply</div>
        }




      </Row>
    </>
  )
}

export default View