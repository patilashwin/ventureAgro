import React ,{useState} from 'react'
import {
  CAlert,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CLink,
  CProgress,
  CRow ,CModal,
  CModalBody,
  CModalFooter,CButton,
  CModalHeader,CModalTitle,CLabel,CInput,CFormGroup,CSelect,CInputFile
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const Orders = () => {
  const [visible, setVisible] = React.useState(10)
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)

  return (
    <>
                <CRow>
              <CCol xs="3" md="3" lg="12" style={{paddingBottom:'3%'}}>
              <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1">Add Order</CButton>
              <CModal 
                    show={warning} 
                    onClose={() => setWarning(!warning)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Order Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CLabel htmlFor="sr-no">Sr No</CLabel>
                        <CInput id="sr-no" type="number" placeholder=" Enter Sr No *" />
                      </CFormGroup>
                    <CFormGroup>
                        <CLabel htmlFor="sr-no">Order Date</CLabel>
                        <CInput type="date" id="date-input" name="date-input" placeholder="Date" />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="retailer">Retailer</CLabel>
                        <CInput id="retailer" type="text" placeholder=" Enter Retailer Name *" />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="ammount">Total Amount</CLabel>
                        <CInput id="ammonut" type="number" placeholder="Enter Total Amount *" />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="Details">Details</CLabel>
                        <CInput  type="text" id="Details" placeholder="Enter Details*" />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="status">Status</CLabel>
                        <CInput  type="text" id="status" placeholder="Enter Status *" />
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
                      <CModalTitle>Order Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CLabel htmlFor="sr-no">Sr No</CLabel>
                        <CInput id="sr-no" type="number" placeholder=" Enter Sr No *" />
                      </CFormGroup>
                    <CFormGroup>
                        <CLabel htmlFor="sr-no">Order Date</CLabel>
                        <CInput type="date" id="date-input" name="date-input" placeholder="Date" />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="retailer">Retailer</CLabel>
                        <CInput id="retailer" type="text" placeholder=" Enter Retailer Name *" />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="ammount">Total Amount</CLabel>
                        <CInput id="ammonut" type="number" placeholder="Enter Total Amount *" />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="Details">Details</CLabel>
                        <CInput  type="text" id="Details" placeholder="Enter Details*" />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="status">Status</CLabel>
                        <CInput  type="text" id="status" placeholder="Enter Status *" />
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
              <CCol xs="3" md="3" lg="12" >
              <CModal 
                    show={primary} 
                    onClose={() => setPrimary(!primary)}
                    color="primary"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Order Preview Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                      <CFormGroup>
                        <CInput id="retailer" type="text" placeholder=" Enter Retailer Name *" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="Phone" type="number" placeholder="Phone No. *" />
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
                        <th>Sr No</th>
                        <th>Date</th>
                        <th>Retailer</th>
                        <th>Total Amount</th>
                        <th>Details</th>
                        <th>Status</th>
                        <th>Order Preview</th>
                        <th>Delete </th>
                        <th>Update </th>
                   
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>XYZ</td>
                        <td>Datavesity</td>
                        <td>125876656</td>
                        <td>xyz@gmail.com</td>
                        <td>xyz@gmail.com</td>
                        <td><CButton  color="primary" onClick={() => setPrimary(!primary)} className="mr-1"> Order Preview</CButton></td>
                        <td><CButton block color="danger"  className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>XYZ</td>
                        <td>Datavesity</td>
                        <td>125876656</td>
                        <td>xyz@gmail.com</td>
                        <td>xyz@gmail.com</td>
                        <td><CButton  color="primary" onClick={() => setPrimary(!primary)} className="mr-1"> Order Preview</CButton></td>
                        <td><CButton block color="danger" className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>XYZ</td>
                        <td>Datavesity</td>
                        <td>125876656</td>
                        <td>xyz@gmail.com</td>
                        <td>xyz@gmail.com</td>
                        <td><CButton  color="primary" onClick={() => setPrimary(!primary)} className="mr-1"> Order Preview</CButton></td>
                        <td><CButton block color="danger"  className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      
                    </tbody>
                    
                  </table>
                  </div>
              </CCol>
              </CRow>













      {/* <CRow>
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader>
              Alerts
              <DocsLink name="CAlert"/>
            </CCardHeader>
            <CCardBody>
              <CAlert color="primary">
                This is a primary alert ??? check it out!
              </CAlert>
              <CAlert color="secondary">
                This is a secondary alert ??? check it out!
              </CAlert>
              <CAlert color="success">
                This is a success alert ??? check it out!
              </CAlert>
              <CAlert color="danger">
                This is a danger alert ??? check it out!
              </CAlert>
              <CAlert color="warning">
                This is a warning alert ??? check it out!
              </CAlert>
              <CAlert color="info">
                This is a info alert ??? check it out!
              </CAlert>
              <CAlert color="light">
                This is a light alert ??? check it out!
              </CAlert>
              <CAlert color="dark">
                This is a dark alert ??? check it out!
              </CAlert>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader>
              Alerts
              <small> use <code>.alert-link</code> to provide links</small>
            </CCardHeader>
            <CCardBody>
              <CAlert color="primary">
                This is a primary alert with&nbsp;
                <CLink className="alert-link">an example link</CLink>.
                Give it a click if you like.
              </CAlert>
              <CAlert color="secondary">
                This is a secondary alert with&nbsp;
                <CLink className="alert-link">an example link</CLink>.
                Give it a click if you like.
              </CAlert>
              <CAlert color="success">
                This is a success alert with&nbsp;
                <CLink className="alert-link">an example link</CLink>.
                Give it a click if you like.
              </CAlert>
              <CAlert color="danger">
                This is a danger alert with&nbsp;
                <CLink className="alert-link">an example link</CLink>.
                Give it a click if you like.
              </CAlert>
              <CAlert color="warning">
                This is a warning alert with&nbsp;
                <CLink className="alert-link">an example link</CLink>.
                Give it a click if you like.
              </CAlert>
              <CAlert color="info">
                This is a info alert with&nbsp;
                <CLink className="alert-link">an example link</CLink>.
                Give it a click if you like.
              </CAlert>
              <CAlert color="light">
          
                This is a light alert with&nbsp;
                <CLink className="alert-link">an example link</CLink>.
                Give it a click if you like.
              </CAlert>
              <CAlert color="dark">
                This is a dark alert with&nbsp;
                <CLink className="alert-link">an example link</CLink>.
                Give it a click if you like.
              </CAlert>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader>
              Alerts
              <small> additional content</small>
            </CCardHeader>
            <CCardBody>
              <CAlert color="success">
                <h4 className="alert-heading">Well done!</h4>
                <p>
                  Aww yeah, you successfully read this important alert message. This example text is going
                  to run a bit longer so that you can see how spacing within an alert works with this kind
                  of content.
                </p>
                <hr />
                <p className="mb-0">
                  Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                </p>
              </CAlert>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader>
              Alerts
              <small> dismissing</small>
            </CCardHeader>
            <CCardBody>
              <CAlert
                color="info"
                closeButton
              >
                I am an dismissible alert!
              </CAlert>
              <CAlert
                color="warning"
                show={visible}
                closeButton
                onShowChange={setVisible}
              >
                I will be closed in {visible} seconds!
                <CProgress
                  striped
                  color="warning"
                  value={Number(visible) * 10}
                  size="xs"
                  className="mb-3"
                />
              </CAlert>

              <CButton color="primary" onClick={() => setVisible(10)}>
                Reset timer
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow> */}
    </>
  )
}

export default Orders
