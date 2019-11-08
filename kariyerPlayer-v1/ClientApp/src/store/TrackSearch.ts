import { Action, Reducer } from 'redux';
import { AppThunkAction } from '.';
import * as Model from './model/model'

export interface SearchRequest {
    type: 'SPOTIFY_SEARCH_REQUEST';
    query: string;
}

interface SearchResponse {
    type: 'SPOTIFY_SEARCH_RESPONSE';
    query: string;
    trackList: Model.TrackInfo[];
}

type KnownAction = SearchRequest | SearchResponse;

export const actionCreators = {
    requestSearch: (query: string): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.searchList) {
            fetch(`spotify`)
                .then(response => response.json() as Promise<Model.TrackInfo[]>)
                .then(data => {
                    dispatch({ type: 'SPOTIFY_SEARCH_RESPONSE', query: query, trackList: data });
                });

            dispatch({ type: 'SPOTIFY_SEARCH_REQUEST', query: query });
        }
    }
};

export const reducer: Reducer<Model.TrackList> = (state: Model.TrackList | undefined, incomingAction: Action): Model.TrackList => {
    if (state === undefined) {
        return Model.UnloadedTrackList;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'SPOTIFY_SEARCH_REQUEST':
            return {
                playlistTracks: state.playlistTracks,
                isLoading: true,
                query: action.query
            };
        case 'SPOTIFY_SEARCH_RESPONSE':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            return {
                playlistTracks: action.trackList,
                isLoading: false,
                query: action.query
            };
    }

    return state;
};