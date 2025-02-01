interface IconProps {
  size?: number
  width?: number
  height?: number
  className?: string
}

export const LogoutIcon = ({
  className,
  height = 25,
  size,
  width = 25,
}: IconProps) => {
  return (
    <svg
      width={size || width}
      height={size || height}
      className={className}
      viewBox="0 -1.29 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g data-name="Layer 2" id="Layer_2">
        <g
          data-name="E430, Logout, multimedia, Ui"
          id="E430_Logout_multimedia_Ui"
        >
          <line
            className="cls-1"
            x1="291.14"
            x2="502"
            y1="234.62"
            y2="234.62"
          />

          <polyline
            className="cls-1"
            points="437.83 181.15 502 234.62 437.83 288.1"
          />

          <polyline
            className="cls-1"
            points="10 459.25 10 10 331.31 10 331.31 459.25 230.9 459.25"
          />

          <polygon
            className="cls-1"
            points="230.9 499.41 10 459.25 10 10 230.9 50.16 230.9 499.41"
          />

          <polygon
            className="cls-1"
            points="180.69 178.1 60.2 158.02 60.2 107.82 180.69 127.9 180.69 178.1"
          />
        </g>
      </g>
    </svg>
  )
}
