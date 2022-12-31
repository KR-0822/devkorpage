import "./ProductNotFound.css"
const ProductNotFound = () =>{
    return (
        <div className="page-404">
        <div className="outer">
            <div className="middle">
                <div className="inner">
                    <div className="inner-circle"><i className="fa fa-home"></i><span>Error</span></div>
                    <span className="inner-status">Oops! There is no product</span>
                    <span className="inner-detail">
                      Sorry for the inconvenience.    
                        <a href="/" className="btn btn-info mtl"><i className="fa fa-home"></i>&nbsp;
                            Return home
                        </a> 
                    </span>
                </div>
            </div>
        </div>
        </div>
        )
}

export default ProductNotFound;
