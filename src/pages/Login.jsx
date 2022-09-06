import React,{useContext} from 'react'
import {doc,setDoc} from 'firebase/firestore'
import {db,auth} from '../firebase/firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'


function Login() {
  const navigate = useNavigate()
  const guardar = async () => {
    const provider = new GoogleAuthProvider();
    const {user} = await signInWithPopup(auth,provider)
    await setDoc(doc(db, "users",user.uid),{
      displayName: user.displayName,
      imagen: user.photoURL
    })
    console.log('guaradar')
    navigate('/')
  }
  return (
    <ContainerLogin>
      <button onClick={guardar}>Login with Google</button>
    </ContainerLogin>
  )
}

const ContainerLogin = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #d29b1b70;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    border: none;
    padding: 1rem 6rem;
    border-radius: 0.5rem;
    background-color: #5757e5;
    color: white;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    :hover {
      background-color: blue;
    }

  }
`;

export default Login

