import { selectorFamily } from 'recoil';
import { selector } from 'recoil';
import { spotifyApi } from '../spotify';

const playListQuery = selectorFamily({
    key: 'playListQuery',
    get: playListId => async() => {
        const playList = await spotifyApi.getPlaylist(playListId);
        return playList;
    },
});

export default playListQuery;