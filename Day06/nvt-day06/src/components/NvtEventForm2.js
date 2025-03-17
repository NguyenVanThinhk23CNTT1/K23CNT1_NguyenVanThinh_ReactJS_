import React, { Component } from 'react'

class NvtEventForm2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nvtCourse: 'CSS3',
        }
    }
    // Hàm xử lý sự kiện khi thay đổi khóa học 
    nvtHandleChange = (event) => {
        // Cập nhật lại state
        this.setState(
            {
                nvtCourse:event.target.value,
            })
    }
    // Hàm xử lý sự kiện khi submit form
    nvtHandleSubmit = (event) => {
        alert("Khóa học bạn chọn: " + this.state.course);
        event.prventDefault();
    }

  render() {
    return (
        <div className='alert alert-danger'>
            <h2>Form Select</h2>
            <form>
                <label htmlFor=''>
                    <select name='nvtCourse' id='nvtCourse' 
                        value={this.state.nvtCourse}
                        onChange={this.HandleChange}>
                            <option value="html">HTML</option>
                            <option value="CSS3">CSS</option>
                            <option value="Javarscrit">Javarscirt</option>
                            <option value="Jquery">Jquery</option>
                            <option value="Bootstrap">Bootstrap</option>
                    </select>
                </label>
                <button className='btn btn-primary'>Click here</button>
            </form>
        </div>
    );
  }
}

export default NvtEventForm2;