import HeaderContainer from './headerContainer'
import HeaderNav from './headerNav'
import HeaderTitle from './headerTitle'
import HeaderWrapper from './headerWrapper'

const Header = Object.assign(HeaderContainer, {
  Wrapper: HeaderWrapper,
  Title: HeaderTitle,
  Nav: HeaderNav,
})

export default Header
