import {InputNumber } from "antd";
import { useEffect, useState } from "react";
import "./MainPanel.css"

function StatusCal(props){
    const [value, setValue] = useState(props.data["base"])
    const [point, setPoint] = useState(0)

    useEffect( ()=>{
        const pts = Math.floor((value-props.data["base"])/props.data["wild_buff"])
        setPoint(pts<0?0:pts)
    }, [value, props.data])

    return (<div className="status-container">
        <span className="status-attr">{props.type}</span>
        <span className="status-base">{props.data["base"]}</span>
        <InputNumber className="status-value" value={value}
                    onChange={(val)=>{
                            if(val<props.data["base"]) val=props.data["base"]
                            setValue(val)
                        }}></InputNumber>
        <InputNumber className="status-point" min={0} value={point}
                    onChange={(pts)=>{
                            if(pts<0) pts = 0
                            setValue(props.data["base"]+pts*props.data["wild_buff"])
                        }}></InputNumber>
    </div>)
}

export default StatusCal