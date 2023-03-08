import React from 'react'
import { HeaderContainer, HeaderLeft, HeaderAvatar, HeaderSearch, HeaderRight } from '../styles/Header.style';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function Header() {

  const [user] = useAuthState(auth);

  return (
    <HeaderContainer>

      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => auth.signOut()}
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <AccessTimeIcon />
      </HeaderLeft>

      {/* Header Search */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder='Search Slack' />
      </HeaderSearch>

      {/* Header Right */}
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>

    </HeaderContainer>
  )
}

export default Header
