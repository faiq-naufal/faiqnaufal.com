import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

export default function Button() {
  return <div></div>
}

export const LinkOutlined = styled(Link)`
  background: none;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  border-radius: 4px;
  padding: 12px 36px;
  border: solid 1px #0e8162;
  color: #0e8162;

  &:hover {
    background-color: #0e8162;
    color: #fff;
  }
`
