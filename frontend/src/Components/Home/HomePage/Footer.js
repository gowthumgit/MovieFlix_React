import React from "react";
 export default function Footer(){


    return (
        <>
<footer className="page-footer font-small pt-4 text-light" style={{backgroundColor: "rgb(51, 51, 56)"}}>
    <ul className="nav justify-content-center  pb-3 mb-3">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p className="text-center text-muted">© 2022 Company, Inc</p>
    <div className="page-content page-container  mx-auto" id="page-content">
        <div className="padding">
            <div className="row container d-flex justify-content-center mx-auto">

                <div className="col-md-6 grid-margin stretch-card mx-auto ">
                    <div className="mx-auto card-footer">
                        <div className="mx-auto">
                            <div className="template-demo">
                                <button type="button" //onClick="window.location.href='https://www.facebook.com/'"
                                    className="btn btn-social-icon btn-outline-facebook">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/40px-Facebook_icon_2013.svg.png"
                                            className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                                            style={{borderRadius: "30%", height :"40px", width:"40px"}} alt="" />
                                </button>
                                <button type="button" //onClick="window.location.href='https://www.youtube.com/'"
                                    className="btn btn-social-icon btn-outline-youtube">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Logo_youtube_ios_%28cropped%29.jpg"
                                            className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                                            style={{borderRadius: "30%", height :"40px", width:"40px"}} alt="" />
                                    </button>
                                <button type="button" //onClick="window.location.href='https://www.twitter.com/'"
                                    className="btn btn-social-icon btn-outline-twitter">
                                        <img src="https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk"
                                            className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                                            style={{borderRadius: "30%", height :"40px", width:"40px"}} alt="" />
                                    </button>
                                <button type="button" //onClick="window.location.href='https://www.instagram.com/'"
                                    className="btn btn-social-icon btn-outline-instagram">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                                            className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                                            style={{borderRadius: "30%", height :"40px", width:"40px"}} alt="" />
                                    </button>
                                <button type="button" //onClick="window.location.href='https://www.whatsapp.com/'"
                                    className="btn btn-social-icon btn-outline-whatsapp">
                                        <img src="https://pbs.twimg.com/profile_images/1318652224638124032/wrpp2Nl4_400x400.png"
                                            className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                                            style={{borderRadius: "30%", height :"40px", width:"40px"}} alt="" />

                                    </button>
                                <button type="button" //onClick="window.location.href='https://www.pinterest.com/'"
                                    className="btn btn-social-icon btn-outline-pintrest">
                                        <img src="https://i.pinimg.com/originals/83/50/7a/83507a4a1f228afcc65407488ee1b7a6.png"
                                            className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                                            style={{borderRadius: "30%", height :"40px", width:"40px"}} alt="" /></button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</footer>
</>
    )
}