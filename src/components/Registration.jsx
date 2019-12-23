import React from 'react';
import styles from './form.sass';

const TextInput = props => {
  const { type, name, value, onChange } = props;
  return <input
    type={type}
    name={name}
    value={value}
    onChange={onChange} />
}

const RadioInput = props => {
  const { name, value, onClick, checkedValue, displayValue } = props;
  return (<div className={styles.radioWrap}>
    <input
      type="radio"
      name={name}
      value={value}
      onClick={onClick}
      checked={value === checkedValue ? 'checked' : ''}
    />
      {displayValue}
    </div>);
}

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      gender: null,
      hobby: '',
      isValid: false
    };
    // this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  getOptions() {
    const hobbies = [
      'hiking',
      'biking',
      'reading',
      'swimming',
      'walking'
    ];
    return hobbies.map((item, index) => {
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
            <TextInput
              type="text"
              name="fname"
              value={this.state.fname}
              // onChange={this.handleInputChange.bind(this)}
              onChange={evt => this.handleInputChange(evt)}
            />
          </div>
          <div className={styles.formLabel}>
            Last Name
          </div>
          <div className={styles.formInput}>
            <TextInput
              type="text"
              name="lname"
              value={this.state.lname}
              onChange={this.handleInputChange.bind(this)} />
          </div>
          <div className={styles.formLabel}>
            Gender
          </div>
          <div className={styles.formInput}>
            <RadioInput
              name="gender"
              value="m"
              onClick={this.handleInputChange.bind(this)}
              checkedValue={this.state.gender}
              displayValue={'Male'} />
            <RadioInput
              name="gender"
              value="f"
              onClick={this.handleInputChange.bind(this)}
              checkedValue={this.state.gender}
              displayValue={'Female'}
            />
          </div>
          <div className={styles.formLabel}>
            Hobbies
          </div>
          <div className={styles.formInput}>
            <select name="hobby">
              <option value="" selected></option>
              {this.getOptions()}
            </select>
          </div>

          <div>{
            !this.state.isvalid
            ? 'Not valid.'
            : 'Ready submit'
          }</div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}


export default Registration;
