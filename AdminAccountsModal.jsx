import { useState} from 'react'
import axios from 'axios'
import React from 'react';

function AdminAccountsModal({closeAccountsModal,displayCreatedAccount}){

    const [cashierUserNameAccount , setCashierUserNameAccount]=useState('');
    const [cashierPasswordAccount , setCashierPasswordAccount]=useState('');
    const [cashierWindowAccount , setCashierWindowAccount]=useState('window1');
    const [cashierStatusAccount , setCashierStatusAccount]=useState('Deactivated');
    


    const getUserName =(e)=>{
        setCashierUserNameAccount(e.target.value);

    }
    const getPassword =(e)=>{
        setCashierPasswordAccount(e.target.value);
    }
    const getWindow=(e)=>{
        setCashierWindowAccount(e.target.value);
    }

    const closeAccountsModalButton=()=>{
        closeAccountsModal(false);
    }

    const AddAccountButton =()=>{

        if(cashierUserNameAccount === '' && cashierPasswordAccount === ''){
            alert('Please Fillup the form!');
        }else{
            closeAccountsModalButton();
            axios.post('http://localhost:8080/addCashierAccount',{
            cashierUserNameAccount,cashierPasswordAccount,cashierWindowAccount,cashierStatusAccount,
            
        
    })
            alert('Account Added!');
            displayCreatedAccount();
            
        }
        
    
    }



    return(
        
            <div className="adminModalBg">
                <div className="adminaccModalBody">
                    <div className="adminaccmodalTitle">
                        <h1>Add New Accounts</h1>
                        <button onClick={closeAccountsModalButton} className='closebuttonBilog'>X</button>
                    </div>
                    <input type="text" name="" id="" placeholder='Enter UserName' onChange={getUserName} />
                    <input type="text" name="" id="" placeholder='Enter Password' onChange={getPassword}/>
                    <select onChange={getWindow}>
                        <option value="window1">Window 1</option>
                        <option value="window2">Window 2</option>
                        <option value="window3">Window 3</option>
                    </select>
                    <div className="adminaccmodalFooter">
                        <button onClick={AddAccountButton}>CREATE</button>
                        <button onClick={closeAccountsModalButton}>CLOSE</button>
                        
                        
                    </div>
                </div>
            </div>
        );
        
    

}
export default AdminAccountsModal