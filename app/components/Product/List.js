import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: undefined,
            category: ''
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
        _this.setState({ category: category });
        axios.get('http://api.loadfms.com:8081/api/valibrasil/product/' + category)
            .then(function (response) {
                _this.setState({ items: response.data.rows });
                document.title = _this.props.match.params.name.charAt(0).toUpperCase() + _this.props.match.params.name.slice(1)  + " na Valibrasil"
            });
    }

    render() {
        if (this.state.items) {
            return (
                <div className="listproducts">
                    <span className="listproducts--title">{this.state.category}</span>
                    <hr />
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