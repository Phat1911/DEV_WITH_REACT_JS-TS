import { useEffect, useReducer, useRef, useState } from 'react';
import './index.css'
import { useForm, type SubmitHandler } from 'react-hook-form';
import { FaRegEye } from 'react-icons/fa';

interface ViewForm {
    name: string;
    email: string;
    password: string;
    gender: string;
}

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}, 
    } = useForm <ViewForm> ({
        mode: 'onChange',
    });

    const [st1, setSt1] = useState <boolean> (true);
    const [st2, setSt2] = useState <boolean> (false);
    const [bor, setBor] = useState <string[]> (Array(3).fill('none'));
    const [typeState, setType] = useState <string> ('password');

    const handle = (): void => {
        setSt1(!st1);
    };

    const handleClick = (id: any): void => {
        const b = [...bor];
        b[id] = '1px solid white';
        setBor(b);
    }

    const onSubmit: SubmitHandler <ViewForm> = (data) => {
        console.log(data);
    }

    useEffect(() => {
        const handleBor = (e: MouseEvent): void => {
            const fields = document.querySelectorAll('input');
            if (![...fields].some(field => field.contains(e.target as Node))) {
                setBor(bor.map(b => b = 'none'));
            }
        }

        window.addEventListener('click', handleBor);

        return () => window.removeEventListener('click', handleBor);
    })

    return (
        <section className='container'>
            <div className='box'>
                {st1 &&
                    <div>
                        <div className='opt SignIn' onClick={handle}>Sign in</div>
                        <div className="opt" style={{ cursor: 'none' }}>or</div>
                        <div className='opt Login'>Log in</div>
                    </div>
                }

                {!st1 && 
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 style={{ textAlign: 'center' }}>Sign in</h1>

                        <input 
                            type="text" 
                            placeholder='User Name' 
                            style={{ borderBottom: bor[0] }}
                            onClick={() => handleClick(0)}
                            {...register('name', {required: 'User is required'})}
                        /> <br />

                        { errors.name && <p>{ errors.name.message } <br /> </p> }

                        <input 
                            type="email" 
                            placeholder='Email, @' 
                            style={{ borderBottom: bor[1] }}
                            onClick={() => handleClick(1)}
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /.+@.+/,
                                    message: 'Your Email is invalid',
                                }
                            })}
                        /> <br />

                        { errors.email && <p>{ errors.email.message } <br /> </p> }

                        <input 
                            type={typeState} 
                            placeholder='Password'
                            style={{ borderBottom: bor[2] }}
                            onClick={() => handleClick(2)}
                            {...register('password', {
                                required: 'Password is required',
                                pattern: {
                                    value: /^(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/,
                                    message: 'Your password has to has at least 8 chars, 1 number, 1 special (@, #, ...)'
                                }
                            })}
                        />  
                        <FaRegEye 
                            className='eye' 
                            onClick={() => setType(typeState == 'text' ? 'password' : 'text')}
                        />
                        <br />

                        { errors.password && <p>{ errors.password.message } <br /> </p> }
                        
                        <div className="gender" style={{ textAlign: 'center' }}>
                            <input 
                                type="radio" 
                                value='male'
                                {...register('gender', { required: 'Gender is required' })}
                            />
                            <label htmlFor="Nam" style={{ marginRight: '50px' }}>male</label>

                            <input 
                                type="radio"
                                value='female' 
                                {...register('gender', { required: 'Gender is required' })}
                            />
                            <label htmlFor="Nam">female</label>

                            { errors.gender && <p>{ errors.gender.message } <br /> </p> }
                        </div>
                        <button className="btn" type='submit'>Submit</button>
                    </form>
                }
            </div>
        </section>
    )
}

export default Form