import { atom } from 'recoil';

const playListsState = atom({
    key: 'playLists',
    default: null
})

export default playListsState;