import React from 'react'
import { Wrapper } from './wrapper'
import TopSection from './top-section'
import BottomSection from './bottom-section'
import { getLikedSongs } from '@/actions/get-likedsongs-for-sidebar'
import { getUserAndLikedPlaylists } from '@/actions/get-userandlikedplaylists-for-sidebar'
const Sidebar = async () => {
  const likedSongs = (await getLikedSongs()).map(entry => entry.song)
  const [userPlaylists, likedPlaylists] = await getUserAndLikedPlaylists()

  return (
    <Wrapper>
      <TopSection />
      <BottomSection ranlist={[likedSongs, userPlaylists]} />

    </Wrapper>

  )
}
export default Sidebar
