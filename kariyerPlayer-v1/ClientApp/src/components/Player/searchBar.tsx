import * as React from 'react'

class SearchBar extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <label className="search">
                <input type="search" placeholder="Meshur adi?" />
            </label>
        )
    }

}

export default SearchBar;