import React from 'react'
import { useNavigate } from "react-router-dom"
import CustomButton from '../../components/atoms/button'


export default function SideBar() {
    const show = useNavigate()
    const home = useNavigate()
    const handleShow=()=>{
        show("/Show")
    }
    const handleAdd=()=>{
        home("/")
    }
    return (
        <>
        <CustomButton handleSubmit={handleShow} buttonText={"Show"}/>
        <CustomButton handleSubmit={handleAdd} buttonText={"Add"}/>
         </>
    )
}
