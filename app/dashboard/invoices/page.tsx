'use client'
import { showMsg } from "@/app/ui/common/message-box";
import { Button, CssBaseline, styled } from "@mui/material";

const StyledDiv = styled('button')({
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '10px 20px',
    fontSize: 16,
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  
    '&:hover': {
      backgroundColor: '#007bb5',
    },
  });


export default function Page() {
    return <>

        <StyledDiv onClick={() => {
            showMsg("test info", close => {
                close();
                setTimeout(() => {
                    showMsg("1231231")
                }, 1000);
            })
        }}>
            test
        </StyledDiv>
        <div>
            123
        </div>
        <CssBaseline />
        <div>
            123
        </div>
    </>;
}
