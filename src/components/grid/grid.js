
import React, { Component, useState } from 'react'
import BootstrapTable, { CHECKBOX_STATUS_CHECKED } from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { Container, Rows } from 'react-bootstrap';

import {request} from '../helpers/helpers'
const {SearchBar}=Search;
export default class DataGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows:[]
        }
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        request.get(this.props.url).then(response => {
            this.setState({ rows:response.data.planillas});
           //console.log(response.data)
        }).catch(err => {
            console.log(err)

        })

    }
    render() {

        const options = {
            custom: true,
            totalSize:this.state.rows.length
        };
        return (
            <ToolkitProvider
            keyField="tp"
            data={this.state.rows}
            columns={this.props.columns}
            search
        >
            {
                props => (
                    <div>
                        
                        <SearchBar {...props.searchProps} />
                        <hr />
                        <PaginationProvider
                            pagination={paginationFactory(options)}
                        >
                            {
                                ({
                                    paginationProps,
                                    paginationTableProps
                                }) => (
                                    <div>
                                        <SizePerPageDropdownStandalone
                                            {...paginationProps}
                                        />
                                        <BootstrapTable
                                            keyField="bt"
                                            data={this.state.rows}
                                            columns={this.props.columns}
                                            {...paginationTableProps}
                                            {...props.baseProps}
                                        />
                                        <PaginationListStandalone
                                            {...paginationProps}
                                        />
                                    </div>
                                )
                            }
                        </PaginationProvider>
                     
                    </div>
                )
            }
        </ToolkitProvider>
            

        )
    }
}

