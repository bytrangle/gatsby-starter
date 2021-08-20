import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: 24px;
        padding-top: 16px;
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: 24px;
            display: inline-block;
            font-style: normal;
          `}
        >
          Pandas Eating Lots
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
    </div>
  )
}
