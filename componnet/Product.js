import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows,faApple } from '@fortawesome/free-brands-svg-icons'
import "../css/Product.scss"
/* 
    Using Props to set specific data of them
*/
// Product Component Intialization
function Product({gameSrc,isWin,gameHeading,gamePrice})
{
    return (
       <>
        <div className="product_image "> 
            <img src={gameSrc}/>
        </div>
        <div className="product_info text_white">
            <h3>{gameHeading}</h3>
            <div className="product_footer">
                <FontAwesomeIcon icon={ isWin  ? faWindows :faApple  }  className="type_os"/>
                <span className="price">{gamePrice}</span>
            </div>
        </div>
        </>    
    )
}
export default Product