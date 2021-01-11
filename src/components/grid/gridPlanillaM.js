
import React, { Component, useState } from 'react'
import BootstrapTable, { CHECKBOX_STATUS_CHECKED } from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { Container, Rows } from 'react-bootstrap';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import {request} from '../helpers/helpers'
import { Button } from 'react-bootstrap';
import { isUndefined   } from 'util'
const {SearchBar}=Search;
export default class DataGridPlanilla extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows:[]
        }
        // if(this.props.showEditButton && !this.existsColumn("Editar")){
        //     this.props.columns.push(this.getEditButton())
        // }
        // if(this.props.showPlanilla && !this.existsColumn("Planilla")){
        //     this.props.columns.push(this.getshowPlanilla())
        // }
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        request.get(this.props.url).then(response => {
            this.setState({ rows:response.data.planillas});
           //console.log(response.data.planillas)
        }).catch(err => {
            console.log(err)
        })
    }
    existsColumn(colText){
        let col = this.props.columns.find(column=>column.text===colText)
        return  !isUndefined(col)
    }
    // getEditButton(){
    //     return{
    //         text:'Editar',
    //         formatter: (cell,row)=>{
    //                 //console.log(row)
    //                 return <Button onClick={()=>this.props.onClickEditButton(row)}
    //                 >
    //                     <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
    //                 </Button>
    //         }
    //     }
    // }
    // getshowPlanilla(){
    //     return{
    //         text:'Planilla',
    //         formatter: (cell,row)=>{
    //                 //console.log(row)
    //                 return <Button  onClick={()=>this.props.onClickEditButton(row)}
    //                 >Planilla
    //                     {/* <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> */}
    //                 </Button>
    //         }
    //     }
    // }
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

