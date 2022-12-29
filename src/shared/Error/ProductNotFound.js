import "./ProductNotFound.css"
const ProductNotFound = () =>{
    return (
        <div class="page-404">
        <div class="outer">
            <div class="middle">
                <div class="inner">
                    <div class="inner-circle"><i class="fa fa-home"></i><span>Error</span></div>
                    <span class="inner-status">Oops! There is no product</span>
                    <span class="inner-detail">
                      Sorry for the inconvenience.    
                        <a href="/" class="btn btn-info mtl"><i class="fa fa-home"></i>&nbsp;
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
