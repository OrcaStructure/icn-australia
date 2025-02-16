/** @jsxImportSource theme-ui */
import { Box, Container, Flex } from 'theme-ui'
import Login from '../components/Login'
import Navbar from './navbar'  // Import the Navbar component

const Layout = ({ children }) => (
  <Box>
    <header sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px",
    backgroundColor: "primary",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000, // Ensure the header stays on top
    height: "60px", // Fix the height of the header
    width: "100%", // Ensure it spans the viewport width
  }}>
      <Container>
        <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Navbar />  {/* Add the Navbar component */}
          <Login />
        </Flex>
      </Container>
    </header>
    <main>{children}</main>
    <footer sx={{ bg: 'muted', padding: '1rem', textAlign: 'center' }}>
      © 2024 My Gatsby Site
    </footer>
  </Box>
)

export default Layout