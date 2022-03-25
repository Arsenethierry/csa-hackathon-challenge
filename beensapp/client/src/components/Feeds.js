import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Posts from './Posts/Posts';
import Form from './Form/Form';
import { getPosts } from '../actions/posts';
import { Col} from 'reactstrap';

const LeftSideBar=()=>{
  return(
      <div>
          <h1>left side bar</h1>
      </div>
  )
}

function Feeds() {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);
    return(
      <div className='container'>
            <div className='row'>
                <Col className='col-md-3 bg-left'><LeftSideBar/></Col>
                <Col className='col-12 col-md-6 bg-feeds'><Posts setCurrentId={setCurrentId} /></Col>
                <Col className='col-md-3 bg-right'><Form currentId={currentId} setCurrentId={setCurrentId} /></Col>   
            </div> 
        </div>
        
    );
}

export default Feeds