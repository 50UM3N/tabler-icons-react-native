import Svg, { Path, Circle } from "react-native-svg";

function IconFriendsOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-friends-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 5a2 2 0 0 0 2 2m2 -2a2 2 0 0 0 -2 -2" /><Path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" /><Circle cx={17} cy={5} r={2} /><Path d="M15 22v-4h-2l1.254 -3.763m1.036 -2.942a0.997 .997 0 0 1 .71 -.295h2a1 1 0 0 1 1 1l1.503 4.508m-1.503 2.492v3" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconFriendsOff;