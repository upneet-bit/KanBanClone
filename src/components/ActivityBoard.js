import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react'
import Card from '../layout/Card';

export default class Activityboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: props.backlogData,
            listName: props.listName,
            modalType: '',
            cardPassData: {}
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            listData: nextProps.backlogData
        })
    }
    onDragOver(e) {
        e.preventDefault();
    }
    onDragStart(ev, id) {
        ev.dataTransfer.setData('id', id);
    }
    onDrop = (ev, cat) => {
        this.props.onDropEvent(ev, cat);
    }
    renderList(data, idx) {
        return <Card key={idx} data={data} onDragStart={this.onDragStart} /> 
    }
    render() {
        return (
            <div className='w-[25%] mx-6 my-8 bg-gray-100 rounded-tl-2xl rounded-tr-2xl min-w-fit xl:min-w-[12px]'>
                <div className='box-border align-top ' 
                    onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => { this.onDrop(e, this.state.listName) }}>
                    
                    <div className="flex h-16 p-4 align-middle">
                        <div><FontAwesomeIcon icon={faCircle} size='2xs' color="#7AC555" style={{paddingRight:'6px'}} /></div>
                        <div className="font-medium leading-5 text-left text-gray-900">{this.state.listName}</div>
                        <div className="box-border flex items-center justify-center w-5 h-5 p-1 ml-3 text-xs bg-gray-300 rounded-full gray-700 text-">
                            {this.state.listData.length}</div>
                    </div>
                    
                    <div className="h-0 mx-4 border-2 border-purple-800"></div>

                    <div className="mt-5 mb-3 rounded-lg ">
                        
                        <div >
                            {this.state.listData.map((data, index) => {
                                return this.renderList(data, index);
                            })}
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}