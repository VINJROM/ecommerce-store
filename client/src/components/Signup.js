import React from "react";
import { Container, Box, Button, Heading, Text, TextField } from "gestalt";

class Signup extends React.Component {
  render() {
    return (
      <Container>
        <Box
          dangerouslySetInlineStyle={{
            __style: {
              backgroundColor: "#ebe2da",
            },
          }}
          margin={4}
          padding={4}
          shape="rounded"
          display="flex"
          justifyContent="center"
        >
          {/* Sign up form */}
          <form
            style={{
              display: "inlineBlock",
              textAlign: "center",
              maxWidth: 450,
            }}
          >
            {/* Sign Up Form Heading */}
            <Box
              marginBottom={2}
              display="flex"
              direction="column"
              alignItems="center"
            >
              <Heading color="midnight"> Let's Get Started</Heading>
              <Text italic color="orchid">
                {" "}
                Sign up to order some brews!
              </Text>
            </Box>
            {/* Username Input */}
            <TextField
              id="username"
              type="text"
              name="username"
              placeholder="username"
              onChange={this.handleChange}
            />
            {/* Email Input */}
            <TextField
              id="email"
              type="text"
              name="email"
              placeholder="Email Address"
              onChange={this.handleChange}
            />
            {/* Pasasword Input */}
            <TextField
              id="password"
              type="password"
              name="password"
              placeholder="password"
            />
          </form>
        </Box>
      </Container>
    );
  }
}

export default Signup;
