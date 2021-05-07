import React from "react"
import Counter from "./counter"
import padlock from "../../images/padlock.png";

const PadlockTable = () => {
    return <>
    <table>
        <tr>
            <td rowSpan={3}><img alt="padlock" src={padlock} className="image" /></td>
            <td>
                <table>
                    <tr>
                        <td>
                            <Counter counterValue={0} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Counter counterValue={0} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Counter counterValue={0} />
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    </>
}

export default PadlockTable