import React, { Component } from 'react'
export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="bg-dark text-center text-white" style={{ marginTop: "10px " }}>
                    <div className="container p-4 pb-0">
                        <section className="mb-4">

                            <div className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><a href="#" className="fa fa-facebook"></a>
                            </div>


                            <div className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                <a href="#" className="fa fa-twitter"></a>
                            </div>


                            <div className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><a href="#" className="fa fa-google"></a></div>


                            <div className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><a href="#" className="fa fa-instagram"></a></div>

                            <div className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><a href="#" className="fa fa-linkedin"></a></div>

                            <div className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><div href="#" className="fa fa-github"></div>
                            </div>
                        </section>

                    </div>



                    <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                        © 2020 Copyright :
                        <a className="text-white" href="banananewz.com" style={{ textDecoration: "none" }}>  BananaNewz.com</a>
                    </div>
                </footer>
            </div>
        )
    }
}
