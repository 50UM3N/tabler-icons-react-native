import Svg from "react-native-svg";

function IconVectorBeizer2({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vector-beizer-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <Path d="M0 0h24v24H0z" stroke="none" />
            <Path d="M7 16H3l3.47-4.66A2 2 0 103 9.8M10 16V8h4" />
            <Path d="M10 12L13 12" />
            <Path d="M17 16v-6a2 2 0 014 0v6" />
            <Path d="M17 13L21 13" />
        </Svg>;
}

export default IconVectorBeizer2;