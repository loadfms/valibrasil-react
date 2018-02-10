import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: undefined
        }
    }

    componentWillMount() {
        this.loaditems(this.props.match.params.name);
    }

    componentWillReceiveProps(nextProps) {
        this.loaditems(nextProps.match.params.name);
    }

    loaditems(category) {
        let _this = this;
        axios.get('https://apimagiccatalog.herokuapp.com/api/valibrasil/product/' + category)
            .then(function (response) {
                console.log(1);
                _this.setState({ items: response.data.rows });
            });
    }

    render() {
        if (this.state.items) {
            return (
                <div className="listproducts">
                    <div className="listproducts--list">
                        <ul className="products--list">
                            {this.state.items.map((item, index) => (
                                <Card product={item} />
                            ))}
                        </ul>
                    </div>
                </div>
            );
        }
        return '';
    }
}

export default Detail;