import React from 'react';
import styles from './form.sass';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      gender: null,
      hobbies: [
      ],
      isValid: false
    };
  }

  render() {
    return(
      <form>
        <div className={styles.formContainer}>
          <div className={styles.formLabel}>
            First Name
          </div>
          <div className={styles.formInput}>
            <input type="text" value={this.state.fname}/>
          </div>
          <div className={styles.formLabel}>
            Last Name
          </div>
          <div className={styles.formInput}>
            <input type="text" value={this.state.lname}/> 
          </div>
          <div className={styles.formLabel}>
            Gender
          </div>
          <div className={styles.formInput}>
            <input type="radio" name="gender" value="m"/>Male &nbsp; 
            <input type="radio" name="gender" value="f"/>Female 
          </div>
          <div className={styles.formLabel}>
            Hobbies
          </div>
          <div className={styles.formInput}>
            <select name="hobby">
              <option></option>
            </select>
          </div>

          <div>{
            !this.state.isvalid
            ? 'Not ready to fill.' 
            : 'Ready submit'
          }</div> 
          <button>Submit</button>
        </div>
      </form>
    );
  }
}


export default Registration;
