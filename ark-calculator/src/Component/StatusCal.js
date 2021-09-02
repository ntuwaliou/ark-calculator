import {InputNumber } from "antd";
import { useEffect, useState } from "react";
import "./MainPanel.css"

function StatusCal(props){
    const [value, setValue] = useState(props.data["base"])
    const [point, setPoint] = useState(0)

    useEffect( ()=>{
        const val = props.data["base"] + props.data["wild_buff"] * point
        if (val < props.data["base"]){
            console.error("val cal error: ", val, "should >= ", props.data["base"])
            val = props.data["base"]
        }
        setValue(val)
    }, [point, props.data])

    return (<div className="status-container">
        <span className="status-attr">{props.type}</span>
        <span className="status-base">{props.data["base"]}</span>
        <InputNumber className="status-value" value={value}
                    onChange={(val)=>{
                            if(val<props.data["base"]) val=props.data["base"]
                            setPoint(Math.floor((val-props.data["base"])/props.data["wild_buff"]))
                        }}></InputNumber>
        <InputNumber className="status-point" min={0} value={point}
                    onChange={(pts)=>{
                            if(pts<0) pts = 0
                            setPoint(pts)
                        }}></InputNumber>
    </div>)
}

export default StatusCal