import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// App Class-Based Component
class App extends React.Component {
    //refactoring the constructor function using babel compiler
    state = { lat: null, errorMessage: '' }

    // componentDidMount method
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    // Helper function
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please accept location request" />;
    }
    
    // Render Method require if using class-based component
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

// To render App Component
ReactDOM.render(<App />, document.querySelector('#root'));