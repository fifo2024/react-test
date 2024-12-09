// import React, { useEffect } from "react";
import React, { Component } from "react";

interface IState {
    count: number;
}

class About extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
    }

    state: IState = {
        count: 0,
    };

    componentDidMount(): void {}

    addCount = () => {
        this.setState({
            count: this.state.count + 1,
        });
        // this.state.ws.webSocketSendMsg("joke");
    };

    render() {
        return (
            <div>
                <p>This is Home Page.</p>
                count: {this.state.count}
                <button onClick={this.addCount}>点击加1</button>
                <a href="tencent://">打开本地QQ应用</a>
            </div>
        );
    }
}

export default About;
