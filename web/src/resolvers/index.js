import {
  getShortLivedAccessToken,
  getLongLivedAccessToken,
  getProfileData,
  getUserMediaData,
  getSingleMediaData,
  getAlbumData,
} from "./instagram.js"

export default  {
  Query: {
    getShortLivedAccessToken: () => getShortLivedAccessToken(),
    getLongLivedAccessToken: () => getLongLivedAccessToken(),
    getProfileData: () => getProfileData(),
    getUserMediaData: () => getUserMediaData(),
    getSingleMediaData: (_, { media_id }) => getSingleMediaData(media_id),
    getAlbumData: (_, { album_id }) => getAlbumData(album_id),
  },
};

