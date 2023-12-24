"use client";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row mt-1">
        <div className="col-12 col-md-6">
            {/* Video element */}
            <video
              src={"/images/ved.mp4"}
              style={{ maxWidthwidth: "800px", height: "600px" }}
              autoPlay
              muted
            />
            <video>
              <source src="/blue.mp4" />
            </video>
          </div>
          <div className="col-12 col-md-6">
            <div className="container">
              {/* Apply 'animate' class to trigger animation */}
              <h2 className="float-end maintext text-end animate">
                مع <span className="hasabtext">'حسب والنسب'</span> أصبحت عائلتك
                <br /> <span className="">أقرب إليك من أي وقت مضى</span>
              </h2>
              <br />

              {/* Apply 'animate' class to trigger animation */}
              <h6 className="float-end maintext2 text-end mt-5 animate">
                <span>
                  حيث يُعتبر نظام رقمي متكامل لإدارة شؤون العائلة وتنظيم
                  فعالياتها.
                </span>
                <br />
                <span className="pt-2">
                  {" "}
                  ويضم مجموعة واسعة من الخدمات والمزايا لتحسين تجربة إدارة حياة
                  العائلة بكفاءة وسهولة
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
