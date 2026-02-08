import React,{useState} from 'react';


function Login() {


    const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setMessage(data.message);
      setSuccess(data.success);

      if (data.success && data.token) {
        localStorage.setItem("token", data.token);
        setTimeout(() => {
          window.location.href = "http://localhost:5173/";
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error. Try again later.");
      setSuccess(false);
    }
  };

    return (
        <div>
            <section class="bg-gray-50 h-auto dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">
                   {message && <p style={{ color: success ? "green" : "red" }}>{message}</p>}
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <form class="space-y-4 md:space-y-6"  onSubmit={handleSubmit}>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                                    <input type="email" name="email" id="email" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""></input>
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                                    <input type="password" name="password" id="password" onChange={handleChange} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                                </div>
                                
                                
                                <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    New User please ? <a href="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
