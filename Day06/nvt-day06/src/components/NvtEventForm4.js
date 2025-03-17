import React, { Component } from 'react'

class NvtEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvtSelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    nvtHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.nvtSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
        
        this.setState({
            nvtSelectCheckBox:selectedOptions
        });
    }

    // Submit form
    nvtHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert("Select:" + this.state.nvtSelectCheckBox);
    }
  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.nvtSelectCheckBox.includes("Apple")}
              onChange={this.nvtHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.nvtSelectCheckBox.includes("Banana")}
              onChange={this.nvtHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.nvtSelectCheckBox.includes("Orange")}
              onChange={this.nvtHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit" onClick={this.nvtHandleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default NvtEventForm4;
