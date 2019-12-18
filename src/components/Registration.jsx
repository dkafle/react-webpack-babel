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
        'hiking',
        'biking',
        'reading',
        'swimming',
        'walking'
      ],
      isValid: false
    };
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  getHobbies() {
    return this.state.hobbies.map((item, index) => {
      return <option key={index}>{item}</option>;
    });
  }

  render() {
    return(
      <form>
        <div className={styles.formContainer}>
          <div className={styles.formLabel}>
            First Name
          </div>
          <div className={styles.formInput}>
            <input
              type="text"
              name="fname"
              value={this.state.fname}
              onChange={(evt) => this.handleInputChange(evt)}
            />
          </div>
          <div className={styles.formLabel}>
            Last Name
          </div>
          <div className={styles.formInput}>
            <input type="text" name="lname" value={this.state.lname}/>
          </div>
          <div className={styles.formLabel}>
            Gender
          </div>
          <div className={styles.formInput}>
            <input
              type="radio"
              name="gender"
              value="m"
              onClick={(evt) => this.handleInputChange(evt)}
              checked={this.state.gender === 'm' ? 'checked' : ''} />Male &nbsp;
            <input
              type="radio"
              name="gender"
              value="f"
              onClick={(evt) => this.handleInputChange(evt)}
              checked={this.state.gender === 'f' ? 'checked' : ''} />Female
          </div>
          <div className={styles.formLabel}>
            Hobbies
          </div>
          <div className={styles.formInput}>
            <select name="hobby">
              {this.getHobbies()}
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
