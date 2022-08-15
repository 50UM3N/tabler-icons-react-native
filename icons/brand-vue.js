import Svg, { Path } from "react-native-svg";

function IconBrandVue({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-vue" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18.5 5l-6.5 10l-6.5 -10" /><Path d="M15 5l-3 4.5l-3 -4.5h-7l10 16l10 -16z" /></Svg>;
}

export default IconBrandVue;