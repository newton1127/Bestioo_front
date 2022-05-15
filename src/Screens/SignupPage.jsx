import React from 'react'
import loginImg from '../assets/login.jpg'
const SignupPage = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" /> 
            {/* <Carousel/> */}
        </div>

        <div class="w-90px  bg-white flex flex-col justify-center p-5 rounded-lg lg:rounded-l-none">
						<h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
						<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4  md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
										Nom 
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="nom"
										type="text"
										placeholder="Nom "
									/>
								</div>
								<div class="md:ml-4">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
										Prénom
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="prenom"
										type="text"
										placeholder="Prénom"
									/>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
										Photo d'identité
									</label>
									<input
										class="w-full h-9 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="photo"
										type="file"
										placeholder="Photo d'identité"
									/>
								</div>
							</div>
							<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4  md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
										Date de naissance
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="date"
										type="date"
										placeholder="Date de naissance "
									/>
								</div>
								<div class="md:ml-4">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
										Nationalité
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="Nationalite"
										type="text"
										placeholder="Nationalité"
									/>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
									Pays de résidence
									</label>
									<input
										class="w-full h-9 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="pays"
										type="text"
										placeholder="Pays de résidence"
									/>
								</div>
							</div> 
						  <div className='mb-4 md:flex '> 
							 <div class="mb-4 ">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Email
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Email"
								/>
							</div>  
							<div class="mb-4 ml-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Telephone
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="telephone"
									type="text"
									placeholder="Téléphone"
								/>
							</div> 
							<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
										Pièce d'identité
									</label>
									<input
										class="w-full h-9 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="cin"
										type="file"
										placeholder="Pièce d'identité"
									/>
								</div>
							</div>
							<div class="mb-4 md:flex md:justify-between">
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
								Nom de l'utilsateur
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="username"
									type="text"
									placeholder="Nom de l'utilsateur"
								/>
							</div> 
								<div class="mb-4 ml-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
									mot de passe
									</label>
									<input
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
										type="password"
										placeholder="******************"
									/>
									<p class="text-xs italic text-red-500">Please choose a password.</p>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
										Confirmer mot de passe
									</label>
									<input
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="c_password"
										type="password"
										placeholder="Confirmer mot de passe"
									/>
								</div>
							</div>
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Enregistrer
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="#"
								>
									Forgot Password?
								</a>
							</div>
							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./index.html"
								>
									Already have an account? Login!
								</a>
							</div>
						</form>
					</div>
    </div>
  )
}

export default SignupPage