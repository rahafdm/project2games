import axios from "axios"
import { useEffect, useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import GamesContext from "./utils/GameContext"
import Profile from "./pages/Profile"
import WebFont from "webfontloader"
import AddGame from "./pages/AddGame"
import UsersGames from "./pages/UsersGames"

function App() {
  const [games1, setGames1] = useState([])
  const [games, setGames] = useState([])
  const [profile, setProfile] = useState(null)
  const [editId, setEditId] = useState(null)
  const [signupshow, setShowSignup] = useState(false)
  const [loginshow, setShowLogin] = useState(false)
  const navigate = useNavigate()

  const handleOpenLogin = () => {
    setShowLogin(true)
  }

  const handleCloseLogin = () => {
    setShowLogin(false)
  }

  const handleOpenSignup = () => {
    setShowSignup(true)
  }

  const handleCloseSignup = () => {
    setShowSignup(false)
  }
//---------------------------------------------------- get API puplic ----------------------------------------------//
  const getGame1 = async () => {
    try {
      const response = await axios.get("https://free-to-play-games-database.p.rapidapi.com/api/games", {
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key": "8b223af0a2msh4beca3a5c6c4de5p17979djsne4bb57d7b44d",
        },
      })
      setGames1(response.data)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }
  //--------------------------------------------------- get API privet --------------------------------------------//

  const getGame2 = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/v2/games-719/items")
      setGames(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }
//----------------------------------------------------- get profile -----------------------------------------------//
  const getProfile = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/user/me", {
        headers: {
          Authorization: localStorage.tokenGame,
        },
      })
      setProfile(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getGame1()
    getGame2()
    if (localStorage.tokenGame) {
      getProfile()
    }
    WebFont.load({
      google: {
        families: ["Droid Sans", "Chilanka", "Isemin", "Genkaimincho", "Adorn"],
      },
    })
  }, [])

  //-------------------------------------------------- add games ----------------------------------------------//

  const addGames = async e => {
    e.preventDefault()

    try {
      const form = e.target

      const gamesBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
        url: form.elements.url.value,
      }

      await axios.post("https://vast-chamber-06347.herokuapp.com/api/v2/games-719/items", gamesBody, {
        headers: {
          Authorization: localStorage.tokenGame,
        },
      })

      getGame2()
      getProfile()
      navigate("/usergames")
    } catch (error) {
      console.log(error?.response?.data)
    }
  }
//-----------------------------------------------------edit games -------------------------------------------//
  const editGames = e => {
    const id = e.target.id
    setEditId(id)
  }

  //-------------------------------------------------- confirm -----------------------------------------------//
  const confirmGames = async (e, editId) => {
    e.preventDefault()

    try {
      const form = e.target

      const gamesBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
        url: form.elements.url.value,
      }
      await axios.put(`https://vast-chamber-06347.herokuapp.com/api/v2/games-719/items/${editId}`, gamesBody, {
        headers: {
          Authorization: localStorage.tokenGame,
        },
      })

      getGame2()
      setEditId(null)
      getProfile()
    } catch (error) {
      console.log(error)
    }
  }

  //------------------------------------------------ delete games -------------------------------------------//
  const deleteGames = async id => {
    try {
      await axios.delete(`https://vast-chamber-06347.herokuapp.com/api/v2/games-719/items/${id}`, {
        headers: {
          Authorization: localStorage.tokenGame,
        },
      })
      getGame2()
      getProfile()
    } catch (error) {
      console.log(error.response.data)
    }
  }
//--------------------------------------------------- signup ------------------------------------------------//
  const signUp = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        photo: form.elements.photo.value,
      }
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/user", userBody)
      console.log("sign up success")
    } catch (error) {
      console.log(error.response.data)
    }
  }
//--------------------------------------------------- login ------------------------------------------------//
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("https://vast-chamber-06347.herokuapp.com/api/user/auth", userBody)
      const tokenGame = response.data
      localStorage.tokenGame = tokenGame
      getProfile()
      navigate("/")
    } catch (error) {
      console.log(error.response.data)
    }
  }
//--------------------------------------------------- logout ---------------------------------------------//
  const logout = () => {
    localStorage.removeItem("tokenGame")
  }

  const store = {
    games1: games1,
    games: games,
    profile: profile,
    addGames: addGames,
    signUp: signUp,
    login: login,
    logout: logout,
    handleOpenSignup: handleOpenSignup,
    handleCloseSignup: handleCloseSignup,
    handleOpenLogin: handleOpenLogin,
    handleCloseLogin: handleCloseLogin,
    signupshow: signupshow,
    loginshow: loginshow,
    editGames: editGames,
    confirmGames: confirmGames,
    deleteGames: deleteGames,
    editId: editId,
  }
  return (
    <GamesContext.Provider value={store}>
      <Navbar />
      <SignUp />
      <Login />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addGames" element={<AddGame />} />
        <Route path="/usergames" element={<UsersGames />} />
      </Routes>
     
    </GamesContext.Provider>
  )
}

export default App
