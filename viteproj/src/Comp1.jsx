import React from "react";
import Comp2 from "./Comp2";

function Comp1() {
    return (
        <div>
            <h2>ეს არის Comp1 კომპონენტი</h2>
            <p>Comp1 შეიცავს Comp2-ს:</p>
            <Comp2 />
        </div>
    );
}

export default Comp1;
