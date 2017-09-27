import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectTab, showTabs} from '../common/tab/tab.actions';
import {create} from "./billing-cycle.actions";

import ContentHeader from '../common/template/content-header';
import Content from '../common/template/content';
import Tabs from '../common/tab/tabs';
import TabsHeader from '../common/tab/tabs-header';
import TabHeader from '../common/tab/tab-header';
import TabsContent from '../common/tab/tabs-content';
import TabContent from '../common/tab/tab-content';

import BillingCycleList from "./billing-cycle.list";
import BillingCycleForm from "./billing-cycle.form";

class BillingCycle extends Component {

    componentWillMount() {
        this.props.selectTab('tabList');
        this.props.showTabs('tabList', 'tabCreate');
    }

    render() {
        return (
            <div>
                <ContentHeader title="Ciclos de Pagamentos" small="Cadastro"/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tabList"/>
                            <TabHeader label="Incluir" icon="plus" target="tabCreate"/>
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate"/>
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete"/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <BillingCycleList/>
                            </TabContent>
                            <TabContent id="tabCreate">
                                <BillingCycleForm onSubmit={this.props.create}/>
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <BillingCycleForm/>
                            </TabContent>
                            <TabContent id="tabDelete">
                                <h1>Excluir</h1>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    showTabs, selectTab, create
}, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);