import React from 'react';

interface buildingProps {
    buildingId: number,
    buildingName: string,
    departments: any[]
}

interface buildingState {
    departments: any[]
}

class Building extends React.Component<buildingProps, buildingState> {
    constructor(props: any) {
        super(props);
        this.state = {
            departments: []
        };
    }

    componentDidMount() {
        this.setState({
            departments: this.props.departments.filter(obj => obj.building_id === this.props.buildingId)
        });
    }

    render() {
        const { departments } = this.state;
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
};

export default Building;
