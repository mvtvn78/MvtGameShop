import React, { useRef, useState } from 'react'
import { Container, Row,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import "./css/MainSigInPage.scss"
import Alert from './componnet/Alert';
// Sign In Componet
function SignIn({alerter,setModalShow}) {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [verify,setVerify]= useState(false)
    const handleOnchangeById = (e,idx) => {
        switch(idx)
        {
            case 0:
                setEmail(e.target.value)
                break;
            case 1:
                setPassword(e.target.value)
                break;
            default : break;
        }
    }
    const handleSubmit = () => {
        if(password === "" || email === "" )
            {
                alerter.current = <p>Vui lòng điền trường thông tin còn thiếu</p>
                setModalShow(true)
            }
        else if (verify=== false)
            {
                alerter.current = <p>Vui Lòng tick chọn xác minh bạn không phải là robot</p>
                setModalShow(true)
            }
        console.table({email,password,verify});
    }
    return (
    <>
    <Col xs={{span:10 , offset:1}}>
        <Form className='container_Form'>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column xs="2">
                Email or Username
                </Form.Label>
                    <Col xs="10">
                <Form.Control placeholder="Email" value={email} onChange={ (e)=> {handleOnchangeById(e,0)}}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column xs="2">
                    Password
                </Form.Label>
                <Col xs="10">
                <Form.Control type="password" value={password} placeholder="Password" onChange={ (e)=> {handleOnchangeById(e,1)}} />
                </Col>
            </Form.Group>
        </Form>
    </Col>

    <Col xs={{span: 12 , offset : 6} } className='formchecker'>
            <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="I'm not a robot"
                    className='my-3'
                    checked ={verify}
                    onChange={ () => { setVerify( (prev) => {
                        return ! prev;
                    }) }}
                />
                <Button   variant="outline-primary" onClick={handleSubmit}>Sign In</Button>    
    </Col>
    </>
  )
}
// Sign Up Componet
function SignUp({alerter,setModalShow}) {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passVerify,setPassVerify] = useState("")
    const [verify,setVerify]= useState(false)
    const handleOnchangeById = (e,idx) => {
        switch(idx)
        {
            case 0:
                setEmail(e.target.value)
                break;
            case 1:
                setPassword(e.target.value)
                break;
            case 2:
                setPassVerify(e.target.value)
            default : break;
        }
    }
    const handleSubmit = () => {
        if(password === "" || email === "" || passVerify ==="" )
            {
                alerter.current = <p>Vui lòng điền trường thông tin còn thiếu</p>
                setModalShow(true)
            }
        else if (verify=== false)
            {
                alerter.current = <p>Vui Lòng tick chọn xác minh bạn không phải là robot</p>
                setModalShow(true)
            }
        else if ( passVerify !== password)
        {
            alerter.current = <p>Hai mật khẩu không trùng khớp</p>
            setModalShow(true)
        }
        console.table({email,password,passVerify,verify});
    }
    return (
      <>
      <Col xs={{span:10 , offset:1}}>
          <Form className='container_Form'>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column xs="2">
                    Email or Username
                    </Form.Label>
                        <Col xs="10">
                    <Form.Control placeholder="Email" onChange={ (e)=> { handleOnchangeById(e,0)}}/>
                        </Col>
                </Form.Group>
  
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column xs="2">
                        Password
                    </Form.Label>
                    <Col xs="10">
                    <Form.Control type="password" placeholder="Password" onChange={ (e)=> { handleOnchangeById(e,1)}} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextRePass">
                    <Form.Label column xs="2">
                        Re-Type Password
                    </Form.Label>
                    <Col xs="10">
                    <Form.Control type="password" placeholder="Re-Password" onChange={ (e)=> { handleOnchangeById(e,2)}} />
                    </Col>
                </Form.Group>
          </Form>
      </Col>
  
      <Col xs={{span: 12 , offset : 6} } className='formchecker'>
              <Form.Check 
                      type="switch"
                      id="custom-switch"
                      label="I'm not a robot"
                      className='my-3'
                      checked ={verify}
                      onChange={ () => { setVerify( (prev) => {
                          return ! prev;
                      }) }}
                  />
                  <Button   variant="outline-primary" onClick={handleSubmit}>Sign Up</Button>    
      </Col>
      </>
    )
}
// MainSignInPage Component
function MainSigInPage() {
    const [modalShow, setModalShow] = useState(false);
    let alerter = useRef(undefined)
    const [page,setPage]= useState(0)
    //  Handle re-render too much b/c change state
    const handleBtnChange =(index) => {
        if(page !== index)
            setPage(index);
    }
    return (
    <Container className='main_signIn my-5'>
        <Row>
            <Col xs={{span:12 , offset: 3}} className='my-3'>
            <ButtonGroup aria-label="Basic example" className='btn_sign d-flex'>
                <Button  variant="outline-primary" active={  (page==0)  ? true: false}  
                onClick={ () => { handleBtnChange(0); }}
                 >Sign In</Button>
                <Button variant="outline-primary" active={  (page==1)  ? true: false} 
                 onClick={ () => { handleBtnChange(1)}}
                >Sign Up</Button>
            </ButtonGroup>
            </Col>
            
           {(page==0) ? <SignIn  alerter={alerter} setModalShow={setModalShow}/> : <SignUp  alerter={alerter} setModalShow={setModalShow}/>}
        </Row>
        <Alert show={modalShow} onHide={ ()=>setModalShow(false)} 
        heading ={"Hello wolrd"}
        content={alerter.current}
        status={"warning"}
      />
    </Container>
    
  )
}
export default  MainSigInPage
