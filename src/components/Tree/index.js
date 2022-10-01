import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./style.css";
import {FaFolder} from "react-icons/fa";
import Axios from 'axios'

const Tree = (props) => {

  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {props.data && props.data.map((tree) => (
          <TreeNode node={tree} changeData={props.changeData}/>
        ))}
      </ul>
    </div>
  );
};

const TreeNode = (props) => {
  console.log("Tree",props)
  const [childVisible, setChildVisiblity] = useState(false);
  const [folder, setFolder] = useState('test1');
  const [file, setFile] = useState('');

  const hasChild = props.node.children ? true : false;

  const python_server = 'http://localhost:5000'

  const handleFolder = (e) => {
    e.stopPropagation();
    e.preventDefault();
    let foldername = e.target.innerText
    
    console.log("Response",foldername)
    if(foldername) {

    
    if(foldername.indexOf('.svs') != -1)
    {
      document.getElementById('loader').style.display = 'block'
      Axios.get(python_server + '/test?folder_name='+folder+'&file_name='+foldername)
      .then(response => {
        console.log("Response",response.data)
        props.changeData(response.data)
        document.getElementById('loader').style.display = 'none'
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
  }


  return (
    <li className="d-tree-node border-0">
      <div className="d-flex" onClick={(e) => {
        setChildVisiblity((v) => !v);
        handleFolder(e)
      }
        }>
        {hasChild && (
          <div
            className={`d-inline d-tree-toggler ${
              childVisible ? "active" : ""
            }`}
            
          >
            <FontAwesomeIcon icon="caret-right" />
          </div>
        )}

        <div  className="col d-tree-head" >
          <i><FaFolder /></i>
           {props.node.label}
        </div>
      </div>

      {hasChild && childVisible && (
        <div  className="d-tree-content">
          <ul className="d-flex d-tree-container flex-column">
            {props.node.children &&
            <Tree data={props.node.children} changeData = {props.changeData}/>}
          </ul>
        </div>
      )}
    </li>
  );
};

export default Tree;