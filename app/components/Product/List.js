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
        axios.get('https://apimagiccatalog.herokuapp.com/api/valibrasil/product/' + category)
            .then(function (response) {
                console.log(1);
                _this.setState({ items: response.data.rows });
            });
    }

    render() {
        if (this.state.items) {
            return (
                <div>
                    <div className="listproducts--banner">
                        <span className="listproducts--banner__title"> Temos mais de {this.state.items.length} itens em  {this.state.category}!</span>
                        <span className="listproducts--banner__subtitle"> Não encontrou o que procurava ou precisa de um orçamento? Deixe-nos saber! Entre em contato pelo email valibrasil@terra.com.br e conte-nos a sua necessidade.</span>
                    </div>
                    <div className="listproducts">
                        <div className="listproducts--list">
                            <ul className="products--list">
                                {this.state.items.map((item, index) => (
                                    <Card product={item} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
        return '';
    }
}

export default Detail;