import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,CDropdown,CDropdownToggle,CDropdownMenu,CDropdownItem,CDropdownDivider,CFormGroup,CLabel,CInput
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const Charts = () => {


 
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const [danger, setDanger] = useState(false)
  const [info, setInfo] = useState(false)

  return (
  <>
        
        <CRow>
              <CCol xs="3" md="3" lg="12" style={{paddingBottom:'3%'}}>
              <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1">Complain</CButton>
              <CModal 
                    show={warning} 
                    onClose={() => setWarning(!warning)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Complain Details</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                      <CFormGroup>
                         <CLabel htmlFor="shop_ownername">Shop Owner Name</CLabel>
                        <CInput id="shop_name" type="text" placeholder="Enter Name " />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="shop_name">Shop Name</CLabel>
                        <CInput id="shop_name" type="text" placeholder="Enter Name " />
                      </CFormGroup>
                      <CFormGroup>
                         <CLabel htmlFor="Comment">Comment</CLabel>
                        <CInput id="Comment" type="text" placeholder="Type Here"/>
                      </CFormGroup>
                    </CModalBody>
                    <CModalFooter>
                      <CButton color="warning" >
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
                      <CModalTitle>Product Details</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                      <CFormGroup>
                         <CLabel htmlFor="shop_ownername">Shop Owner Name</CLabel>
                        <CInput id="shop_name" type="text" placeholder="Enter Name " />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="shop_name">Shop Name</CLabel>
                        <CInput id="shop_name" type="text" placeholder="Enter Name " />
                      </CFormGroup>
                      <CFormGroup>
                         <CLabel htmlFor="Comment">Comment</CLabel>
                        <CInput id="Comment" type="text" placeholder="Type Here"/>
                      </CFormGroup>
                    </CModalBody>
                    <CModalFooter>
                      <CButton color="success" >
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
                        <th>#</th>
                        <th>Shop Owner Name</th>
                        <th>Shop Name</th>
                        <th>Comment</th>
                        <th>Delete Button</th>
                        <th>Update Button</th>
                   
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>XYZ</td>
                        <td>Famous Pune</td>
                        <td>Good</td>
                        <td><CButton block color="danger" style={{width:'50%'}}  className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>XYZ</td>
                        <td>Famous Pune</td>
                        <td>Good</td>
                        <td><CButton block color="danger" style={{width:'50%'}}  className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>XYZ</td>
                        <td>Famous Pune</td>
                        <td>Good</td>
                        <td><CButton block color="danger" style={{width:'50%'}}  className="delbtn">Delete</CButton></td>
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

export default Charts
