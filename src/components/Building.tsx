import React from 'react';
import Loading from './Loading';

interface AppProps {
    buildingId: number,
    buildingName: string,
    departments: any[]
}

interface AppState {
    error: any,
    departments: any[],
    isLoaded: boolean,
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
        this.setState({
            error: null,
            isLoaded: true,
            departments: this.props.departments.filter(obj => obj.building_id === this.props.buildingId)
        });
    }

    render() {
        const { error, isLoaded, departments } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <Loading />
            );
        } else {
            return (
                <div className='Building'>
                    <h1 className='my-4 display-6 col-lg-6 offset-lg-3'>{this.props.buildingName} Building</h1>
                    <ul className='list-group my-4 col-lg-6 offset-lg-3 shadow-sm'>
                        {departments?.map(department => (
                            <li className='list-group-item d-flex justify-content-between align-items-center' key={department.id}>
                                {department.name}
                                <span className='badge bg-primary rounded-pill'>Level: {department.level}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
};

export default Building;
