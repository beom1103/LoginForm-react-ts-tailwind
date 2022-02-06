import React from 'react'
import { useForm } from 'react-hook-form'

enum SourceEnum {
	Youtube,
	Website,
}

interface FormData {
	email: string
	password: string
	source: SourceEnum
	remember: boolean
}

type Mode = {
	onBlur: 'onBlur'
	onChange: 'onChange'
	onSubmit: 'onSubmit'
	all: 'all'
}
function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ mode: 'onChange' })

	const onSubmit = handleSubmit(({ email, password, source, remember }) => {
		console.log(email, password, source, remember)
	})

	return (
		<div className='min-h-screen bg-gray-50 flex flex-col justify-center'>
			<div className='max-w-md w-full mx-auto'>
				<div className='text-center font-medium text-xl'>something</div>
				<div className='text-3xl font-bold text-gray-900 mt-2 text-center'>
					another text
				</div>
			</div>
			<div className='max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300'>
				<form action='' className='space-y-6' onSubmit={onSubmit}>
					<div>
						<label htmlFor='' className='text-sm font-bold text-gray-600 block'>
							Email
						</label>
						<input
							{...register('email', {
								required: true,
								minLength: 6,
								maxLength: 20,
							})}
							autoComplete='off'
							name='email'
							style={{ borderColor: errors.email ? 'red' : '' }}
							type='text'
							className='w-full p-2 border border-gray-300 rounded mt-1'
						/>
						{errors.email && 'Email is invalid'}
					</div>
					<div>
						<label htmlFor='' className='text-sm font-bold text-gray-600 block'>
							password
						</label>
						<input
							{...register('password', {
								required: true,
								minLength: 6,
								maxLength: 20,
							})}
							autoComplete='off'
							type='password'
							className='w-full p-2 border border-gray-300 rounded mt-1'
							style={{ borderColor: errors.password ? 'red' : '' }}
						/>
						{errors.password && 'Password is invalid'}
					</div>
					<div>
						<label htmlFor='' className='text-sm font-bold text-gray-600 block'>
							Source
						</label>
						<select
							{...register('source', { required: true })}
							name='source'
							className='w-full p-2 border border-gray-300 rounded mt-1'
						>
							<option value='Youtube'>Youtube</option>
							<option value='Website'>Website</option>
						</select>
					</div>
					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<input
								{...register('remember', {
									required: true,
								})}
								name='remember'
								type='checkbox'
								className='h-4 w-4 text-blue-300 rounded'
							/>
							<label htmlFor='' className='ml-2 text-sm text-gray-600'>
								Remember Me!
							</label>
						</div>
						<div>
							<a href='' className='font-medium text-sm text-blue-500'>
								Forgot Password
							</a>
						</div>
					</div>
					<div>
						<button className='w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm'>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default App
