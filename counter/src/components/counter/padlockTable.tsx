import React from "react"
import { useForm } from "./useForm"
import padlock from "../../images/padlock.png";
import lock_animation from "../../images/lock_animation.gif"
import unlock_animation from "../../images/unlock_animation.gif"
import TextField from '@material-ui/core/TextField';
import "./padlockTable.css"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box/Box"

const PadlockTable = () => {
    const password = "000"
/**
 * the initial value of the padlock is set into 5 5 5
 */
    const initialValue = {
        count1: "5",
        count2: "5",
        count3: "5"
    }
/** 
 * Using useForm to import callback functions in order to minimise the complexity of this file.
 * It returns onChange and onSubmit functions, and the values that are initialised with initialValue.
*/
    const { onChange, onSubmit, values } = useForm(lockCheck, initialValue)
    
    const [lock, setLock] = React.useState<boolean>(true) //set Lock state
    const [imageURL, setImageURL] = React.useState(padlock)  //set ImageURL state. there are 3 images.
    
/**
 * The lockCheck funcion is a callback passed to the onSubmit function in useForm
 * It is called upon button click
 */
    function lockCheck() {
        //when the lock is on and shows "Unlock" 
        if (lock === false) {
            setLock(true)
            setImageURL(lock_animation)
        }
        if (lock === true) {
            //when the lock is opened and shows "Lock"
            let inputPassword = values.count1 + values.count2 + values.count3
            if (inputPassword === password) {
                //check if the password is correct
                setLock(false)
                setImageURL(unlock_animation)
            } else {
                alert("wrong password")
            }
        }
    }
/* end of callback function */
    
    
/**
 * UseEffect hook to monitor the value of the padlock. When the value changes, i.e not the correct password,
 * the lock should be put on
 */
    React.useEffect(() => {
        let inputPassword = values.count1 + values.count2 + values.count3
        if (inputPassword !== password) {
            setLock(true);
            setImageURL(lock_animation)
        } else {
            setLock(false);
            setImageURL(unlock_animation)
        }
    }, [values])
/* end of useEffect */

/**
 * JSX element. It contained a form, a table and a button
 */
    return (
        <form onSubmit={onSubmit}>
        <table className="table">
        <tr>
            <td rowSpan={3}><img alt="padlock" src={imageURL} className="image" /></td>
            <td>
                <table>
                    <tr>
                        <td>
                        <div className="counter">
                        <TextField
                                id="outlined-number"
                                name="count1"
                                type="number"
                                defaultValue={initialValue.count1}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                onChange={onChange}
                            />
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <div className="counter">
                        <TextField
                            id="outlined-number"
                            defaultValue={initialValue.count2}
                            type="number"
                            name="count2"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            onChange={onChange}
                        />
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <div className="counter">
                        <TextField
                        id="outlined-number"
                        defaultValue={initialValue.count3}
                        type="number"
                        name="count3"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={onChange}
                        />
                    </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        </table>
        <Box m={3}>
            <Button size="large" variant="outlined" color="secondary" type="submit">{lock?"Unlock":"Lock"}</Button>
        </Box>
        </form>
    )
/* end of JSX element */
     
}

export default PadlockTable