import React, { Component } from 'react';

class NvtEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvtName:'Thịnh',
            nvtAge:19,
            nvtGender:'Female',
            nvtCourse:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    nvtHandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value,
        })
    }

    // Sự kiện khi submit form
    nvtHandleSubmit = (ev) => {
        ev.preventDefault();
        alert(this.state.nvtName + "\n" + this.state.nvtAge);

        // Chuyển dữ liệu trên form lên App component (NvtApp);
        this.props.onNvtHandleSubmit(this.state);
    }

    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                
                <form onSubmit={this.nvtHandleSubmit}>
                    <div>
                        <label htmlFor='nvtName'>Student Name:</label>
                        <input type='text' name='nvtName' id='nvtName' 
                            value={this.state.nvtName}
                            onChange={this.nvtHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='nvtAge'>Student Age:</label>
                        <input type='text' name='nvtAge' id='nvtAge' 
                            value={this.state.nvtAge}
                            onChange={this.nvtHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='nvtGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='nvtGender' id='nvtMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.nvtGender === 'Male'}
                                onChange={this.nvtHandleChange} />
                            <label htmlFor='nvtMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='nvtGender' id='nvtFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.nvtGender === 'Female'}
                                onChange={this.nvtHandleChange} />
                            <label htmlFor='nvtFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='nvtGender' id='nvtNone' className='mx-2'
                                value={'None'}
                                checked={this.state.nvtGender === 'None'}
                                onChange={this.nvtHandleChange} />
                            <label htmlFor='nvtNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='nvtCourse'>
                            <select name='nvtCourse' id='nvtCourse' 
                                    value={this.state.nvtCourse}
                                    onChange={this.nvtHandleChange} >
                                <option value={'HTML5'}>HTML5</option>
                                <option value={'CSS3'}>CSS3</option>
                                <option value={'Javascript'}>Javascript</option>
                                <option value={'Jquery'}>Jquery</option>
                                <option value={'Bootstrap'}>Bootstrap</option>
                            </select>
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default NvtEventForm5;
