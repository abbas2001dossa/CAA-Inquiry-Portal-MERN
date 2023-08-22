import React, {useState} from 'react'
import '../../styles/StatusInquiry.css';


const DcRecommendation=(props)=> {


    const [DcRecommendation,setDcRecommendation]= useState('');

    const visible = {
        display: props.display,
      };

    const handleSubjChange=(event)=>{
        setDcRecommendation(event.target.value);
        const no = document.getElementById('DcRecommendationbtn');
        no.innerHTML="Apply";
        console.log(DcRecommendation);
    }

    function btnClick() {
        const id = document.getElementById('DcRecommendationbtn');
        id.innerHTML="Applied";
      }

  return (
    <>
        <div id='DcRecommendation' style={visible}>
            <div className="bg-white dim l">
                <h5>Enter Dc Recommendation  of your inquiry :</h5>
                <textarea value={DcRecommendation} onChange={handleSubjChange}  />
            </div>
            <button id="DcRecommendationbtn" type="button" onClick={btnClick} className="btn btn-primary">
                Apply
            </button>
        </div>
    </>
  )
}

export default DcRecommendation