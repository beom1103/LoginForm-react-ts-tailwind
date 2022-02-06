import React from 'react';
import { useForm } from 'react-hook-form';

enum SourceEnum {
    Youtube,
    Website,
}

interface FormData {
    email: string;
    password: string;
    source: SourceEnum;
    remember: boolean;
}

function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ mode: 'onChange' });

    const onSubmit = handleSubmit(({ email, password, source, remember }) => {
        console.log(email, password, source, remember);
    });

    return (
        <div className="flex flex-col justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md mx-auto">
                <div className="text-xl font-medium text-center">challenge : react/typescript</div>
                <div className="mt-2 text-3xl font-bold text-center text-gray-900">Login</div>
            </div>
            <div className="w-full max-w-md p-8 mx-auto mt-4 bg-white border border-gray-300">
                <form action="" className="space-y-6" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="" className="block text-sm font-bold text-gray-600">
                            Email
                        </label>
                        <input
                            {...register('email', {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                            })}
                            autoComplete="off"
                            name="email"
                            style={{ borderColor: errors.email ? 'red' : '' }}
                            type="text"
                            className="w-full p-2 mt-1 border border-gray-300 rounded"
                        />
                        {errors.email && 'Email is invalid'}
                    </div>
                    <div>
                        <label htmlFor="" className="block text-sm font-bold text-gray-600">
                            password
                        </label>
                        <input
                            {...register('password', {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                            })}
                            autoComplete="off"
                            type="password"
                            className="w-full p-2 mt-1 border border-gray-300 rounded"
                            style={{ borderColor: errors.password ? 'red' : '' }}
                        />
                        {errors.password && 'Password is invalid'}
                    </div>
                    <div>
                        <label htmlFor="" className="block text-sm font-bold text-gray-600">
                            Source
                        </label>
                        <select {...register('source', { required: true })} name="source" className="w-full p-2 mt-1 border border-gray-300 rounded">
                            <option value="Youtube">Youtube</option>
                            <option value="Website">Website</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                {...register('remember', {
                                    required: true,
                                })}
                                name="remember"
                                type="checkbox"
                                className="w-4 h-4 text-blue-300 rounded"
                            />
                            <label htmlFor="" className="ml-2 text-sm text-gray-600">
                                Remember Me!
                            </label>
                        </div>
                        <div>
                            <a href="" className="text-sm font-medium text-blue-500">
                                Forgot Password
                            </a>
                        </div>
                    </div>
                    <div>
                        <button className="w-full px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
