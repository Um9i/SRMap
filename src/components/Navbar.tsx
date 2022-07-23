import React from 'react';

interface navbarProps {
    departments: any[]
}

interface navbarState {
    departments: any[],
    value: any,
}

class Navbar extends React.Component<navbarProps, navbarState> {
    constructor(props: any) {
        super(props);
        this.state = { value: '', departments: [] };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event: any) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    componentDidMount() {
        this.setState({
            departments: this.props.departments
        });
    }
    render() {
        const { departments } = this.props;
        return (
            <div className='Navbar'>
                <nav className='navbar fixed-top navbar-dark bg-primary'>
                    <div className='container my-1'>
                        <form className='d-flex w-100' onSubmit={this.handleSubmit}>
                            <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' value={this.state.value} onChange={this.handleChange}></input>
                            <i className='bi bi-search-heart text-white m-2'></i>
                        </form>
                    </div>
                </nav>
                <div className='container pt-4'>
                    <ul className='list-group mt-5'>
                        {departments?.filter((val) => {
                            if (this.state.value === "") {
                                return
                            }
                            if (val.name.toLowerCase().includes(this.state.value.toLowerCase())) {
                                return val
                            }
                        }).map((val, key) => {
                            return (
                                <li key={key} className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{val.building_name} Building</div>
                                        {val.name}
                                    </div>
                                    <span className="badge bg-primary rounded-pill">Level: {val.level}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;