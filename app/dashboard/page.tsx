'use client'
import { Button } from "@mui/material";
import { showMsg } from "../ui/common/message-box";

export default function Page() {
    return (
        <div>
            <Button onClick={()=>{
                showMsg("test info",close=>{
                    close();
                    setTimeout(() => {
                        showMsg("1231231")
                    }, 1000); 
                })
            }}>
                test
            </Button>
        </div>
    );
}
