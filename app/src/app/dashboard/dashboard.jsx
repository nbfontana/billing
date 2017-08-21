import React, {Component} from 'react';
import {connect} from 'react-redux';

import ContentHeader from '../common/template/content-header';
import Content from '../common/template/content';
import ValueBox from '../common/widget/value-box';
import Row from '../common/layout/row';

class Dashboard extends Component {
    render() {
        const {credit, debt} = this.props.summary;
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

const mapStateToProps = state => ({summary: state.dashboard.summary});

export default connect(mapStateToProps)(Dashboard);