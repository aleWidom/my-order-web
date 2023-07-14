/* 
"use client"
import { useEffect, useState} from "react";


const useLocalStorage = (key: string, initialState: []) => {

    const [tasks, setTasks] = useState(initialState)

    //solo se ejecuta la primera vez
    useEffect(() => {
     const tasksStorage = JSON.parse(localStorage.getItem(key) as any);
     if (tasksStorage) {
        setTasks(tasksStorage)
     }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    
    //se ejecuta cada vez que cambia tasks
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(tasks))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tasks])
    
   
    return {tasks, setTasks}

};

export default useLocalStorage; */
