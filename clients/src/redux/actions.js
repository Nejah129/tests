import axios from 'axios'
import {GET,DELET, ADD, EDIT} from './actionsType'

export const getUsers =()=>async(dispatch)=>{
    try {
        let res=await axios.get('/users/get')
        dispatch({
            type:GET,
            payload:res.data
        })
    } catch (error) {
        alert('get error')
    }
};
export const deleteUser =(id)=>async(dispatch)=>{
    try {
        let {data}=await axios.delete(`/users/delete/${id}`)
        dispatch({
            type:DELET,
            payload:data
        })
        
    } catch (error) {
        alert('Delte Error')
        
    }
};
export const addeUser =(name,email,number)=>async(dispatch)=>{
    try {
        const newUser={
            name,email,number
        }
        
        let res=await axios.post('/users/successful/add',newUser)
        dispatch({
            type:ADD,
            payload:res.data
        })
        
    } catch (error) {
        alert('Add error')
        
    }
};
export const editUser =(id,name,email,number)=>async(dispatch)=>{
    try {
        const editedUser={
            name,email,number
        }
        
        let res=await axios.put(`/users/edit/${id}`,editedUser)
        dispatch({
            type:EDIT,
            payload:res.data
        })
        
    } catch (error) {
        alert('Edit error')
        
    }};