import React, { useState }from 'react'

import {
  CCardGroup,
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,CModalTitle,CLabel,CInput,CFormGroup,CInputRadio
} from '@coreui/react'


const Retailer = () => {

  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)

 
  return (

    <>

            <CRow>
              <CCol xs="3" md="3" lg="12" style={{paddingBottom:'3%'}}>
              <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1">Retailer List</CButton>
                <CModal 
                    show={warning} 
                    onClose={() => setWarning(!warning)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Retailer List Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CLabel htmlFor="Shop Number"> Retailer Number</CLabel>
                        <CInput id="name" type="number" placeholder="Enter Retailer Number *"  required/>
                      </CFormGroup>
                    <CFormGroup>
                        <CLabel htmlFor="Shop Name"> Retailer Name</CLabel>
                        <CInput id="name" type="text" placeholder="Enter Retailer Name *"  required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="Phone">Phone No</CLabel>
                        <CInput id="Phone" type="number" placeholder="Enter Phone No *" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="email">Email</CLabel>
                        <CInput  type="email" id="email" placeholder="Enter Retailer Email *" required />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="Address">Address of Retailer</CLabel>
                        <CInput  type="text" id="Address" placeholder="Enter Address of Retailer*" required />
                      </CFormGroup>
                    </CModalBody>
                    <CModalFooter>
                      <CButton color="primary" >
                        Submit
                      </CButton>{' '}
                      <CButton color="secondary" >
                        Cancel
                      </CButton>
                    </CModalFooter>
                  </CModal>
              </CCol>
            </CRow>
            
            <CRow>
              <CCol xs="3" md="3" lg="12" >
                <CModal 
                    show={success} 
                    onClose={() => setSuccess(!success)}
                    color="success"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Update Retailer List Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CLabel htmlFor="Shop Number"> Retailer Number</CLabel>
                        <CInput id="name" type="number" placeholder="Enter Retailer Number *"  required/>
                      </CFormGroup>
                    <CFormGroup>
                        <CLabel htmlFor="Shop Name"> Retailer Name</CLabel>
                        <CInput id="name" type="text" placeholder="Enter Retailer Name *"  required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="Phone">Phone No</CLabel>
                        <CInput id="Phone" type="number" placeholder="Enter Phone No *" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="email">Email</CLabel>
                        <CInput  type="email" id="email" placeholder="Enter Retailer Email *" required />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="Address">Address of Retailer</CLabel>
                        <CInput  type="text" id="Address" placeholder="Enter Address of Retailer*" required />
                      </CFormGroup>
                    </CModalBody>
                    <CModalFooter>
                      <CButton color="primary" >
                        Submit
                      </CButton>{' '}
                      <CButton color="secondary" >
                        Cancel
                      </CButton>
                    </CModalFooter>
                  </CModal>
              </CCol>
            </CRow>


            <CRow>
              <CCol xs="12" lg="12">
              <div class="col-12 col-12 table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>Retailer Number</th>
                        <th>Retailer Name</th>
                        <th>Phone No</th>
                        <th>E-Mail </th>
                        <th>Address Of Retailer</th>
                        <th>Delete </th>
                        <th>Update </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>PQR</td>
                        <td>995585822</td>
                        <td>abc@gmail.com</td>
                        <td>Pune</td>
                        <td><CButton block color="danger" className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      
                      <tr>
                      <th scope="row">2</th>
                        <td>PQR</td>
                        <td>995585822</td>
                        <td>abc@gmail.com</td>
                        <td>Pune</td>
                        <td><CButton block color="danger" className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      <tr>
                      <th scope="row">3</th>
                        <td>PQR</td>
                        <td>995585822</td>
                        <td>abc@gmail.com</td>
                        <td>Pune</td>
                        <td><CButton block color="danger" className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                    </tbody>
                    
                  </table>
                  </div>
              </CCol>
              </CRow>
     
    
  </>
  )
}

export default Retailer;
