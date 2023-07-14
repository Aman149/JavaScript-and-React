import './Form.css';

function Form() {
  return (
    <form className="Form" >
        <label> First Name</label>
        <input type="text" />
        <label> Last Name</label>
        <input type="text" />
        <label> Yes </label>
        <input type="radio" id="select" />
        <label> No </label>
        <input type="radio" id="select" />
        <button type="Submit"> Submit</button>
    </form>
  );
}

export default Form;
