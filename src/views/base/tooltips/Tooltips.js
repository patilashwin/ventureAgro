import React,{useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CTooltip,
  CRow,
  CCol,
  CLink,CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,CModalTitle,CLabel,CInput,CFormGroup,CSelect,CInputFile
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const Tooltips = () => {
  const placements = [
    'top-start', 'top', 'top-end',
    'bottom-start', 'bottom', 'bottom-end',
    'right-start', 'right', 'right-end',
    'left-start', 'left', 'left-end'
  ]
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  return (
    <>


            <CRow>
              <CCol xs="3" md="3" lg="12" style={{paddingBottom:'3%'}}>
              <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1"> NEW COLLECTION</CButton>
                <CModal 
                    show={warning} 
                    onClose={() => setWarning(!warning)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>New Collection</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                    <CInput id="retailer" type="text" placeholder="Name Of retailer" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="ammount" type="number" placeholder="Ammount" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput  type="text" id="mode" placeholder="Mode" />
                      </CFormGroup>
                      <CFormGroup>
                        <CCol  xs="12" md="12" size="lg" >
                          <CInputFile 
                            id="file-multiple-input" 
                            name="file-multiple-input" 
                            multiple
                            custom
                          />
                          <CLabel htmlFor="file-multiple-input" variant="custom-file">
                            Choose Files...
                          </CLabel>
                        </CCol>
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
                      <CModalTitle>New Collection</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                    <CInput id="retailer" type="text" placeholder="Name Of retailer" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="ammount" type="number" placeholder="Ammount" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput  type="text" id="mode" placeholder="Mode" />
                      </CFormGroup>
                      <CFormGroup>
                        <CCol  xs="12" md="12" size="lg" >
                          <CInputFile 
                            id="file-multiple-input" 
                            name="file-multiple-input" 
                            multiple
                            custom
                          />
                          <CLabel htmlFor="file-multiple-input" variant="custom-file">
                            Choose Files...
                          </CLabel>
                        </CCol>
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
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name of Retailer</th>
                        <th>Amount</th>
                        <th>Mode</th>
                        <th>Proof</th>
                        <th>Delete Button</th>
                        <th>Update Button</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Ram</td>
                        <td>50000</td>
                        <td>xyz</td>
                        <td>photo</td>
                        <td><CButton block color="danger" style={{width:'50%'}} className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      <tr>
                      <th scope="row">2</th>
                        <td>Ram</td>
                        <td>50000</td>
                        <td>xyz</td>
                        <td>photo</td>
                        <td><CButton block color="danger" style={{width:'50%'}} className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      <tr>
                      <th scope="row">3</th>
                        <td>Ram</td>
                        <td>50000</td>
                        <td>xyz</td>
                        <td>photo</td>
                        <td><CButton block color="danger" style={{width:'50%'}} className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      
                    </tbody>
                    
                  </table>
              </CCol>
              </CRow>


       {/* <CCard>
        <CCardHeader>
          Tooltips
          <DocsLink name="CTooltip"/>
        </CCardHeader>
        <CCardBody>
        

          <p className="text-muted">
            Hover over the links below to see tooltips:
          </p>

          <p className="muted">
            Tight pants next level keffiyeh
            <CTooltip content="Tooltip text">
              <CLink> you probably </CLink>
            </CTooltip>
              haven't heard of them.
            Photo booth beard raw denim letterpress vegan messenger
            bag stumptown. Farm-to-table seitan, mcsweeney's fixie
            sustainable quinoa 8-bit american apparel
            <CTooltip content="Tooltip text">
              <CLink> have a </CLink>
            </CTooltip>
            terry richardson vinyl chambray. Beard stumptown,
            cardigans banh mi lomo thundercats. Tofu biodiesel
            williamsburg marfa, four loko mcsweeney''s cleanse
            vegan chambray. A really ironic artisan
            <CTooltip content="Tooltip text">
              <CLink> whatever keytar </CLink>
            </CTooltip>
            scenester farm-to-table banksy Austin
            <CTooltip content="Tooltip text">
              <CLink> twitter handle </CLink>
            </CTooltip>

            freegan cred raw denim single-origin coffee viral.
          </p>
        </CCardBody>
      </CCard> 

      <hr/>

      <CCard>
        <CCardHeader>
          Tooltips
          <small> placement</small>
        </CCardHeader>
        <CCardBody>
          <div className="my-3">
            <CRow>
              {placements.map(placement => {
                return (<CCol
                  md="4"
                  className="py-4 text-center"
                  key={placement}
                >
                  <CTooltip
                    content={`Tooltip with placement: ${placement}`}
                    placement={placement}
                  >
                    <CButton color="primary">
                      { placement }
                    </CButton>
                  </CTooltip>
                </CCol>)
              })}
            </CRow>
          </div>
        </CCardBody>
      </CCard> */}
    </>
  )
}

export default Tooltips;
