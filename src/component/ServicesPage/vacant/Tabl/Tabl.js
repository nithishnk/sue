import React, { Component } from 'react'
import {Tabs,Tab,Sonnet} from 'react-bootstrap'

export default class Tabl extends Component {
  render() {
    return (
      <div className="mt-5" style={{marginLeft:"4%",marginRight:"4%"}}>
<Tabs defaultActiveKey="all" className="lineremoval" transition={false} id="noanim-tab-example">
<Tab eventKey="all" title="All Services">

</Tab>
<Tab eventKey="design" title="Vacant">

</Tab>
<Tab eventKey="interior" title="Occupied">

</Tab>
<Tab eventKey="design1" title="Individuals">

</Tab>
<Tab eventKey="design2" title="Brokers">

</Tab>
<Tab eventKey="design3" title="Real Estate">

</Tab>

</Tabs>
</div>
    )
  }
}
