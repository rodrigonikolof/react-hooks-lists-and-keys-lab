import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let count = 0;
const mappedLinks = links.map((el,index)=>{
  
  return (
    <a href={"#"+el} key={count++}>{el}</a>
  )
})

  return <nav>{mappedLinks}</nav>;
}

export default NavBar;
