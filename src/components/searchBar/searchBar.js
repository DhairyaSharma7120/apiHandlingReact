import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./searchBar.css";

export default function SearchBar({setSearchKeyword}) {
 
  return (
    <div className="searchContainer">
      <div className="searchBar">
        <input type="text" onChange={(e)=>setSearchKeyword(e.target.value)}/>
        <SearchIcon />
      </div>
    </div>
  );
}
