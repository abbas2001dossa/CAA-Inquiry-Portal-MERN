import React,{useState} from 'react'

const BoiConstitutionDate=(props)=> {

    const [BoiConstitutionDate, setBoiConstitutionDate] = useState('');

    const visible = {
        display: props.display,
    };

    const handleBoiConstitutionDateChange = (event) => {
        setBoiConstitutionDate(event.target.value);
        const no = document.getElementById('BoiConstitutionDatebtn');
        no.innerHTML="Apply";
        console.log(BoiConstitutionDate);
    };

    function btnClick() {
        const id = document.getElementById('BoiConstitutionDatebtn');
        id.innerHTML="Applied";
    }

  return (
    <>
        <div style={visible}>
            <div id="BoiConstitutionDate" className="bg-white dim">
                <h5>Select constitution date for Board Of Inquiry :  </h5>
                <input value={BoiConstitutionDate} onChange={handleBoiConstitutionDateChange} type="date"  />
            </div>
            <button id="BoiConstitutionDatebtn" type="button" onClick={btnClick} className="btn btn-primary">
                Apply
            </button>
        </div>
    </>
  )
}

export default BoiConstitutionDate