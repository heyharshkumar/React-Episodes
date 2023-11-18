import { useRouteError } from "react-router-dom";

const Error = () => {
  const er = useRouteError();
  const { status, stautsText } = er;
  console.log(er);
  return (
    <div>
      <h1>Opps!!!!</h1>
      <h2>There is something Wrong!!!!</h2>
      <h3>{status}</h3>
      {/* <h3>{er.status + "..." + er.statusText}</h3> */}
    </div>
  );
};

export default Error;
