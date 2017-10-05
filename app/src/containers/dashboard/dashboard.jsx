import React, {Component} from 'react';
import axios from 'axios';

import ContentHeader from 'components/template/content-header';
import Content from 'components/template/content';
import ValueBox from 'components/widget/value-box';
import Row from 'components/layout/row';

const BASE_URL = 'http://localhost:3003/api';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {credit: 0, debt: 0}
    }

    componentWillMount() {
        axios.get(`${BASE_URL}/billing-cycles/summary`).then((response) => {
            this.setState(response.data);
        })
    }

    render() {
        const {credit, debt} = this.state;
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0"/>
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${credit}`}
                                  text="Total de Créditos"/>
                        <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${debt}`}
                                  text="Total de Débitos"/>
                        <ValueBox cols="12 4" color="blue" icon="money" value={`R$ ${credit - debt}`}
                                  text="Valor Consolidado"/>
                    </Row>
                </Content>
            </div>
        );
    }
}

export default Dashboard;