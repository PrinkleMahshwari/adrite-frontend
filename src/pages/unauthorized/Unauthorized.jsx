// unauthorized page
// role mismatch pe ye page show hoga

function Unauthorized() {

  return (

    <div className="min-h-screen flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-5xl font-bold mb-4">
          403
        </h1>

        <p className="text-xl text-grayText">
          Unauthorized Access
        </p>

      </div>

    </div>
  );
}

export default Unauthorized;