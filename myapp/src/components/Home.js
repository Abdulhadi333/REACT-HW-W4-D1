import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Home() {
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }

// get the data from Create....
     const [data, setData] = useState([]);
     useEffect(() => {
       axios
         .get(`https://62d3e4085112e98e4846e3f0.mockapi.io/dataHW1`)
         .then((res) => {
           console.log(res.data);
           setData(res.data);
         })
         .catch((err) => {
           console.log(err);
         });
     }, []);


// Update data
const setUbdate = (e) => {
    let { id, firstName, lastName } = e;
    localStorage.setItem("id", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
  };
  const getData = () => {
    axios
      .get(`https://62d3e4085112e98e4846e3f0.mockapi.io/dataHW1`)
      .then((getData) => {
        setData(getData.data);
      });
  };

  //delete data 
  const onDelete = (id) => {
    axios
      .delete(`https://62d3e4085112e98e4846e3f0.mockapi.io/dataHW1/${id}`)
      .then(() => {
        getData();
      });
  };
   
    return (
        // get the data from Create....
        <div>
            <Container>
            <h1>Home Page</h1>
            <button className='btn btn-danger' onClick={handleClick}>Logout</button>
            </Container>
        <div className="homepage">

            
            <ul>
        {data.map((e) => (
          <div >
            <ul>
            <li className="listofNames">{e.firstName} {e.lastName}</li>
            <Link to="/Update">
              <button className='btn btn-success' onClick={setUbdate(e)}>Ubdate</button>
            </Link>
            <button className='btn btn-danger' onClick={() => {onDelete(e.id);}}>X.Delete</button>
            </ul>

            



          </div>
        ))}
       
      </ul>


            
        </div></div>
    )
}
export default Home;