import React from 'react';

interface AppProps {
    apiUrl: string
}

interface AppState {
    error: any,
    departments: any[],
    isLoaded: boolean
}

class Building extends React.Component<AppProps, AppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            error: null,
            departments: [],
            isLoaded: false
        };
    }


    componentDidMount() {
        fetch(this.props.apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        error: null,
                        isLoaded: true,
                        departments: result.departments
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        const { error, isLoaded, departments } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div className="d-flex align-items-center">
                    <strong>Loading...</strong>
                    <div className="spinner-border ms-auto text-primary my-4" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            );
        } else {
            return (
                <ul className='list-group my-4'>
                    {departments?.map(department => (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={department.id}>
                            {department.name}
                            <span className='badge bg-primary rounded-pill'>Level: {department.level}</span>
                        </li>
                    ))}
                </ul>
            );
        }
    }
};

export default Building;
