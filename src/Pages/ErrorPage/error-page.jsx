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
      <img className="align-middle	" src="https://img.freepik.com/free-vector/403-error-forbidden-concept-illustration_114360-5571.jpg?w=740&t=st=1684391510~exp=1684392110~hmac=41c234adcec583e359f9915c6212d36579a1d94acdd8cc27b05b79d0c50e4e0b"></img>
      <Link to="/">      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Back to Home</button>
</Link>
    </div>
  );
}