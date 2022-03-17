
import SearchBar from "../searchBar/searchBar";
import FetchedData from "../fetchedData/fetchedData";



const Dashboard = ({ searchKeyword, setSearchKeyword }) => {
 
  
  return (
    <div className="mainContainer">
      <SearchBar setSearchKeyword={setSearchKeyword} />
      <div className="dataContainer">
        <FetchedData searchKeyword={searchKeyword} />
      </div>
    </div>
  );
};

export default Dashboard;
