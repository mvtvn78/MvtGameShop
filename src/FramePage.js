import Headers from './componnet/Header';
import Footer from './componnet/Footer';
import { Outlet } from 'react-router-dom';
import ChatBox from './componnet/ChatBox'
/* 
    xl - >=1200px (PC)
    md - >=768px (Tablet)
    sm - >=375px (Phone SE)
*/
function FramePage()
{
    return(
        <>
            {/* Header */}
            <Headers/>
            {/* Main  will render */}
                <Outlet/>
            {/* Footer */}
            <Footer/>
            <ChatBox/>
        </>
    )
}
export default FramePage