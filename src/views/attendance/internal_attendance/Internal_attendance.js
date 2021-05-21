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

const Internal_attendance = () => {
  const [active, setActive] = useState(1)
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
 
 
  return (

    <>
   
            <CRow>
              <CCol xs="3" md="3" lg="12" style={{paddingBottom:'3%'}}>
              <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1">Internal Attendance</CButton>
                <CModal 
                    show={warning} 
                    onClose={() => setWarning(!warning)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Internal Attendance Fragment</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                      <CLabel htmlFor="Date">Date</CLabel>
                      <CInput type="date" id="date-input" name="date-input" placeholder="Type Here*" />
                    </CFormGroup>
                    <CFormGroup>
                    <CLabel htmlFor="Time">Time</CLabel>
                      <CInput type="time" id="time-input" name="time-input" placeholder="Type Here*" />
                    </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="Name">Name</CLabel>
                        <CInput id="Name" type="text" placeholder="Type Here*" />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="Designation">Designation</CLabel>
                        <CInput  type="text" id="Designation" placeholder="Type Here *" />
                      </CFormGroup>
                      <CFormGroup>
                      <CLabel htmlFor="Department">Department</CLabel>
                        <CInput  type="text" id="Department" placeholder="Type Here *" />
                      </CFormGroup>
                      <CFormGroup>
                      <CLabel htmlFor="DaDOJte">DOJ</CLabel>
                      <CInput type="date" id="date-input" name="date-input" placeholder="Type Here*" />
                      </CFormGroup>
                      <CFormGroup row>
                      <CCol xs="12" md="12" size="lg">
                        <CSelect custom size="lg" name="selectLg" id="selectLg">
                          <option value="0">Present</option>
                          <option value="1">Half Day</option>
                          <option value="2">Sick Leave</option>
                          <option value="3">Paid Leave</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup >
                      <CInput  type="text" id="Absent" placeholder="Absent *" />
                    </CFormGroup>
                    <CFormGroup>
                        <CInput  type="text" id="Termination" placeholder="Termination *" />
                    </CFormGroup>
                    <CFormGroup>
                        <CInput  type="text" id="LWP" placeholder="LWP *" />
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
                      <CLabel htmlFor="Date">Date</CLabel>
                      <CInput type="date" id="date-input" name="date-input" placeholder="Type Here*" />
                    </CFormGroup>
                    <CFormGroup>
                    <CLabel htmlFor="Time">Time</CLabel>
                      <CInput type="time" id="time-input" name="time-input" placeholder="Type Here*" />
                    </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="Name">Name</CLabel>
                        <CInput id="Name" type="text" placeholder="Type Here*" />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="Designation">Designation</CLabel>
                        <CInput  type="text" id="Designation" placeholder="Type Here *" />
                      </CFormGroup>
                      <CFormGroup>
                      <CLabel htmlFor="Department">Department</CLabel>
                        <CInput  type="text" id="Department" placeholder="Type Here *" />
                      </CFormGroup>
                      <CFormGroup>
                      <CLabel htmlFor="DaDOJte">DOJ</CLabel>
                      <CInput type="date" id="date-input" name="date-input" placeholder="Type Here*" />
                      </CFormGroup>
                      <CFormGroup row>
                      <CCol xs="12" md="12" size="lg">
                        <CSelect custom size="lg" name="selectLg" id="selectLg">
                          <option value="0">Present</option>
                          <option value="1">Half Day</option>
                          <option value="2">Sick Leave</option>
                          <option value="3">Paid Leave</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup >
                      <CInput  type="text" id="Absent" placeholder="Absent *" />
                    </CFormGroup>
                    <CFormGroup>
                        <CInput  type="text" id="Termination" placeholder="Termination *" />
                    </CFormGroup>
                    <CFormGroup>
                        <CInput  type="text" id="LWP" placeholder="LWP *" />
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
                        <th>Time</th>
                        <th>Name </th>
                        <th>Designation</th>
                        <th>Department</th>
                        <th>DOJ</th>
                        <th>Present</th>
                        <th>Absent</th>
                        <th>Termination</th>
                        <th>LWP</th>
                        <th>Delete </th>
                        <th>Update </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>12-12-2021</td>
                        <td>12:06 </td>
                        <td>DS</td>
                        <td>Manager</td>
                        <td>IT</td>
                        <td>12-02-2021</td>
                        <td>yes</td>
                        <td>No</td>
                        <td>yes</td>
                        <td>No</td>
                        <td><CButton block color="danger" className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      
                      <tr>
                        <th scope="row">2</th>
                        <td>12-12-2021</td>
                        <td>12:06 </td>
                        <td>DS</td>
                        <td>Manager</td>
                        <td>IT</td>
                        <td>12-02-2021</td>
                        <td>yes</td>
                        <td>No</td>
                        <td>yes</td>
                        <td>No</td>
                        <td><CButton block color="danger" className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>12-12-2021</td>
                        <td>12:06 </td>
                        <td>DS</td>
                        <td>Manager</td>
                        <td>IT</td>
                        <td>12-02-2021</td>
                        <td>yes</td>
                        <td>No</td>
                        <td>yes</td>
                        <td>No</td>
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

export default Internal_attendance
