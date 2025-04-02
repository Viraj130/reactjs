export function HighOrderComponentPurple(Props){
    return<>
     <div style={{ backgroundColor: "purple", color: "green", padding: "20px" }}>
        <Props.counter></Props.counter>
     </div>
    </>
}

export function HighOrderComponentOrange(Props){
    return<>
     <div style={{ backgroundColor: "orange", color: "white", padding: "20px" }}>
        <Props.counter></Props.counter>
     </div>
    </>
}

export function HighOrderComponentBlue(Props){
    return<>
     <div style={{ backgroundColor: "blue", color: "black", padding: "20px" }}>
        <Props.counter></Props.counter>
     </div>
    </>
}   



