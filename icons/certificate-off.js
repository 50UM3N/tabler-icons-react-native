import Svg, { Path } from "react-native-svg";

function IconCertificateOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-certificate-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12.876 12.881a3 3 0 0 0 4.243 4.243m.588 -3.42a3.012 3.012 0 0 0 -1.437 -1.423" /><Path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" /><Path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2m4 0h10a2 2 0 0 1 2 2v10" /><Path d="M6 9h3m4 0h5" /><Path d="M6 12h3" /><Path d="M6 15h2" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconCertificateOff;