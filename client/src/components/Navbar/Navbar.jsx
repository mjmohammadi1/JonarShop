import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { logout } from "../../redux/slices/user";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Input,
  Center,
  Logo,
  Right,
  MenuItem,
} from "./styles";
const Navbar = (props) => {
  const cartItemsQuantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();
  const handleUserLogout = () => {
    dispatch(logout());
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Jonar Shop</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem onClick={handleUserLogout}>LOG OUT</MenuItem>
          <Link to='/cart'>
            <MenuItem>
              <Badge badgeContent={cartItemsQuantity} color='primary'>
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
