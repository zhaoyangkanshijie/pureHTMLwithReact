class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'hello world'
        };
    }
    componentDidMount(){
        console.log(this.state.message);
    }
    btnAction(){
        console.log(this.state.message + '按钮点击了');
        this.state.message = new Date();
    }
    render() {
        let visible = false;
        let value = "visible";
        let arr = ['a', 'b', 'c', 'd'];
        return (
            <div>
                <h1>Hello world!</h1>
                <div>
                    {visible ? <p>{value}</p>:<p>not {value}</p>}
                </div>
                <ul>
                    {
                        arr.map((item, index)=>{
                            return <li key={index}>{item}----{index}</li>
                        })
                    }
                </ul>
                <button onClick={()=>this.btnAction()}>按钮</button>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'))
