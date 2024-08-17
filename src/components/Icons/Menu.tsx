import * as React from "react"
import { SVGProps } from "react"

const Menu = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="size-6"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
    </svg>
)
export default Menu
