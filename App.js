import Headers from './componnet/Header';
import Slider from './componnet/Slider'
import OutProduct from './componnet/OutProduct'
import Product from './componnet/Product'
import OurVision from './componnet/OurVision'
import FaPerson from './componnet/FaPerson'
import Footer from './componnet/Footer';
import Container from 'react-bootstrap/Container';
import *  as imgs  from "./componnet/ImageManager"
/* 
    xl - >=1200px (PC)
    md - >=768px (Tablet)
    sm - >=576px (Phone)
*/
function App()
{
    return(
        <>
            {/* Header */}
            <Headers/>
            {/* Main */}
            <Container className='main my-5'>
                <Slider/>
                <OutProduct/>
                <OurVision/>
                <FaPerson  obj ={ {
                    heading: "NHÂN VẬT NỔI TIẾNG",
                    img1 : imgs.hotStream1 ,
                    text1: "Streamer 123",
                    img2 : imgs.hotStream2 ,
                    text2: "Streamer 123",
                    img3: imgs.hotStream3 ,
                    text3: "Streamer 123",
                }
                }/>
            </Container>
            {/* Footer */}
            <Footer/>
        </>
    )
}
export default App