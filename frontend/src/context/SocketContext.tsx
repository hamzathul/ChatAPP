import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client'
//@ts-ignore
export const SocketContext = createContext();
//@ts-ignore
export const SocketContextProvider = ({ children }) => {
    const[socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    //@ts-ignore
    const {authUser} = useAuthContext()
    //@ts-ignore
    useEffect(()=>{
        if(authUser){
            const socket = io("http://localhost:5000",{
                query:{
                    userId:authUser._id
                }
            })
            //@ts-ignore
            setSocket(socket)
            
            return ()=> socket.close()
        } else{
            if(socket){
                //@ts-ignore
                socket.close()
                setSocket(null)
            }
        }

    },[])
  return <SocketContext.Provider value={{socket, onlineUsers}}>{children}</SocketContext.Provider>;
};
