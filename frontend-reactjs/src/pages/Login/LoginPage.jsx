import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Modal from '../Modal';
// import { useTranslation } from 'next-i18next';
// import { useRouter } from 'next/router';
// import Cookies from 'universal-cookie';
// import Endpoint from '@/constants/endpoint';
// import KoreaFlag from '../../../public/images/korea.svg';
// import EnglandFlag from '../../../public/images/england.svg';
import Select from 'react-select';

function LoginPage({ onLogin }) {
	const [username, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [err, setErr] = useState(false);
	const [errModalOn, setErrModalOn] = useState(false);
	const [choice, setChoice] = useState(false);
	const [countFalse, setCountFalse] = useState(0);
	const [forgotModalOn, setForgotModalOn] = useState(false);
	// const router = useRouter();
	// const cookies = new Cookies();
	// const { locale, locales, push, asPath } = useRouter();
	const [language, setLanguage] = useState('');


	const handleOKClick = () => {
		setErrModalOn(false);
		setForgotModalOn(false);
	};

	const handleCancelClick = () => {
		setErrModalOn(false);
		setForgotModalOn(false);
	};

	// const handleSubmit = (e) => {
	// 	e.preventDefault(username, password);
	// 	try {
	// 		PostData(username, password).then((result) => {
	// 			if (result.statusCode == 201) {
	// 				// cookies.set('_token', result?.data?.token, { path: '/' });
	// 				// localStorage.setItem('token', result?.data?.token);
	// 				// push(router.locale, '/dashboard');
	// 			} else {
	// 				if (countFalse > 5) {
	// 					setForgotModalOn(true);
	// 					setCountFalse(0);
	// 				}
	// 				setErr(true);
	// 				setCountFalse((prevCount) => prevCount + 1);
	// 			}
	// 			setPassword('');
	// 		});
	// 	} catch (error) {}
	// };
    const handleLogin = () => {
        if (username === 'admin' && password === '123123') {
          onLogin('/home');
        } else {
          alert('Đăng nhập không thành công. Vui lòng kiểm tra lại tài khoản và mật khẩu.');
        }
      };

	const clicked = () => {
		setErrModalOn(true);
	};

	const handleClick = (e) => {
		setLanguage(e);
		// push(asPath, asPath, { locale: e.value });
	};

	useEffect(() => {
		// setLanguage(options.find((item) => item.value == locale));
	}, []);

	const options = [
		{
			value: 'kr',
			label: (
				<div className="flex items-center justify-center">
					<div>
						<image
							// src={KoreaFlag}
							height={18}
							width={20}
							className="mr-2"
							alt="Picture of the author"
						/>
					</div>
					<div>Tiếng Việt</div>
				</div>
			),
		},
		{
			value: 'en',
			label: (
				<div className="flex items-center justify-center">
					<div>
						<image
							// src={EnglandFlag}
							height={18}
							width={20}
							className="mr-2"
							alt="Picture of the author"
						/>
					</div>
					<div>English</div>
				</div>
			),
		},
	];

	const btn = [
		{
			text: 'cancellation',
			dynamicClass: 'rounded px-4 py-2 text-white bg-blue-500 w-48',
			backgroundColor: '',
			onClick: handleCancelClick,
			isActive:false			
		},
		{
			text:'check',
			dynamicClass: 'rounded px-4 py-2 text-white  bg-green-400 w-48',
			backgroundColor: 'rgb(74 222 128 / var(--tw-bg-opacity))',
            onClick: handleOKClick,
			isActive: false
		}
	];

	return (
		<div className="flex justify-center items-center bg-slate-200 lg:min-h-screen h-screen relative">
			<div className="absolute top-6 right-6 text-center z-50">
				<div className="leading-3">
					<Select
						className="w-40"
						options={options}
						name="label"
						value={language}
						onChange={handleClick}
						classNamePrefix="react-select"
						components={{
							IndicatorSeparator: () => null,
							DropdownIndicator: () => null,
						}}
						styles={{
							singleValue: (base) => ({ ...base, overflow: 'visible' }),
							control: (base, state) => ({
								...base,
								border: 'none',
								borderColor: 'unset',
								boxShadow: 'unset',
							}),
						}}
					/>
				</div>
			</div>
			<div className="self-center lg:w-4/12 md:w-4/12">
				<div className="text-center relative m-2 p-2">
					<div>
                    <img
						src="data:image/png;base64,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"
						className="absolute left-0 right-0 text-center mx-auto my-0 w-40 h-30 lg:w-30 lg:h-30 object-cover"
					/>
                    </div>
					<div className="py-9 px-5 bg-white w-full rounded-[26px] shadow-md">
						<div className="pt-[120px] pb-14 ">
							<span className="font-semibold text-4xl text-black">Login</span>
						</div>
						<div>
							<form
								className="relative px-16"
								// onSubmit={handleSubmit}
							>
								<div className="text-left pb-9">
									<div className="flex items-center border-b border-black border-opacity-100 border-solid border-1.5 py-0 px-2.5">
										<div className="pr-2 pl-1 py-0">
											<image
												src="/images/email.svg"
												width="25"
												height="25"
												alt=""
											/>
										</div>
										<input
											onChange={(e) => setUserName(e.target.value)}
											value={username}
											id="username"
											type="login"
											className="placeholder:text-lg appearance-none bg-white border-none rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
											placeholder='UserName'
										/>
									</div>
								</div>
								<div className="text-left pb-5">
									<div className="flex items-center border-b border-black border-opacity-100 border-solid border-1.5 py-0 px-2.5">
										<div className="pr-2 pl-1 py-0">
											<image
												src="/images/unlock.svg"
												width="25"
												height="25"
												alt=""
											/>
										</div>
										<input
											onChange={(e) => setPassword(e.target.value)}
											value={password}
											id="password"
											type="password"
											className="placeholder:text-lg appearance-none bg-white border-none rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
											placeholder='PassWord'
										/>
									</div>
								</div>
								{err && (
                                <span className="absolute bottom-16 text-err-login-color font-light text-3xl text-red-500 text-center mx-auto left-0 right-0 bottom-32">
										Account information does not match
									</span>
								)}

								<button
                                    onClick={handleLogin}
									type="submit"
									disabled={!username || !password}
									className={` mt-8 cursor-pointer inline-block overflow-hidden relative select-none w-full py-2 rounded-lg text-white  bg-[#795ea8] text-2xl
										${
											!username || !password
												? 'bg-gray-400 cursor-not-allowed'
												: 'bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'
										}`}
								>
									Login
								</button>
							</form>
							<div className="mt-2">
								<button
									className={'font-light leading-5 text-center text-black text-lg'}
									onClick={clicked}
								>
									forgot password?
								</button>
							</div>
							{/* {errModalOn && (
								<Modal
									title='Password reset guide'
									message='Contract your manager'
									describe=''
									btn={btn}
								/>
							)}
							{forgotModalOn && (
								<Modal
									title='Account lock'
									message='Your account will be deactivated after 5 incorrect password attempts'
									describe='Contact the manager'
									btn={btn}
								/>
							)} */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;

// export function PostData(username, password) {
// 	let userData = { username, password };
// 	return new Promise((resolve, reject) => {
// 		fetch(Endpoint.login, {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 				Accept: 'application/json',
// 			},
// 			body: JSON.stringify(userData),
// 		})
// 			.then((response) => response.json())
// 			.then((responseJson) => {
// 				resolve(responseJson);
// 			})
// 			.catch((error) => {
// 				reject(error);
// 			});
// 	});
// }