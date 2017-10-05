import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {create, update, remove, init} from "./billing-cycle.actions";

import ContentHeader from 'components/template/content-header';
import Content from 'components/template/content';
import Tabs from 'components/tab/tabs';
import TabsHeader from 'components/tab/tabs-header';
import TabHeader from 'components/tab/tab-header';
import TabsContent from 'components/tab/tabs-content';
import TabContent from 'components/tab/tab-content';
import BillingCycleList from "./billing-cycle.list";
import BillingCycleForm from "./billing-cycle.form";

class BillingCycle extends Component {

    componentWillMount() {
        this.props.init();
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
                                <BillingCycleForm onSubmit={this.props.create}
                                                  submitClass='primary' submitLabel='Incluir'/>
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <BillingCycleForm onSubmit={this.props.update}
                                                  submitClass='info' submitLabel='Alterar'/>
                            </TabContent>
                            <TabContent id="tabDelete">
                                <BillingCycleForm onSubmit={this.props.remove} readOnly={true}
                                                  submitClass='danger' submitLabel='Exluir'/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({init, create, update, remove}, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycle);