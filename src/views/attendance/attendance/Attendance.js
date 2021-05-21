import React, { useState } from 'react'
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader,CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,CModalTitle,CLabel,CInput,CFormGroup,CInputRadio,CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const Attendance = () => {
  const [active, setActive] = useState(1)
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
 
 
  return (

    <>
   
            <CRow>
              <CCol xs="3" md="3" lg="12" style={{paddingBottom:'3%'}}>
              <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1">Apply Leave</CButton>
                <CModal 
                    show={warning} 
                    onClose={() => setWarning(!warning)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Attendance Fragment</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                    <CInput type="date" id="date-input" name="date-input" placeholder="Date of Birth" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="reason" type="text" placeholder="Reason" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput  type="text" id="reporting" placeholder="Reporting Manager" />
                      </CFormGroup>
                      <CFormGroup row>
                      <CCol xs="12" md="12" size="lg">
                        <CSelect custom size="lg" name="selectLg" id="selectLg">
                          <option value="0">Select Reoprting Manager</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol xs="12" md="12" size="lg">
                        <CSelect custom size="lg" name="selectLg" id="selectLg">
                          <option value="0">Select Leave</option>
                          <option value="1">Paid Leave</option>
                          <option value="2">Sick Leave</option>
                          <option value="3">Casual Leave</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup>
                        <CInput  type="text" id="typeleave" placeholder="Type Of Leave" />
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
              <CCol xs="3" md="3" lg="12" style={{}}>
              <CModal 
                    show={success} 
                    onClose={() => setSuccess(!success)}
                    color="success"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle> Update Attendance Fragment</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                    <CInput type="date" id="date-input" name="date-input" placeholder="Date of Birth" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="reason" type="text" placeholder="Reason" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput  type="text" id="reporting" placeholder="Reporting Manager" />
                      </CFormGroup>
                      <CFormGroup row>
                      <CCol xs="12" md="12" size="lg">
                        <CSelect custom size="lg" name="selectLg" id="selectLg">
                          <option value="0">Select Reoprting Manager</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol xs="12" md="12" size="lg">
                        <CSelect custom size="lg" name="selectLg" id="selectLg">
                          <option value="0">Select Leave</option>
                          <option value="1">Paid Leave</option>
                          <option value="2">Sick Leave</option>
                          <option value="3">Casual Leave</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup>
                        <CInput  type="text" id="typeleave" placeholder="Type Of Leave" />
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
                        <th>#</th>
                        <th>Date</th>
                        <th>Reason</th>
                        <th>Reoprting Manager</th>
                        <th>Select Report Manager</th>
                        <th>Select Leave</th>
                        <th>Type of Leave</th>
                        <th>Delete Button</th>
                        <th>Update Button</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>12-12-2021</td>
                        <td>Feel not well </td>
                        <td>DS</td>
                        <td>DS</td>
                        <td>Sick</td>
                        <td>Sick</td>
                        <td><CButton block color="danger" className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      
                      <tr>
                        <th scope="row">1</th>
                        <td>12-12-2021</td>
                        <td>Feel not well </td>
                        <td>DS</td>
                        <td>DS</td>
                        <td>Sick</td>
                        <td>Sick</td>
                        <td><CButton block color="danger"  className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>12-12-2021</td>
                        <td>Feel not well </td>
                        <td>DS</td>
                        <td>DS</td>
                        <td>Sick</td>
                        <td>Sick</td>
                        <td><CButton block color="danger"  className="delbtn">Delete</CButton></td>
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

export default Attendance
