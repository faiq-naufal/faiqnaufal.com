import React, { forwardRef } from "react"
import styled from "@emotion/styled"
import MuiTextField from "@material-ui/core/TextField"

export default forwardRef(function TextField(props, ref) {
  return (
    <StyledTextField
      inputProps={{
        form: {
          autocomplete: "off",
        },
      }}
      ref={ref}
      {...props}
    />
  )
})

const StyledTextField = styled(MuiTextField)`
  .MuiInputBase-root {
    color: rgba(0, 0, 0, 1);
    font-family: "Inter", sans-serif;
    line-height: 1.5rem;
    letter-spacing: 0.2px;
    font-size: 0.875rem;

    @media (min-width: 600px) {
      font-size: 1rem;
    }
  }

  .MuiFormHelperText-root {
    font-family: "Inter", sans-serif;
    font-weight: 500;
  }

  .MuiInputBase-input::placeholder {
    color: #aaa;
    opacity: 1;
    font-weight: 300;
  }

  .MuiInput-underline::before {
    border-bottom: 1px solid #d9d8d8;
  }

  .MuiInput-underline:not(.Mui-error)::after,
  .MuiInput-underline:hover:not(.Mui-disabled)::before {
    border-bottom: 2px solid #0e8162;
  }
`
