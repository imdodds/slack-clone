import React from 'react'
import { HeaderContainer, HeaderLeft, HeaderAvatar, HeaderSearch, HeaderRight } from '../styles/Header.style';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Header() {
  return (
    <HeaderContainer>

      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar />
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
