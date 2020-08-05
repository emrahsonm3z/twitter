import React from 'react'

import NavigationButton from './navigation-button'
import TitleBold from './title-bold'

import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More
} from './icons'

import styles from './navigation.module.css'

function Navigation({ selectedKey }) {
  return (
    <nav className={styles.nav}>
      <NavigationButton>
        <Twitter />
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'Home'}>
        <Home />
        <TitleBold>Home</TitleBold>
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'Explore'}>
        <Explore />
        <TitleBold>Explore</TitleBold>
      </NavigationButton>
      <NavigationButton notify={19} selected={selectedKey === 'Notification'}>
        <Notification />
        <TitleBold>Notification</TitleBold>
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'Messages'}>
        <Messages />
        <TitleBold>Messages</TitleBold>
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'Bookmark'}>
        <Bookmark />
        <TitleBold>Bookmark</TitleBold>
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'Lists'}>
        <Lists />
        <TitleBold>Lists</TitleBold>
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'Profile'}>
        <Profile />
        <TitleBold>Profile</TitleBold>
      </NavigationButton>
      <NavigationButton selected={selectedKey === 'More'}>
        <More />
        <TitleBold>More</TitleBold>
      </NavigationButton>
    </nav>
  )
}

export default Navigation
