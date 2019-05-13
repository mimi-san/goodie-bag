import React, {Component} from 'react'
import {candyThunk} from '../store'
import { connect } from 'react-redux';

class CandyList extends Component {
    componentDidMount(){
        this.props.getCandies()
    }
    render(){
        return (
            <div>
                <h3>Candies:</h3>
                <ul>
                    {this.props.candies.map(candy => (
                        <div>
                        <li key={candy.id}>{candy.name}</li>
                        <img src={candy.imageUrl} />
                        </div>
                    ))}

                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCandies: () => dispatch(candyThunk())
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        candies: state.allCandies
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandyList)
