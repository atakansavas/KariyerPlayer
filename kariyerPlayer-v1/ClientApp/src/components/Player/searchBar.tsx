import * as React from 'react'
import { connect } from 'react-redux';
import * as TrackSearch from '../../store/TrackSearch';
import { RouteComponentProps } from 'react-router';
import * as Model from '../../store/model/model'
import { ApplicationState } from '../../store';

type SpotifyProps =
    Model.TrackList & typeof TrackSearch.actionCreators
    & RouteComponentProps<{ query: string }>;


class SearchBar extends React.PureComponent<SpotifyProps> {

    // This method is called when the component is first added to the document
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }


    private ensureDataFetched() {
        console.log(this.props);
        const query = this.props.query || "ceza";

        this.props.requestSearch(query);
    }

    render() {
        return (
            <React.Fragment>

                <label className="search">
                    <input type="search" placeholder="Meshur adi?" />
                </label>
                {this.renderSearchResult()}


            </React.Fragment>
        )
    }

    private renderSearchResult() {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.playlistTracks.map((item: Model.TrackInfo) =>
                        <tr key={item.name}>
                            <td>{item.albumName}</td>
                            <td>{item.artistName}</td>
                            <td>{item.name}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

}


export default connect(
    (state: ApplicationState) => state.searchList, // Selects which state properties are merged into the component's props
    TrackSearch.actionCreators // Selects which action creators are merged into the component's props
)(SearchBar as any);
