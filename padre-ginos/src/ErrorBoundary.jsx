import { Component } from "react";
import { Link } from "@tanstack/react-router";


class ErrorBoundary extends Component{
    state = {hasError: false};
    static getDerivedStateFromError(){
        return {hasError: true};
    }
    componentDidCatch(error, info){
        // send to TrackJS/Sentry if you're using it to log errors
        console.error("caught some error wamique! ", error, info);
    }
    render(){ // every react class component must have a render method
        if(this.state.hasError){
            return (
                <div className="error-boundary">
                    <h2>Something went wrong!</h2>
                    <p>
                        There was an error in this page. <Link to="/">Click Here</Link> to go back to the home page.
                    </p>
                </div>
            )
        }
        return this.props.children; // if no error, be invisible, just display the children normally
    }
}


export default ErrorBoundary;