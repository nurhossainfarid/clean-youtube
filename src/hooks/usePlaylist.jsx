import { useState } from "react";
import getPlaylist from "../api";

const init_data = {
    playlists: {},
    recent: [],
    favorites: [],
}

const usePlaylist = () => {
    const [state, setState] = useState(init_data);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const getPlaylistById = async (playlistId, force = false) => {
        if (state.playlists[playlistId] && !force) {
            return;
        }

        setLoading(true);
        try {
            const playlist = await getPlaylist(playlistId);
            setError('');
            setState((prev) => ({
                ...prev,
                playlists: {
                    ...prev.playlists,
                    [playlistId]: playlist,
                }
            }))
        } catch (e) {
            setError(e.response?.data?.error?.message || 'Something is wrong');
        } finally {
            setLoading(false);
        }
    };
    const addToRecent = (playlistId) => {
        setLoading(true);
        try {
            setState((prev) => ({
                ...prev,
                recent: [...prev, playlistId]
            }))
        } catch (e) {
            setError(e.response?.data?.message || 'Something is wrong');
        } finally {
            setLoading(false);
        }
    };

    const addToFavorite = (playlistId) => {
        setLoading(true);
        try {
            setState((prev) => ({
                ...prev,
                favorites: [...prev, playlistId]
            }))
        } catch (e) {
            setError(e.response?.data?.message || 'Something is wrong');
        } finally {
            setLoading(false);
        }
    };

    const getPlaylistsByIds = (ids = []) => {
        return ids.map(id => state.playlists[id]);
    }

    return {
        getPlaylistById,
        addToRecent,
        addToFavorite,
        error,
        loading,
        playlists: state.playlists,
        recent: getPlaylistsByIds(state.recent),
        favorites: getPlaylistsByIds(state.favorites)
    }
};


export default usePlaylist;