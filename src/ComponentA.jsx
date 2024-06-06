import { useState } from "react";
import ComponentB from "./ComponentB";

function ComponentA(){

    const [user, setUser] = useState("Amr")

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <ComponentB/>
        </div>
    );
}
export default ComponentA;