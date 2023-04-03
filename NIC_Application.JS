
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {

  const [nic, setNic] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  
  const handleSearch = (e) => {

    e.preventDefault();
    // Assuming the NIC number is a string of length 10
    if (nic.length === 10) {
      // Extracting DOB and gender from the NIC number
      const year = parseInt(nic.substring(0, 2));
      const days = parseInt(nic.substring(2, 5));
      const genderDigit = parseInt(nic.substring(3, 2));
      // const genderDigit = parseInt(nic.substring(9, 10));
      let gender = '';
      let month = '';
      let day = ' ';

      if (genderDigit === 0 || genderDigit === 1 || genderDigit === 2 || genderDigit === 3 ) {
        gender = 'Male';
      } else if (genderDigit === 5 || genderDigit === 6 || genderDigit === 7 || genderDigit === 8) {
        gender = 'Female';
      } else {
        gender = 'Other';
      }

      //for Male dob

      if (days/31 > 0 && days/31 < 1  )
      {
        month ="1"; //January
        day = days-0;
      }

      if (days/29 > 1 && days/29 < 2  )
      {
        month ="2"; //February
        day = days-31;
      }


      if (days/31 > 2 && days/31 < 3 )
      {
        month ="3"; //March
        day = days-60;
      }

      if (days/30 > 3 && days/30 < 4 )
      {
        month ="4"; //April
        day = days-91;
      }

      if (days/31 > 4 && days/31 < 5  )
      {
        month ="5"; //May
        day = days-121;
      }

      if (days/30 > 5 && days/30 < 6  )
      {
        month ="6"; //June
        day = days-152;
      }

      
      if (days/31 > 6 && days/31 < 7 )
      {
        month ="7"; //July
        day = days-182;
      }
      if (days/31 > 7 && days/31 < 8 )
      {
        month ="8"; //August
        day = days-213;
      }

      if (days/30 > 8 && days/30 < 9 )
      {
        month ="9"; //September
        day = days-244;
      }

      if (days/31 > 9 && days/31 < 10 )
      {
        month ="10"; //October
        day = days-274;
      }
      if (days/30 > 10 && days/30 < 11 )
      {
        month ="11"; //November
        day = days-305;
      }
      if (days/31 > 11 && days/31 < 12 )
      {
        month ="12"; //December
        day = days-335;
      }


      //for female dob

      if ((days-500)/31 > 0 && (days-500)/31 < 1  )
      {
        month ="1"; //January
        day = days-500-0;
      }

      if ((days-500)/29 > 1 && (days-500)/29 < 2 )
      {
        month ="2"; //February
        day = days-500-31;
      }

      if ((days-500)/31 > 2 && (days-500)/31 < 3 )
      {
        month ="3"; //March
        day = days-500-60;
      }

      if ((days-500)/30 > 3 && (days-500)/30 < 4 )
      {
        month ="4"; //April
        day = days-500-91;
      }

      if ((days-500)/31 > 4 && (days-500)/31 < 5  )
      {
        month ="5"; //May
        day = days-500-121;
      }

      if ((days-500)/30 > 5 && (days-500)/30 < 6  )
      {
        month ="6"; //June
        day = days-500-152;
      }

      
      if ((days-500)/31 > 6 && (days-500)/31 < 7 )
      {
        month ="7"; //July
        day = days-500-182;
      }
      if ((days-500)/31 > 7 && (days-500)/31 < 8 )
      {
        month ="8"; //August
        day = days-500-213;
      }

      if ((days-500)/30 > 8 && (days-500)/30 < 9 )
      {
        month ="9"; //September
        day = days-500-244;
      }

      if ((days-500)/31 > 9 && (days-500)/31 < 10 )
      {
        month ="10"; //October
        day = days-500-274;
      }
      if ((days-500)/30 > 10 && (days-500)/30 < 11 )
      {
        month ="11"; //November
        day = days-500-305;
      }
      if ((days-500)/31 > 11 && (days-500)/31 < 12 )
      {
        month ="12"; //December
        day = days-500-335;
      }



   


      // Setting the DOB and gender states
      setDob(`19${year}/${month}/${day}`);
      setGender(gender);
    } 

    else if (nic.length === 12) {
      // Extracting DOB and gender from the NIC number
      const year = parseInt(nic.substring(4, 0));
      const days = parseInt(nic.substring(7, 4));
      const genderDigit = parseInt(nic.substring(5, 4));
      let gender = '';
      let month = '';
      let day = ' ';

      if (genderDigit === 1 || genderDigit === 2 || genderDigit === 3 ) {
        gender = 'Male';
      } else if (genderDigit === 5 || genderDigit === 6 || genderDigit === 7 || genderDigit === 8) {
        gender = 'Female';
      } else {
        gender = 'Other';
      }

       //for Male dob

       if (days/31 > 0 && days/31 < 1  )
       {
         month ="1"; //January
         day = days-0;
       }
 
       if (days/29 > 1 && days/29 < 2 )
       {
         month ="2"; //February
         day = days-31;
       }
 
       if (days/31 > 2 && days/31 < 3 )
       {
         month ="3"; //March
         day = days-60;
       }
 
       if (days/30 > 3 && days/30 < 4 )
       {
         month ="4"; //April
         day = days-91;
       }
 
       if (days/31 > 4 && days/31 < 5  )
       {
         month ="5"; //May
         day = days-121;
       }
 
       if (days/30 > 5 && days/30 < 6  )
       {
         month ="6"; //June
         day = days-152;
       }
 
       
       if (days/31 > 6 && days/31 < 7 )
       {
         month ="7"; //July
         day = days-182;
       }
       if (days/31 > 7 && days/31 < 8 )
       {
         month ="8"; //August
         day = days-213;
       }
 
       if (days/30 > 8 && days/30 < 9 )
       {
         month ="9"; //September
         day = days-244;
       }
 
       if (days/31 > 9 && days/31 < 10 )
       {
         month ="10"; //October
         day = days-274;
       }
       if (days/30 > 10 && days/30 < 11 )
       {
         month ="11"; //November
         day = days-305;
       }
       if (days/31 > 11 && days/31 < 12 )
       {
         month ="12"; //December
         day = days-335;
       }
 
 
       //for female dob
 
       if ((days-500)/31 > 0 && (days-500)/31 < 1  )
       {
         month ="1"; //January
         day = days-500-0;
       }
 
       if ((days-500)/29 > 1 && (days-500)/29 < 2 )
       {
         month ="2"; //February
         day = days-500-31;
       }
 
       if ((days-500)/31 > 2 && (days-500)/31 < 3 )
       {
         month ="3"; //March
         day = days-500-60;
       }
 
       if ((days-500)/30 > 3 && (days-500)/30 < 4 )
       {
         month ="4"; //April
         day = days-500-91;
       }
 
       if ((days-500)/31 > 4 && (days-500)/31 < 5  )
       {
         month ="5"; //May
         day = days-500-121;
       }
 
       if ((days-500)/30 > 5 && (days-500)/30 < 6  )
       {
         month ="6"; //June
         day = days-500-152;
       }
 
       
       if ((days-500)/31 > 6 && (days-500)/31 < 7 )
       {
         month ="7"; //July
         day = days-500-182;
       }
       if ((days-500)/31 > 7 && (days-500)/31 < 8 )
       {
         month ="8"; //August
         day = days-500-213;
       }
 
       if ((days-500)/30 > 8 && (days-500)/30 < 9 )
       {
         month ="9"; //September
         day = days-500-244;
       }
 
       if ((days-500)/31 > 9 && (days-500)/31 < 10 )
       {
         month ="10"; //October
         day = days-500-274;
       }
       if ((days-500)/30 > 10 && (days-500)/30 < 11 )
       {
         month ="11"; //November
         day = days-500-305;
       }
       if ((days-500)/31 > 11 && (days-500)/31 < 12 )
       {
         month ="12"; //December
         day = days-500-335;
       }
 

      
      // Setting the DOB and gender states

      //setDob(`19${year}/${month}/${day}`);
      setDob(`${year}/${month}/${day}`);
      
     
      setGender(gender);
    } 
    
    else {
      alert('Please enter a valid NIC number');
    }
  };

  return (
    <div className="App">
      <div className="BootstrapCard2">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title style={{ color: '#00fa9a' }}>NIC Application</Card.Title>
            <Card.Text style={{ color: '#00008b' }}>
              This application provides your Gender and DOB details.
            </Card.Text>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>NIC Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter NIC Number"
                  value={nic}
                  onChange={(e) => setNic(e.target.value)}
                />
              </Form.Group>
              <Button variant="outline-primary" onClick={handleSearch}>
                SUBMIT
              </Button>
            </Form>
            <div className="DOBView">DOB: {dob}</div>
            <div className="Gender">Gender: {gender}</div>
            <div className="NIC">NIC: {nic}</div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;

