import React from 'react';

interface buildingProps {
    buildingId: number,
    buildingName: string,
    departments: any[]
}

interface departmentObject {
    id: number,
    name: string,
    level: number,
}

interface buildingState {
    departments: departmentObject[]
}

class Building extends React.Component<buildingProps, buildingState, departmentObject> {
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
        const sortedDepartments = [...departments].sort((a, b) => {
            if (a.level === b.level) {
                return a.name > b.name ? 1 : -1
            } else {
                return a.level > b.level ? 1 : -1
            }
        });
        return (
            <div className='Building'>
                <h1 className='my-4 display-6 col-lg-6 offset-lg-3'>{this.props.buildingName} Building</h1>
                <ul className='list-group my-4 col-lg-6 offset-lg-3 shadow-sm'>
                    {sortedDepartments?.map(department => (
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
