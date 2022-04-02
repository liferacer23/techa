import { Input, InputContainer, Nav, NavLower } from "../styles/Nav.style";
import { Logo } from "../styles/Nav.style";
import { NavLeft } from "../styles/Nav.style";
import Image from "next/image";
import { NavLinks,NavLinksL } from "../styles/Nav.style";
import Link from "next/link"; 
import { AiOutlineSearch } from "react-icons/ai";
import { IconContainer } from "../styles/Nav.style";
export default function NavBar() {
  return (
    <>
      <Nav>
        <Logo>
          <Image src="/Icons/logo.svg" width={100} height={70} />
        </Logo>
        <NavLinks>
          <Link href="/">
            <h6>Home</h6>
          </Link>
          <Link href="/">
            <h6>Contact</h6>
          </Link>
          <Link href="/">
            <h6>Product</h6>
          </Link>
          <Link href="/">
            <h6>About</h6>
          </Link>
        </NavLinks>

        <NavLeft>
          <IconContainer>
            <Image src="/Icons/bag.svg" alt="" width={20} height={20} />
          </IconContainer>
          <IconContainer>
           {/*  <Image
              src="/Icons/girl1.jpg"
              alt=""
              width={100}
              height={100}
              layout="fill"
              objectFit="contain"
            /> */}
          </IconContainer>
        </NavLeft>
      </Nav>

      <NavLower>
        <InputContainer>
          <AiOutlineSearch
            color="#171716"
            fontSize={20}
            width={20}
            padding={5}
            cursor="pointer"
          />
          <Input
            placeholder="Search.."
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />
        </InputContainer>
        <NavLinksL>
          <Link href="/furniture">
            <h6>Furniture</h6>
          </Link>
          <Link href="/electronics">
            <h6>Electronics</h6>
          </Link>
          <Link href="/vehicles">
            <h6>Vehicle</h6>
          </Link>
          <Link href="/accessories">
            <h6>Accessories</h6>
          </Link>
          <Link href="/fashion">
            <h6>Fashion</h6>
          </Link>
        </NavLinksL>
      </NavLower>
    </>
  );
}
{
  /*  <InputContainer

      >
        <AiOutlineSearch
        color="#171716"
          fontSize={20}
          width={20}
          padding={5}
          cursor="pointer"
        />
        <Input
        placeholder="Search.."
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
        />
      </InputContainer> */
}
