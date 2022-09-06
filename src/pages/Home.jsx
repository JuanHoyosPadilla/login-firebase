import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";

function Home() {
  const { cerrarSesion, userLogin } = useContext(AuthContext);
  const handelCerrarSesion = async () => {
    await cerrarSesion();
  };
  const avatar = userLogin.photoURL;
  console.log(userLogin);
  return (
    <ContainerHome>
      <div className="imagen">
        {avatar ? (
          <FaUserAlt className="icon"/>
        ) : (
          <img src={avatar} alt={userLogin.displayName} />
        )}
      </div>
      <h1>
        Bienvenido <span> {userLogin.displayName}</span>
      </h1>
      <button onClick={handelCerrarSesion}>cerrar sesion</button>
    </ContainerHome>
  );
}

const ContainerHome = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #eddf66;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon {
    width: 100%;
    height: 100%;
  }
  .imagen {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 2rem;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  h1 {
    font-size: 30px;
    font-weight: 500;
    span {
      color: #a11c1c;
    }
  }

  button {
    border: none;
    padding: 1rem 4rem;
    margin-top: 4rem;
    border-radius: 1rem;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease-out;
    :hover {
      background-color: #a09747;
      color: white;
    }
  }
`;

export default Home;
