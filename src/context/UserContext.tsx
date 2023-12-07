
import { onAuthStateChanged } from "firebase/auth";
import { ReactNode, createContext, useContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";

type UserGlobal = {
  stateUser: boolean;
  toggleStateUser: () => void;
};

interface Props {
  children: ReactNode;
}

export const UserContext = createContext<UserGlobal>({
  stateUser: false,
  toggleStateUser: () => {}
});

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<boolean>(false);

  const toggleStateUser = () => {
    setUser(prevState => !prevState);
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (stateUser)=>{
      console.log("useEffect", stateUser)
      if(stateUser){
        setUser(true)
      }else{
        setUser(false)
      }
      console.log("unsuscribe", unsuscribe)
    })
    return unsuscribe
  }, [user])


  return (
    <UserContext.Provider value={{ stateUser: user, toggleStateUser, }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUserContext = () => useContext(UserContext);


// import { onAuthStateChanged, User } from "firebase/auth";
// import { ReactNode, createContext, useContext, useState, useEffect } from "react";
// import { auth } from "../config/firebase";

// type UserGlobal = {
//   stateUser: boolean;
//   toggleStateUser: () => void;
// };

// interface Props {
//   children: ReactNode;
// }

// export const UserContext = createContext<UserGlobal>({
//   stateUser: false,
//   toggleStateUser: () => {},
// });

// const UserProvider = ({ children }: Props) => {
//   const [stateUser, setStateUser] = useState<boolean>(false);

//   const toggleStateUser = () => {
//     setStateUser((prevState) => !prevState);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
//       if (user) {
//         setStateUser(true); // Usuario autenticado
//       } else {
//         setStateUser(false); // No hay usuario autenticado
//       }
//     });

//     return () => {
//       unsubscribe(); // Cancelar suscripción para evitar fugas de memoria
//     };
//   }, []);

//   return (
//     <UserContext.Provider value={{ stateUser, toggleStateUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserProvider;

// export const useUserContext = () => useContext(UserContext);

