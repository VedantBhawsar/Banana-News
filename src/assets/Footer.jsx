import React, { Component } from 'react'
import { BsFacebook, BsTwitter, BsGoogle, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="bg-dark text-center text-white" style={{ marginTop: "10px " }}>
                    <div className="container p-4 pb-0">
                        <section className="mb-4">

                            <div className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><BsFacebook />
                            </div>


                            <div className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                <BsTwitter />
                            </div>


                            <div className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><BsGoogle /></div>


                            <div className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><BsInstagram /></div>

                            <div className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><BsLinkedin /></div>

                            <div className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><BsGithub />
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
