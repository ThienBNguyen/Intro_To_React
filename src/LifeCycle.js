import React from 'react'
class LifeCycle extends component {
    constructor() {
        super()
        this.state = {}
    }
    componentDidMount(){
// get the data i need to correctly display
    }
    componentWillReceiveProps(nextProps){
if (nextProps.whatever !== this.props.whatever){
    // do something important here
}
static getDerivedStateFromProps(props, state){
    
    //return the new, updated state based upon the props
}
getSnapshotBeforeUpdate(){
    //create a backup of the current way things are
}
shoundComponentUpdate(nextprops,nextUpdate){

}
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}
export default LifeCycle