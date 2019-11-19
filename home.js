import * as actions from './app';

class Home extends Component {

state ={
    albums:[]
}

    componentDidMount(){
        actions.getAlbums().then(item => this.setState({albums : item})

    }
}

render (){

console.log(this.s)
    return <div
}