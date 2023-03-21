import React, { useContext, useEffect, useState } from 'react'
import { Button, Input } from 'react-chat-elements'
import { ContextObj } from '../../App';
import Config from '../Config';

function Search() {
  const {displayChats,setDisplayChats} = useContext(ContextObj)
  const [searchedTerm,setSearchedTerm] = useState("");
  const [searchResults,setSearchResults] = useState(displayChats);
  const [originalChats,setOriginalChats] = useState(Config.ChatSideBar.dataSource);

  function handleSearch(event){
    setSearchedTerm(event.target.value)
    console.log(event.target.value)
  }

  useEffect(() => {}, [displayChats]);

useEffect(() => {
  let id = setTimeout(() => {
    //searched records
    let filteredArr = originalChats?.filter((originalChats) => {
      let arrOfVals = Object.values(originalChats)?.map((val) =>
        val.toString().toLowerCase()
      );
      let lowerCaseSearch = searchedTerm.toLowerCase();
      return arrOfVals?.some((val) => val.includes(lowerCaseSearch));
    });
    console.log(filteredArr);
    // setLoading(false);
    setSearchResults(filteredArr);
    // setDisplayChats(filteredArr);
  }, 500);
  console.log(searchResults);

  return () => {
    // setLoading(true);
    clearTimeout(id);
  };

  // setLoading(false);
}, [searchedTerm]);

useEffect(() => {
  if (searchedTerm === "") setDisplayChats(originalChats);
  else setDisplayChats(searchResults);
}, [searchResults]);

  // useEffect(()=>{
  //   setDisplayChats(Config.ChatSideBar.dataSource)

  // },[displayChats])

  // useEffect(()=>{
  //   let id = setTimeout(()=>{
  //     let filteredArray = [],tempDisplayChats = displayChats;
  //     filteredArray = tempDisplayChats?.filter(obj => {
  //       let lower = (obj.title).toLowerCase()
  //       let lowerSearch = searchedTerm.toLowerCase();
  //       console.log("in timeout ",tempDisplayChats,lowerSearch)
  //       return (lower?.includes(lowerSearch))
  //     });
  //     // setLoading(false);
  //     // console.log(filteredArray.at(-1));
  //     setSearchResults(filteredArray);
  //     setDisplayChats(filteredArray);
  //     console.log("filteredArray",filteredArray);
  //   },500);
  //   return () => {
  //     console.log("ret: ",displayChats)
  //     // setLoading(true);
  //     clearTimeout(id)
  //   };
  //   // setLoading(false);
  //   console.log("searchedTerm ",searchedTerm)
  // },[searchedTerm])
  return (
    <>
      {/* <label for="search">Search Contacts</label> 
      search</button>
      */}
      <Input
        className='search'
        placeholder='Search...'
        defaultValue=''
        maxHeight={50}
        onChange={(e)=>handleSearch(e)}
      />
    </>
  )
}

export default Search