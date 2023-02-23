import React from 'react'
import { useNavigate } from "react-router-dom"


export default function SideBar() {
    const show = useNavigate()
    const home = useNavigate()
    return (
        <div className=" justify-content-end p-2">

            <button className='btn  px-5 justify-content-center me-4 btn-dark d-flex d-grid w-100 my-3' onClick={() => { show("/Show") }} >Click to Show </button>




            <button className="btn  px-5  justify-content-center btn-dark d-flex d-grid w-100 my-3" onClick={() => home("/")}>Add </button>


        </div>
    )
}
