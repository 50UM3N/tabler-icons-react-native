import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandGithubCopilot({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github-copilot" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 18v-5.5c0 -.667 .167 -1.333 .5 -2" /><Path d="M12 7.5c0 -1 -.01 -4.07 -4 -3.5c-3.5 .5 -4 2.5 -4 3.5c0 1.5 .002 4 3 4c4 0 5 -2.5 5 -4z" /><Path d="M4 12c-1.333 .667 -2 1.333 -2 2c0 1 0 3 1.5 4c3.001 2 6.5 3 8.5 3s5.499 -1 8.5 -3c1.5 -1 1.5 -3 1.5 -4c0 -.667 -.667 -1.333 -2 -2" /><Path d="M20 18v-5.5c0 -.667 -.167 -1.333 -.5 -2" /><Path d="M12 7.5l.003 -.297l.01 -.269l.027 -.298l.013 -.105l.033 -.215c.014 -.073 .029 -.146 .046 -.22l.06 -.223c.336 -1.118 1.262 -2.237 3.808 -1.873c2.838 .405 3.703 1.797 3.93 2.842l.036 .204c.005 .033 .01 .066 .013 .098l.016 .185l.005 .171l-.003 .49l-.015 .394l-.02 .271c-.122 1.366 -.655 2.845 -2.962 2.845c-3.256 0 -4.524 -1.656 -4.883 -3.081l-.053 -.242a3.865 3.865 0 0 1 -.036 -.235l-.021 -.227a3.518 3.518 0 0 1 -.007 -.215z" /><Path d="M10 15v2" /><Path d="M14 15v2" /></Svg>;
}
export default IconBrandGithubCopilot;