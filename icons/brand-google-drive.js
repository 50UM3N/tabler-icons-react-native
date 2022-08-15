import Svg, { Path } from "react-native-svg";

function IconBrandGoogleDrive({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google-drive" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 10l-6 10l-3 -5l6 -10z" /><Path d="M9 15h12l-3 5h-12" /><Path d="M15 15l-6 -10h6l6 10z" /></Svg>;
}

export default IconBrandGoogleDrive;