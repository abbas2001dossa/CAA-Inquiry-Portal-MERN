import React from 'react'
import '../styles/Card.css';
import { useLocation,useNavigate } from 'react-router-dom';

const Card=(props)=> {
    const location = useLocation();
    const navigate = useNavigate();

    // userName ??
    function createInquiry(){
        const currentUrl = location.pathname;
        const newUrl = `${currentUrl}/makeinquiry`;
        navigate(newUrl);
    }

  return (
    <>
      <div className="col-lg-4 mt-5">
        <div className="card card-margin bg-warning">
            <div className="card-header no-border">
                <h5 className="card-title text-shadow text-size-lg"> {props.title}</h5>
            </div>
            <div className="card-body pt-0">
                <div className="widget-49">
                    <div className="widget-49-title-wrapper">
                        <div className="widget-49-date-primary">
                            <span className="widget-49-date-day">{props.day}</span>
                            <span className="widget-49-date-month">{props.month}</span>
                        </div>
                        <div className="widget-49-meeting-info">
                            <span className="widget-49-pro-title">{props.description}</span>
                            
                        </div>
                    </div>
                    
                    <div className="widget-49-meeting-action">
                        <button type="button"  onClick={createInquiry} className="hoverNow btn btn-sm ">Click Now </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card
