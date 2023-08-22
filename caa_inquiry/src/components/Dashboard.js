import React,{useState} from 'react'
import '../styles/Dashbaord.css';
import StatusInquiry from './Inquiry/StatusInquiry';
import Nomenclature from './Inquiry/Nomenclature';
import File from './Inquiry/File';
import Subject from './Inquiry/Subject';
import InquiryOrderBy from './Inquiry/InquiryOrderBy';
import Opi from './Inquiry/Opi';
import LocOfInquiry from './Inquiry/LocOfInquiry';
import InquiryId from './Inquiry/InquiryId';
import Tors from './Inquiry/Tors';
import BoiConstitutionDate from './Inquiry/BoiConstitutionDate';
import SubmissionDate from './Inquiry/SubmissionDate';
import LatestSubmissionDate from './Inquiry/LatestSubDate';
import CompletionDate from './Inquiry/CompletionDate';
import ForwardingDate from './Inquiry/ForwardingDate';
import ReForwardingDate from './Inquiry/ReforwardingDate';
import DecisionDate from './Inquiry/DecisionDate';
import FileRcvDate from './Inquiry/FileRcvDate';
import ComplianceLetterIssueDate from './Inquiry/ComplianceLetterIssueDate';
import Remarks from './Inquiry/Remarks';
import DcRecommendation from './Inquiry/DcRecommendation';
import Enroute from './Inquiry/Enroute';
import Reminder from './Inquiry/Reminder';
import BoardOfInquiry from './Inquiry/BoardOfInquiry';

function Dashboard( props) {

  const [StatusInquiryDisplay, setStatusInquiryDisplay] = useState('none');
  const [Nomenclatured , setNomenclatured] = useState('none');
  const [FileDisplay, setFileDisplay ] = useState('none');
  const [SubjDisplay, setSubjDisplay] = useState('none');
  const [InquiryDisplay,setInquiryDisplay]=useState('none');
  const [OpiDisplay,setOpiDisplay] = useState('none');
  const [LocOfInquiryDisplay,setLocOfInquiryDisplay]= useState('none');
  const [InquiryIdDisplay , setInquiryIdDisplay] = useState('');
  const [TorsDisplay , setTorsDisplay]= useState('none');
  const [BoiConstitutionDateDisplay , setBoiConstitutionDateDisplay]= useState('none');
  const [SubmissionDateDisplay , setSubmissionDateDisplay] = useState('none');
  const [LatestSubmissionDateDisplay , setLatestSubmissionDateDisplay]= useState('none');
  const [CompletionDateDisplay , setCompletionDateDisplay]= useState('none');
  const [ForwardingDateDisplay , setForwardingDateDisplay] = useState('none');
  const [ReForwardingDateDisplay , setReForwardingDateDisplay]=useState('none');
  const [DecisionDateDisplay, setDecisionDateDisplay]=useState('none');
  const [FileRcvDateDisplay , setFileRcvDateDisplay]=useState('none');
  const [ComplianceLetterIssueDateDisplay , setComplianceLetterIssueDateDisplay]=useState('none');
  const [RemarksDisplay, setRemarksDisplay]=useState('none');
  const [DcRecommendationDisplay , setDcRecommendationDisplay]=useState('none');
  const [EnrouteDisplay, setEnrouteDisplay]=useState('none');
  const [ReminderDisplay,setReminderDisplay]=useState('none');
  const [BoardOfInquiryDisplay , setBoardOfInquiryDisplay] =useState('none');


  const [InquiryIdValue, setInquiryIdValue]=useState('');

  // rcv inquird id from inquiry id componenet = child -> parent 
  const handleDataFromChild = (data) => {
    setInquiryIdValue(data);
    console.log(InquiryIdValue);
  };
  


  // relevent functinon to handle display
  function ChangeBoardOfInquiryDisplay(){
    if (BoardOfInquiryDisplay ==='none'){setBoardOfInquiryDisplay('');}
    else{setBoardOfInquiryDisplay('none');}
  }
  
  function ChangeReminderDisplay(){
    if(ReminderDisplay ==='none'){
      setReminderDisplay('');
    }else{setReminderDisplay('none');}
  }

  function ChangeEnrouteDisplay (){
    if(EnrouteDisplay==='none'){
      setEnrouteDisplay('');
    }else{setEnrouteDisplay('none');}
  }

  function ChangeDcRecommendationDisplay (){
    if(DcRecommendationDisplay ==='none'){
      setDcRecommendationDisplay('');
    }else{setDcRecommendationDisplay('none');}
  }

  function ChangeRemarksDisplay(){
    if(RemarksDisplay ==='none'){setRemarksDisplay('');}
    else{setRemarksDisplay('none');}
  }

  function ChangeComplianceLetterIssueDateDisplay (){
    if(ComplianceLetterIssueDateDisplay ==='none'){setComplianceLetterIssueDateDisplay('');}
    else{
      setComplianceLetterIssueDateDisplay('none');
    }
  }

  function ChangeFileRcvDateDisplay (){
    if(FileRcvDateDisplay ==='none'){setFileRcvDateDisplay('');}
    else{setFileRcvDateDisplay('none');}
  }

  function ChangeDecisionDateDisplay(){
    if(DecisionDateDisplay ==='none'){setDecisionDateDisplay('');}
    else{setDecisionDateDisplay('none');}
  }

  function ChangeReForwardingDateDisplay(){
    if(ReForwardingDateDisplay ==='none'){
      setReForwardingDateDisplay('');
    }else{setReForwardingDateDisplay('none');}
  }

  function ChangeForwardingDateDisplay(){
    if (ForwardingDateDisplay === 'none'){
      setForwardingDateDisplay('');
    }
    else{
      setForwardingDateDisplay('none');
    }
  }


  function ChangeCompletionDateDisplay (){
    if (CompletionDateDisplay ==='none'){
      setCompletionDateDisplay('');
    }
    else{
      setCompletionDateDisplay('none');
    }
  }

  function ChangeLatestSubmissionDateDisplay (){
    if (LatestSubmissionDateDisplay ==='none'){
      setLatestSubmissionDateDisplay('');
    }
    else{
      setLatestSubmissionDateDisplay('none');
    }
  }

  function ChangeSubmissionDateDisplay (){
    if (SubmissionDateDisplay === 'none'){
      setSubmissionDateDisplay('');
    }else{
      setSubmissionDateDisplay('none');
    }
  }

  function ChangeBoiConstitutionDateDisplay(){
    if (BoiConstitutionDateDisplay ==='none'){
      setBoiConstitutionDateDisplay('');
    }else{
      setBoiConstitutionDateDisplay('none');
    }
  }

  function ChangeTorsDisplay (){
    if(TorsDisplay === 'none'){
      setTorsDisplay('');
    }else{
      setTorsDisplay('none');
    }
  }

  function ChangeInquiryIdDisplay (){
    if(InquiryIdDisplay ==='none'){
      setInquiryIdDisplay('');
    }else{
      setInquiryIdDisplay('none');
    }
  }

  function ChangeLocOfInquiryDisplay (){
    if(LocOfInquiryDisplay=== 'none'){
      setLocOfInquiryDisplay('');
    }else{
      setLocOfInquiryDisplay('none');
    }
  }

  function ChangeOpiDisplay (){
    if (OpiDisplay ==='none'){
      setOpiDisplay('');
    }else{
      setOpiDisplay('none');
    }
  }

  function ChangeInquiryDisplay (){
    if (InquiryDisplay==='none'){
      setInquiryDisplay('');
    }else{
      setInquiryDisplay('none');
    }
  }



  function ChangeSubjDisplay (){
    if (SubjDisplay ==='none'){
      setSubjDisplay('');
    }else{
      setSubjDisplay('none');
    }
  }

  function ChangeFileDisplay (){
    if (FileDisplay === 'none') {
      setFileDisplay('');
    } else {
      setFileDisplay('none');
    }
    }
  
  function ChangeDisplay (){
    if (StatusInquiryDisplay === 'none') {
      setStatusInquiryDisplay('');
    } else {
      setStatusInquiryDisplay('none');
    }

    
  }

  function ChangeDisplayNomenclature(){
    if ( Nomenclatured === 'none') {
      setNomenclatured('');
    } else {
      setNomenclatured('none');
    }
  }
  
  

  return (
    <>
      <div className="container mt-5  dimension">
        <div className="row">
            <div className="col-sm-3 sidepanel">
                <div className="title row m-2">
                    <h3 className='title'> {props.title}</h3>
                </div>
                <div className="blockOfDetail row m-2 ">
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeInquiryIdDisplay} type='button'><p><i className="fa fa-address-book custom-icon"></i> Inquiry ID  </p> </button>
                    </div>
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeDisplay} type='button'><p><i className="fa fa-address-book custom-icon"></i>Status Of Inquiry </p> </button>
                    </div>
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeDisplayNomenclature} type='button'><p><i className="fa fa-address-book custom-icon"></i>Nomenclature </p> </button>
                    </div>
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeFileDisplay} type='button'><p><i className="fa fa-address-book custom-icon"></i>File No. </p> </button>
                    </div>
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeSubjDisplay} type='button'><p><i className="fa fa-address-book custom-icon"></i>Subject </p> </button>
                    </div>
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeInquiryDisplay} type='button'><p><i className="fa fa-address-book custom-icon"></i> Inquiry Ordered by </p> </button>
                    </div>
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeOpiDisplay} type='button'><p><i className="fa fa-address-book custom-icon"></i> OPI </p> </button>
                    </div>
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeLocOfInquiryDisplay} type='button'><p><i className="fa fa-address-book custom-icon"></i>Location Of Inquiry</p> </button>
                    </div>
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeTorsDisplay} type='button'><p><i className="fa fa-address-book custom-icon"></i> TORs</p> </button>
                    </div>
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeBoardOfInquiryDisplay} type='button'><p><i className="fa fa-address-book custom-icon"></i>  Board Of Inquiry </p> </button>
                    </div>
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeBoiConstitutionDateDisplay} type='button'><p><i className="fa fa-address-book custom-icon"></i>B.O.I Constitution Date</p> </button>
                    </div>
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeSubmissionDateDisplay} type='button'><p><i className="fa fa-address-book custom-icon"></i> Submission Date </p> </button>
                    </div>
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeLatestSubmissionDateDisplay} type='button'><p><i className="fa fa-address-book custom-icon"></i>Latest Submission Date</p> </button>
                    </div>
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeReminderDisplay} type='button'><p><i className="fa fa-address-book custom-icon"></i> Reminder </p> </button>
                    </div>
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeCompletionDateDisplay} type='button'><p><i className="fa fa-address-book custom-icon"></i>Completion Date</p> </button>
                    </div>
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeForwardingDateDisplay} type='button'><p><i className="fa fa-address-book custom-icon"></i>Forwarding Date</p> </button>
                    </div>
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeEnrouteDisplay} type='button'><p><i className="fa fa-address-book custom-icon"></i> EnRoute</p> </button>
                    </div>
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeReForwardingDateDisplay} type='button'><p><i className="fa fa-address-book custom-icon"></i> Reforwarding Date</p> </button>
                    </div>
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeDecisionDateDisplay}  type='button'><p><i className="fa fa-address-book custom-icon"></i> Decision Date</p> </button>
                    </div>
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeFileRcvDateDisplay} type='button'><p><i className="fa fa-address-book custom-icon"></i>File Receive Date</p> </button>
                    </div>
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeComplianceLetterIssueDateDisplay} type='button'><p><i className="fa fa-address-book custom-icon"></i>Compliance Letter Issue Date </p> </button>
                    </div>
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeRemarksDisplay} type='button'><p><i className="fa fa-address-book custom-icon"></i>  Remarks</p> </button>
                    </div>
                    <div className="detail d-flex flex-row">   
                        <button className='btn ' onClick={ChangeDcRecommendationDisplay} type='button'><p><i className="fa fa-address-book custom-icon"></i>DC Recommendation</p> </button>
                    </div>
                </div>
            </div>
            <div className="col-sm-9">
              <InquiryId display={InquiryIdDisplay} sendDataToParent={handleDataFromChild}></InquiryId>              
              <StatusInquiry display={StatusInquiryDisplay} ></StatusInquiry>
              <Nomenclature display={Nomenclatured}></Nomenclature>
              <File display={FileDisplay}></File>
              <Subject display={SubjDisplay}></Subject>
              <InquiryOrderBy display={InquiryDisplay}></InquiryOrderBy>
              <Opi display={OpiDisplay}></Opi>
              <LocOfInquiry display={LocOfInquiryDisplay}></LocOfInquiry>
              <Tors display={TorsDisplay} InquiryId={InquiryIdValue}></Tors>
              {/*  */}
              <BoiConstitutionDate display={BoiConstitutionDateDisplay}></BoiConstitutionDate>
              <SubmissionDate display={SubmissionDateDisplay}></SubmissionDate>
              <LatestSubmissionDate display={LatestSubmissionDateDisplay}></LatestSubmissionDate>
              <CompletionDate display={CompletionDateDisplay}></CompletionDate>
              <ForwardingDate display={ForwardingDateDisplay}></ForwardingDate>
              <ReForwardingDate display={ReForwardingDateDisplay}></ReForwardingDate>
              <DecisionDate display={DecisionDateDisplay}></DecisionDate>
              <FileRcvDate display={FileRcvDateDisplay}></FileRcvDate>
              <ComplianceLetterIssueDate display={ComplianceLetterIssueDateDisplay}></ComplianceLetterIssueDate>
              <Remarks display={RemarksDisplay}></Remarks>
              <DcRecommendation display={DcRecommendationDisplay}></DcRecommendation>
              <Enroute display={EnrouteDisplay}></Enroute>
              <Reminder display={ReminderDisplay} InquiryId={InquiryIdValue}></Reminder>
              <BoardOfInquiry display={BoardOfInquiryDisplay} InquiryId={InquiryIdValue}></BoardOfInquiry>
            </div>

        </div>
      </div>
      
        
    </>
  )
}

export default Dashboard