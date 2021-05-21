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


const Shop = () => {

  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)

 
  return (

    <>

            <CRow>
              <CCol xs="3" md="3" lg="12" style={{paddingBottom:'3%'}}>
              <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1">Shop List</CButton>
                <CModal 
                    show={warning} 
                    onClose={() => setWarning(!warning)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Shop List Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CLabel htmlFor="Shop Number"> Shop Number</CLabel>
                        <CInput id="name" type="number" placeholder="Enter Shop Number *"  required/>
                      </CFormGroup>
                    <CFormGroup>
                        <CLabel htmlFor="Shop Name"> Shop Name</CLabel>
                        <CInput id="name" type="text" placeholder="Enter Shop Name *"  required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="Phone">Phone No</CLabel>
                        <CInput id="Phone" type="number" placeholder="Enter Phone No *" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="email">Email</CLabel>
                        <CInput  type="email" id="email" placeholder="Enter your Email *" required />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="Address">Address of Shop</CLabel>
                        <CInput  type="text" id="Address" placeholder="Enter Address of Shop*" required />
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
                      <CModalTitle>Shop List Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CLabel htmlFor="Shop Number"> Shop Number</CLabel>
                        <CInput id="name" type="number" placeholder="Enter Shop Number *"  required/>
                      </CFormGroup>
                    <CFormGroup>
                        <CLabel htmlFor="Shop Name"> Shop Name</CLabel>
                        <CInput id="name" type="text" placeholder="Enter Shop Name *"  required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="Phone">Phone No</CLabel>
                        <CInput id="Phone" type="number" placeholder="Enter Phone No *" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="email">Email</CLabel>
                        <CInput  type="email" id="email" placeholder="Enter your Email *" required />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="Address">Address of Shop</CLabel>
                        <CInput  type="text" id="Address" placeholder="Enter Address of Shop*" required />
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
                        <th>Shop Number</th>
                        <th>Shop Name</th>
                        <th>Phone No</th>
                        <th>E-Mail </th>
                        <th>Address Of Shop</th>
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

export default Shop;
