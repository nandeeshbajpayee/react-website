import React from 'react'

function Contactus() {
    return (
        <div className="container mt-4 mb-4">
            <div className="card shadow">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="main-heading">Contact Us</h3>
                            <div className="underline"></div>
                        </div>
                        <form>
                            <div className="form-group">
                                <label htmlFor="inputName">Name</label>
                                <input type="text" className="form-control mt-2" id="inputName" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail">Email</label>
                                <input type="email" className="form-control mt-2" id="inputEmail" placeholder="Email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputMessage">Message</label>
                                <textarea className="form-control mt-2" id="inputMessage" placeholder="Enter your message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mt-2 shadow">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus

