import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Text, Grid, Center, Container,Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";


function Header() {

  const navigate = useNavigate()

  const onRegisterClick=()=>{
    navigate("/register")
  }

  const onLoginClick =()=>{
    navigate("/login")
  }

  return (
    <>
      <Container
        pt={0}
        m={0}
        style={{
          maxWidth: "100%",
          border: "2px solid black",
          justifyContent: "center",
        }}
      >
        <Grid my={10}>
          <Grid.Col span={10} ml={0}>
            <Text  weight={700}>socialNetwork</Text>
          </Grid.Col>
          <Grid.Col span={1} px={0} mx={0}>
            <Button onClick={onLoginClick}>
              <Center>
                {" "}
                <FaSignInAlt /> Login
              </Center>
            </Button>
          </Grid.Col>
          <Grid.Col span={1} px={0} mx={0}>
            <Button onClick={onRegisterClick} leftIcon={<FaUser />}>
              <Center> Register</Center>
            </Button>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}

export default Header;
