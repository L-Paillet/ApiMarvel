import React, { useState } from 'react';
import '../css/Card.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Marvel(props) {
  // console.log(props.onHide);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      onHide={props.onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>

    
  );
}

function Card({ data }) {
  const [modalShow, setModalShow] = useState(false);


  return (
      <div className='cardContainer'>
          {
            ((data && data.length)) ? (
          data.map(item => {
                    return (
                    <ul className='cards'>
                        <li className='oneCard' key={item.id}
                          onClick={() => setModalShow(true)}>
                          {console.log(modalShow)}
                          <Marvel  show={modalShow}
                            onHide={() => setModalShow(false)}/>

                
                            <div className='firstHalf'>
                                <img className='imgCard' alt='' src={`${item.thumbnail.path}.${item.thumbnail.extension}`}></img>
                            </div>
                
                            <div className='secondHalf'>
                                <div className='titleCard'>
                                    <h3>{item.name}</h3>
                                </div>
                                <div>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </li>
                      </ul>
                    )
                })
            ):""
          }
          
    </div>
  )
}

export default Card;
