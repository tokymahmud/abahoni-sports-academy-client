import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page ">
      <h1 className="text-center">ehhheeeee!!!!!!!</h1>
      <h1 className="fs-1 text-center align-middle	">an unexpected error has occurred.</h1>
      <p>
        <i className="underline underline-offset-1 text-red-600	font-bold text-2xl">{error.statusText || error.message}</i>
      </p>
      <img className="align-middle	" src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-18367.jpg?w=996&t=st=1686199284~exp=1686199884~hmac=87e090c717bdc8bef2c1a0108ce3c6ace7fcb7cde9ccd73d5536f07eeee1db2f"></img>
      <Link to="/">      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Back to Home</button>
</Link>
    </div>
  );
}