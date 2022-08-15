import Svg, { Path } from "react-native-svg";

function Icon3dRotate({ size = 24, color = "#232e46", stroke = 2, ...props }) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-3d-rotate"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            strokeWidth={stroke}
            stroke={color}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <Path d="M7 15.5l4 -2.5" />
            <Path d="M3 13l4 2.5v4.996l4 -2.496v-5l-4 -2.5z" />
            <Path d="M3 13v5l4 2.5" />
            <Path d="M11 4a7 7 0 0 1 7 7v4l-3 -3" />
            <Path d="M21 12l-3 3" />
        </Svg>
    );
}

export default Icon3dRotate;
