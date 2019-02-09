import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return (
            <section className="section">
                <form onSubmit={this.onFormSubmit} className='form box'>
                    <div className='field'>
                        <label className='label'>
                            Video Search
                        </label>
                        <div className="control">
                            <input
                                className='input'
                                value={this.state.term}
                                type="text"
                                onChange={this.onInputChange}
                            />
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}

export default SearchBar;