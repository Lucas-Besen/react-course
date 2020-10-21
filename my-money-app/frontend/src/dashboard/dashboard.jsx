import React, { Component } from 'react'
import ContentHeader from '../common/templete/contentHeader'
import Content from '../common/templete/content'
import ValueBox from '../common/widget/valueBox'
import valueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'
class Dashboard extends Component{
    render(){
        return(
            <div>
                <ContentHeader title='Dashboard' small='versao 1.0'/>
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value='R$ 200' text='total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card' value='R$ 200' text='total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money' value='R$ 0' text='valor Consilidado' />
                    </Row>
                </Content>
            </div>
        )
    }
}


export default Dashboard