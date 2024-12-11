import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../Services/allAPI'




function History() {

  useEffect(() => {
    getHistory()

  
  }, [])


  //to store getting watchhistory details
  const [videoHistory, setvideoHistory] = useState([])


  


  const getHistory = async () => {
    try {
      const result = await getAllHistory()
      console.log(result.data);
      setvideoHistory(result.data)

    }
    catch (err) {
      console.log(err);

    }
  }


  // api call delete history
  const handleHistory=async(id)=>{

    try{

    const result=  await deleteHistory(id)
    console.log(result);
    getHistory()
    
    

    }
    catch(err){
      console.log(err);
      
    }

  }


  return (
    <>
      <div className='d-flex justify-content-between'>
        <h4></h4>
        <h4 className='p-5'><Link to={'/home'} style={{ textDecoration: 'none', color: "white" }} >Back to <i className="fa-solid fa-house" style={{ color: "#74C0FC", }} /></Link></h4>
      </div>


      <div class="table-responsive container-fluid p-5 mb-5">
        <table className='table table border table-striped table-hover text-center'>
          <thead class="table-light">
            <tr>
              <th>ID</th>
              <th>Caption</th>
              <th>Url</th>
              <th>Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              videoHistory.length > 0 ?
                videoHistory.map((item,index) => (

                  <tr key={item?.id}>
                    <td>{index+1}</td>
                    <td>{item?.caption}</td>
                    <td>
                      <Link to={item?.utubeurl}>
                        {item?.utubeurl}
                      </Link>
                    </td>
                    <td>{item.formattedTime}</td>
                    <td>
                      <button className='btn' onClick={()=>handleHistory(item?.id)}>
                        <i className='fa-solid fa-trash fs-5' style={{ color: '#eb1c05' }} />
                      </button>
                    </td>
                  </tr>

                ))
                :
                <div className='text-danger fw-bolder fs-3'>No Watch History to Disply</div>
            }

          </tbody>
        </table>
      </div>


    </>
  )
}

export default History 