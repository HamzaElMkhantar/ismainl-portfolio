import React, { useEffect, useState } from 'react'
import SliderComponent from '../../utils/SliderComponent'
import Modal from 'react-modal';

import { importAll } from '../../utils/importImages'

const Home = () => {
  const slideImg = importAll(require.context('../../assets/home-slide', false, /\.(jpg|jpe?g|svg)$/));
  const imagesContent = importAll(require.context('../../assets/home-img-content', false, /\.(jpg)$/));


  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (i) => {
    setSelectedImage(i);
    setIsOpen(true);
    document.body.classList.add('no-scroll');
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
    document.body.classList.remove('no-scroll');
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);
  return (
    <div className="home">


      {isOpen &&
      <div id="myModal" className="img-modal">

            <span className="x-close" style={{backgroundColor: 'rgba(255,255,255,0'}}
                  onClick={() => closeModal()}>&times;</span>

            <img className="modal-content" src={imagesContent[selectedImage]} />

        </div>}

      <div style={{}}>
        <SliderComponent slideImg={slideImg} />
      </div>
      <section id="my-work" className="container">
        <div className="row mt-4">
          {imagesContent.map((image, i) => (
            <div
              key={i}
              className="VerticalImage col-lg-4 col-md-6 col-sm-6 col-xs-12 my-3 d-flex justify-content-center"
            >
              <img
                style={{ width: "100%", height: "auto", objectFit: "cover" , cursor: "pointer" }}
                src={image}
                alt=""
                onClick={() => openModal(i)}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="contact-form py-3" id="contact">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h1
                style={{
                  color: "#424242",
                  fontSize: "55px",
                  fontWeight: "400",
                  fontStretch: "expanded",
                  letterSpacing: "5px",
                  textAlign: "center",
                }}
                className="mb-3"
              >
                Contact
              </h1>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label
                      style={{
                        color: "#424242",
                        fontSize: "25px",
                        fontWeight: "100",
                        fontStretch: "expanded",
                        letterSpacing: "2px",
                      }}
                      htmlFor="your-name"
                      className="form-label"
                    >
                      First Name
                    </label>
                    <input
                      style={{
                        color: "gray",
                        fontWeight: "100",
                        height: "50px",
                        border: "1px lightgray solid",
                        borderRadius: "3px",
                      }}
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      id="your-name"
                      name="your-name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label
                      style={{
                        color: "#424242",
                        fontSize: "25px",
                        fontWeight: "100",
                        fontStretch: "expanded",
                        letterSpacing: "2px",
                      }}
                      htmlFor="your-surname"
                      className="form-label"
                    >
                      Last Name
                    </label>
                    <input
                      style={{
                        color: "gray",
                        fontWeight: "100",
                        height: "50px",
                        border: "1px lightgray solid",
                        borderRadius: "3px",
                      }}
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      id="your-surname"
                      name="your-surname"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <label
                      style={{
                        color: "#424242",
                        fontSize: "25px",
                        fontWeight: "100",
                        fontStretch: "expanded",
                        letterSpacing: "2px",
                      }}
                      htmlFor="your-email"
                      className="form-label"
                    >
                      Email Address
                    </label>
                    <input
                      style={{
                        color: "gray",
                        fontWeight: "100",
                        height: "50px",
                        border: "1px lightgray solid",
                        borderRadius: "3px",
                      }}
                      type="email"
                      placeholder="Enter your email address"
                      className="form-control"
                      id="your-email"
                      name="your-email"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <label
                      style={{
                        color: "#424242",
                        fontSize: "25px",
                        fontWeight: "100",
                        fontStretch: "expanded",
                        letterSpacing: "2px",
                      }}
                      htmlFor="your-subject"
                      className="form-label"
                    >
                      Subject
                    </label>
                    <input
                      style={{
                        color: "gray",
                        fontWeight: "100",
                        height: "50px",
                        border: "1px lightgray solid",
                        borderRadius: "3px",
                      }}
                      type="text"
                      placeholder="Enter Your Email Subject"
                      className="form-control"
                      id="your-subject"
                      name="your-subject"
                    />
                  </div>
                  <div className="col-12">
                    <label
                      style={{
                        color: "#424242",
                        fontSize: "25px",
                        fontWeight: "100",
                        fontStretch: "expanded",
                        letterSpacing: "2px",
                      }}
                      htmlFor="your-message"
                      className="form-label"
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="your-message"
                      name="your-message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-md-12">
                        <button
                          style={{
                            height: "45px",
                            color: "#f0f0f0",
                            fontSize: "25px",
                            fontWeight: "100",
                            fontStretch: "expanded",
                            letterSpacing: "2px",
                          }}
                          type="submit"
                          className="btn btn-dark w-100 fw-bold"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home