import React from 'react';
import './MedicalInfo.css';

class MedicalInfo extends React.Component {
  render() {
    return (
      <body>
        <div className = "category" id = "red">
          <h1 className = "titleHeader">Bleeding</h1>
          <h2>
            Cover the wound with a gauze or a cloth and apply direct pressure to stop the blood flow. Don't remove the cloth. Add more layers if needed. The cloth will help clots form to stop the flow. <br/><br/>
            In most cases, applying a tourniquet may do more damage to the limb than good. The 2010 American Heart Association guidelines also discount the value of elevation and using pressure points.</h2>
        </div>
        <div className = "category" id = "orange">
          <h1 className = "titleHeader">Burns</h1>
          <h2>
            Flush the burned area with cool running water for several minutes. Do not use ice. <br/><br/>
            Apply a light gauze bandage. <br/><br/>
            Do not apply ointments, butter, or oily remedies to the burn. <br/><br/>
            Take ibuprofen or acetaminophen for pain relief if necessary. <br/><br/>
            Do not break any blisters that may have formed.</h2>
        </div>
      </body>
    )
  }
}

export default MedicalInfo;
