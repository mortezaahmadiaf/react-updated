interface IconProps {
  size?: number
  width?: number
  height?: number
  className?: string
}

export const RemainIcon = ({
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
        // fill="#000000"
        stroke="none"
      >
        <path
          d="M2380 4794 c-430 -39 -826 -191 -1170 -448 -123 -91 -346 -315 -437
     -436 -314 -423 -470 -921 -449 -1435 23 -578 246 -1086 656 -1495 352 -352
     749 -553 1255 -636 153 -25 495 -26 650 -1 510 83 943 307 1289 668 326 340
     524 741 602 1224 27 164 25 506 -4 675 -65 383 -197 692 -426 1000 -91 122
     -314 346 -436 437 -303 226 -646 371 -1015 428 -97 15 -425 27 -515 19z m370
     -324 c665 -69 1235 -466 1530 -1065 80 -162 122 -282 156 -440 164 -775 -155
     -1561 -811 -2000 -726 -486 -1675 -420 -2342 163 -178 155 -343 375 -452 602
     -411 852 -139 1869 644 2412 119 83 344 195 474 238 259 85 543 117 801 90z"
        />
        <path
          d="M2370 4229 c-673 -81 -1229 -547 -1419 -1189 -50 -168 -65 -276 -65
     -480 0 -265 39 -455 137 -678 233 -524 706 -886 1287 -984 114 -19 414 -16
     535 6 489 89 902 373 1159 799 124 206 200 439 227 695 19 187 7 242 -65 296
     -27 21 -38 21 -737 24 l-709 2 -2 709 c-3 699 -3 710 -24 737 -43 58 -69 69
     -162 71 -48 1 -121 -3 -162 -8z m32 -1023 c3 -694 3 -705 24 -732 11 -15 33
     -37 48 -48 27 -21 38 -21 733 -24 l705 -2 -7 -43 c-87 -567 -524 -1020 -1093
     -1134 -120 -24 -384 -24 -504 0 -591 118 -1029 592 -1099 1188 -80 687 386
     1331 1071 1479 47 10 93 19 102 19 17 1 18 -43 20 -703z"
        />
      </g>
    </svg>
  )
}
