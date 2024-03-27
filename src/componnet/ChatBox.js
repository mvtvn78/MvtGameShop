import React, { useState ,useRef, useEffect} from 'react'
import "../css/ChatBox.scss"
import msg from "../images/msg.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
function ChatBox() {
    let lastMsg = useRef(undefined);
    // Mode state
    const [mode,setMode]= useState(0)
    // Using state keep track input 
    const [text,setText]= useState("");
    // User msg List
    const [msgList,setMsgList]= useState([])
    // Using Effect to scroll last Msg with msgList dependency
    useEffect( () => {
            if(lastMsg.current !== undefined)
            {
                lastMsg.current.scrollIntoView();
            }
    },[msgList])
    const handleMode = (current) => {
        (current === 1) ? setMode(0) : setMode(1);
    }
   
    const handleInputChange = (e) => {
        // setText By Object Event
        // ignore Enter key to handlesubmit empty msg
        if(e.target.value != "\n")
            setText(e.target.value)
    }
    const handleSubmit = () => {
        // Handle put text into msg box 
        setMsgList( (prev) => { return [...prev,{ role : "user",title : text}]})
        setText("")
        if(text.includes("Hello"))
            {
                setMsgList((prev) => { return [...prev,{ role : "",title : "Hello chào khách hàng"}]})
            }
        else if(text.includes("địa chỉ"))
            {
                setMsgList((prev) => { return [...prev,{ role : "",title : "Số 2, Trường Sa ,Bình Thạnh, TPHCM"}]})
            }
        else if(text.includes("cửa hàng"))
            {
                setMsgList((prev) => { return [...prev,{ role : "",
                title : `Cửa hàng mở cửa vào lúc 
                7h00 am và đóng cửa lúc 9:00 pm .Rất hân hạnh tiếp đoán anh chị đến chơi`}]})
            }
    }
    const handleKeyUp = (e) =>
    {
        if(e.key === "Enter")
        {
            handleSubmit()
        }
    }
    return (
    <>
    <div className='chatbox_trigger'>
      <img src={msg} onClick={ () => {handleMode(mode)}}/>
    </div>
    {/* Mode 1 is render chat box */}
    {mode===1 && 
    <div className='chatbox'>
        <div className='chatbox_header'>
            <h3>Support 24/7</h3>
            <FontAwesomeIcon icon={faMinus} onClick={ () => { setMode(0)}} />
        </div>
        <div className='chatbox_body'>
           <ul className='body_boxmsg'>
                <li>Hello How are you today !</li>
                { msgList.map( (value,idx)=> { 
                    if(idx === msgList.length-1)
                    {
                        return <li key={idx} ref={lastMsg} className={value.role} > {value.title}</li>
                    }
                    return <li key={idx} className={value.role} > {value.title} </li>
                })}
           </ul>
           <div className='body_submit'> 
           {/* Using value attribute to ensure two-binding */}
            <textarea id="msg_user" value={text} onChange={handleInputChange} onKeyUp={handleKeyUp} required >
            </textarea>
                <FontAwesomeIcon icon={faPaperPlane} onClick={handleSubmit} />
            </div>
        </div>
    </div>}
    
    </>
    
  )
}
export default ChatBox