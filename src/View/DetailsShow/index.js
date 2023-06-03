import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function DetailsShow() {
  const [apidata, setApiData] = useState([])

  function getData() {
    axios.get("https://6406ceb877c1a905a0e3b7d3.mockapi.io/data")
      .then((val) => setApiData(val.data))
  }

  useEffect(
    () => {
      getData()
    }, [])


  return (
    <div className="  justify-content-center w-100">
     
      <div className="row p-5 px-5 pe-5">
        <div className="column-md-12 ">
          <table className="table table-bordered table-secondary caption-top">
            <thead >
              <tr>
                <th>Sr.no</th>
                <th>Name</th>
                <th>age</th>
                <th>email</th>
                <th>contact no.</th>
                <th>edit</th>
                <th>delete</th>

              </tr>
            </thead>
            <tbody>
              {
                apidata.map((item) => {
                  return (
                    <>
                      <tr>
                        <th>{item.id}</th>
                        <td>{item.e_name}</td>
                        <td>{item.e_age}</td>
                        <td>{item.e_email}</td>
                        <td>{item.e_contact}</td>
                        <td><button className="btn btn-dark mx-2 my-4" onClick={()=>{}} >Edit</button></td>
                        <td><button className="btn btn-danger mx-3 my-4"  onClick={()=>{}} >Delete</button></td>

                      </tr>

                    </>
                  )
                }
                )}

            </tbody>
          </table>




        </div>

      </div>

    </div>

  )
}
