interface IconProps {
  size?: number
  width?: number
  height?: number
  className?: string
}

export const BuyIcon = ({
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
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        // fill="white"
        stroke="none"
      >
        <path
          d="M672 4513 c-49 -24 -75 -68 -80 -132 -5 -83 14 -105 182 -217 117
     -78 147 -103 155 -128 5 -17 107 -461 226 -986 119 -525 225 -979 236 -1009
     47 -136 162 -263 294 -326 137 -66 137 -66 1132 -62 796 3 894 5 943 20 164
     50 297 161 368 308 38 77 57 154 222 880 195 862 198 884 165 1014 -55 211
     -237 387 -444 431 -54 11 -228 14 -941 14 l-875 0 -39 -23 c-109 -61 -106
     -221 5 -277 37 -19 62 -20 902 -20 949 0 913 2 990 -61 56 -46 89 -109 94
     -182 4 -54 -18 -162 -167 -812 -94 -412 -177 -770 -185 -795 -21 -65 -66 -114
     -133 -147 l-57 -28 -895 0 c-836 0 -897 1 -933 18 -56 26 -110 80 -135 134
     -12 26 -121 487 -242 1023 -121 536 -227 994 -236 1018 -31 84 -86 137 -260
     253 -152 100 -169 109 -212 109 -26 0 -62 -8 -80 -17z"
        />
        <path
          d="M3235 3464 c-16 -8 -179 -163 -360 -345 l-330 -329 -110 110 c-118
     118 -151 137 -221 124 -41 -8 -88 -44 -109 -85 -19 -36 -19 -112 -1 -147 16
     -29 325 -339 366 -366 30 -20 111 -21 148 -2 15 8 208 196 429 418 433 435
     425 425 409 513 -18 95 -136 153 -221 109z"
        />
        <path
          d="M2044 1375 c-82 -18 -137 -47 -201 -107 -90 -86 -133 -185 -133 -308
     0 -124 43 -222 135 -309 168 -159 422 -155 588 10 168 168 168 430 0 598 -65
     64 -139 104 -227 120 -72 13 -84 13 -162 -4z m131 -319 c35 -15 65 -59 65 -96
     0 -67 -72 -121 -136 -100 -94 31 -101 156 -10 196 39 17 40 17 81 0z"
        />
        <path
          d="M3324 1375 c-82 -18 -137 -47 -201 -107 -90 -86 -133 -185 -133 -308
     0 -124 43 -222 135 -309 168 -159 422 -155 588 10 168 168 168 430 0 598 -65
     64 -139 104 -227 120 -72 13 -84 13 -162 -4z m131 -319 c35 -15 65 -59 65 -96
     0 -67 -72 -121 -136 -100 -94 31 -101 156 -10 196 39 17 40 17 81 0z"
        />
      </g>
    </svg>
  )
}
