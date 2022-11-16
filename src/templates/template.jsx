import { Link } from "react-router-dom";

export default function Template(props) {
  return (
    <>
      { props.children }
      <Link to={"/"}>トップページ</Link>
    </>
  );
}
