import React, { useEffect, useState } from 'react'
// import Header from '../navbar/Header'

import banner from '../../../assets/0.jpg'
// section 1
import img1 from '../../../assets/1-unending/1.jpg'
import img2 from '../../../assets/1-unending/2.jpg'
import img3 from '../../../assets/1-unending/3.jpg'
import img4 from '../../../assets/1-unending/4.jpg'
import img5 from '../../../assets/1-unending/5.jpg'
import img6 from '../../../assets/1-unending/6.jpg'
import img7 from '../../../assets/1-unending/7.jpg'
import img8 from '../../../assets/1-unending/8.jpg'
import img9 from '../../../assets/1-unending/9.jpg'
import img10 from '../../../assets/1-unending/10.jpg'
import img11 from '../../../assets/1-unending/11.jpg'
import img12 from '../../../assets/1-unending/12.jpg'
import img13 from '../../../assets/1-unending/13.jpg'
import img14 from '../../../assets/1-unending/14.jpg'
import img15 from '../../../assets/1-unending/15.jpg'
import img16 from '../../../assets/1-unending/16.jpg'
import img17 from '../../../assets/1-unending/17.jpg'
import img18 from '../../../assets/1-unending/18.jpg'
import img19 from '../../../assets/1-unending/19.jpg'
import img20 from '../../../assets/1-unending/20.jpg'
import img21 from '../../../assets/1-unending/21.jpg'
import { importAll } from '../../../utils/importImages'
function MyWork() {
  const imgSection1 = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21]
  // const imgSection1 = importAll(require.context('../../../assets/1-unending', false, /\.(jpg|jpe?g|svg)$/));
  const imgSection2 = importAll(require.context('../../../assets/2-', false, /\.(jpg|jpe?g|svg)$/));
  const imgSection3 = importAll(require.context('../../../assets/3-', false, /\.(jpg|jpe?g|svg)$/));
  const imgSection4 = importAll(require.context('../../../assets/4-', false, /\.(jpg|jpe?g|svg)$/));
  const imgSection5 = importAll(require.context('../../../assets/5-', false, /\.(jpg|jpe?g|svg)$/));

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  console.log({selectedImage})
  const openModal = (img,i) => {

    setSelectedImage(img);
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
    <div>
      <div className="banner-img mb-5" style={{ width: "100dvw" }}>
        <img src={banner} alt="" style={{ width: "100%", height: "auto" }} />
      </div>

      {isOpen &&
      <div id="myModal" className="img-modal">

            <span className="x-close" style={{backgroundColor: 'rgba(255,255,255,0'}}
                  onClick={() => closeModal()}>&times;</span>

            <img className="modal-content" src={selectedImage} />

        </div>}

      <section className="section-1">
        <div className="my" style={{ textAlign: "center", paddingBottom: "" }}>
          <h4
            className="mb-4 mt-3"
            style={{
              fontSize: "35px",
              fontWeight: "300",
              color: "#424242",
              fontStretch: "expanded",
              letterSpacing: "4px",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
          >
            UNENDING
          </h4>
          <p
            className="mb-4"
            style={{
              fontSize: "20px",
              fontWeight: "130",
              color: "#424242",
              fontStretch: "expanded",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
          >
            “UNENDING ” is a project challenges the observer to engage with the
            images not just visually, but intellectually and emotionally,
            seeking the balance between the rational and the abstract, the
            literal and the metaphorical.{" "}
          </p>
        </div>

        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
            }}
          >
            {imgSection1.map((img, index) => (
              <div className="col-md-4 col-sm-6 col-xs-12 my-3" key={index}>
                <img onClick={() => openModal(img)}
                  src={img}
                  alt=""
                  style={
                    img == img16 || img == img18 || img == img19 || img == img21
                      ? { width: "100%", height: "auto", marginTop: "30%", cursor:"pointer"  }
                      : img == img12 || img == img10 || img == img5
                      ? { width: "100%", height: "auto", marginTop: "10%" , cursor:"pointer" }
                      : { width: "100%", height: "auto" , cursor:"pointer" }
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="py-5"></div>

      <section className="section-2">
        <div className="my" style={{ textAlign: "center", paddingBottom: "" }}>
          <h4
            className="mb-4 mt-3"
            style={{
              fontSize: "35px",
              fontWeight: "300",
              color: "#424242",
              fontStretch: "expanded",
              letterSpacing: "4px",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
          ></h4>
          <p
            className="mb-4"
            style={{
              fontSize: "20px",
              fontWeight: "130",
              color: "#424242",
              fontStretch: "expanded",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
          ></p>
        </div>

        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
            }}
          >
            {imgSection2.map((img, index) => (
              <div className="col-md-4 col-sm-6 col-xs-12 my-3" key={index}>
                <img onClick={() => openModal(img)}
                  src={img}
                  alt=""
                  style={
                    index == 0 || index == 2
                      ? { width: "100%", height: "auto", marginTop: "30%", cursor:"pointer" }
                      : index == 3
                      ? { width: "100%", height: "auto", marginTop: "15%", cursor:"pointer" }
                      : index == 7
                      ? { width: "100%", height: "auto", marginTop: "10%", cursor:"pointer" }
                      : { width: "100%", height: "auto", cursor:"pointer" }
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=''>
      <div className="my-5 container" style={{ textAlign: "center", paddingBottom: "" }}>
          <h4
            className="mb-4 mt-3"
            style={{
              fontSize: "35px",
              fontWeight: "300",
              color: "#424242",
              fontStretch: "expanded",
              letterSpacing: "4px",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
          >
            
          </h4>
          <p
            className="mb-4"
            style={{
              fontSize: "20px",
              fontWeight: "130",
              color: "#424242",
              fontStretch: "expanded",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
          >
            Through a sophisticated fusion of photographic techniques, this series delves into the intricate tapestry of existence, encouraging a quest for meaning within the dance of opposites. It invites viewers to appreciate the profound beauty in the simplicity of black and white, offering a deep, rational meditation on the transient and the timeless facets of life..{" "}
          </p>
        </div>

        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
            }}
          >
            {imgSection3.map((img, index) => (
              <div className="col-md-4 col-sm-6 col-xs-12 my-3" key={index}>
                <img onClick={() => openModal(img)}
                  src={img}
                  alt=""
                  style={
                    index == 9 || index == 11
                      ? { width: "100%", height: "auto", marginTop: "30%" , cursor:"pointer" }
                      : index == 3 || index == 5
                      ? { width: "100%", height: "auto", marginTop: "10%" , cursor:"pointer" }
                      : { width: "100%", height: "auto" , cursor:"pointer" }
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=''>
      <div className="my-5 container" style={{ textAlign: "center", paddingBottom: "" }}>
          <h4
            className="mb-4 mt-3"
            style={{
              fontSize: "35px",
              fontWeight: "300",
              color: "#424242",
              fontStretch: "expanded",
              letterSpacing: "4px",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
          >
            
          </h4>
          <p
            className="mb-4"
            style={{
              fontSize: "20px",
              fontWeight: "130",
              color: "#424242",
              fontStretch: "expanded",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
          >
Inspired by the rich cultural heritage of Morocco, adding layers of abstraction and depth. It captures the essence of Moroccan mystique, where ancient wisdom and contemporary vision merge, revealing the eternal rhythms that shape our understanding of existence.          </p>
        </div>

        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
            }}
          >
            {imgSection4.map((img, index) => (
              <div className="col-md-4 col-sm-6 col-xs-12 my-3" key={index}>
                <img onClick={() => openModal(img)}
                  src={img}
                  alt=""
                  style={
                    index == 12 || index == 14 || index == 18 || index == 20
                      ? { width: "100%", height: "auto", marginTop: "30%", cursor:"pointer"  }
                      : index == 1 || index == 7
                      ? { width: "100%", height: "auto", marginTop: "10%", cursor:"pointer"  }
                      : { width: "100%", height: "auto", cursor:"pointer"  }
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=''>
      <div className="my-5 container" style={{ textAlign: "center", paddingBottom: "" }}>
          <h4
            className="mb-4 mt-3"
            style={{
              fontSize: "35px",
              fontWeight: "300",
              color: "#424242",
              fontStretch: "expanded",
              letterSpacing: "4px",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
          >
            
          </h4>
          <p
            className="mb-4"
            style={{
              fontSize: "20px",
              fontWeight: "130",
              color: "#424242",
              fontStretch: "expanded",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
          >
Simplicity in tools, complexity in thought. With an iPhone 6, iPhone 8, and Nikon Coolpix P510       
          </p>
        </div>
        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
            }}
          >
            {imgSection5.map((img, index) => (
              <div className="col-md-4 col-sm-6 col-xs-12 my-3" key={index}>
                <img onClick={() => openModal(img)}
                  src={img}
                  alt=""
                  style={
                    index == 3 || index == 5 || index == 9 || index == 11 || index == 13  || index == 21 || index == 23 
                      ? { width: "100%", height: "250px", marginTop: "35%" , objectFit:'cover', cursor:"pointer" }
                      : index == 16 || index == 18 || index == 20 
                      ?  { width: "100%",  marginTop: "35%" , cursor:"pointer" }: index == 27 ? {width: "100%",  height: "235px", marginTop: "", objectFit:'cover', cursor:"pointer" } 
                      : { width: "100%", height: "auto" , cursor:"pointer" }
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
  
  
}
export default MyWork
