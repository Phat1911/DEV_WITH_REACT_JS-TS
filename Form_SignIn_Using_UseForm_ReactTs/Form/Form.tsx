import { createContext, useEffect, useReducer, useRef, useState, type ReactNode } from 'react';
import './index.css'
import { useForm, type SubmitHandler } from 'react-hook-form';
import { FaArrowLeft, FaRegEye } from 'react-icons/fa';

interface ViewForm {
    name: string;
    email: string;
    password: string;
    gender: string;
}

interface MyContextProps {
    isSubmitting: boolean;
}

interface MyProviderProps {
    children: ReactNode;
}

export const MyCt = createContext <MyContextProps> ({
    isSubmitting: false,
});

const Form = ({ children }: MyProviderProps) => {
    const {
        register,
        handleSubmit,
        formState: {errors}, 
    } = useForm <ViewForm> ({
        mode: 'onChange',
    });

    const [st, setSt] = useState <boolean> (true);
    const [st1, setSt1] = useState <boolean> (true);
    const [st2, setSt2] = useState <boolean> (false);
    const [isSubmitting, setIsSubmitting] = useState <boolean> (false);

    const [content, setContent] = useState <string> ('Sign In');
    const [bor, setBor] = useState <string[]> (Array(3).fill('none'));
    const [typeState, setType] = useState <string> ('password');
    const [users, setUser] = useState <ViewForm[]> ([]);

    const handleClick = (id: any): void => {
        const b = [...bor];
        b[id] = '1px solid white';
        setBor(b);
    }

    const onSubmit = async (formData: any) => {
        setIsSubmitting(true);
        await new Promise (resolve => {
            setTimeout(() => {
                setIsSubmitting(false);
                setSt2(true);
                setContent('Log in');
                resolve(true);
            }, 2000);
        })

        const data = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            gender: formData.gender,
        }
        
        if (!st2) {
            setUser([...users, data]);
        } else {
            if (![...users].some(user => user.email == data.email && user.password == data.password)) {
                alert("Your password or email is invalid");
            } else {
                setSt(false);
            }
        }

        console.log(users);
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
        <MyCt.Provider value={{ isSubmitting }}>    
            {st &&
                <section className='container'>
                    <div className='box'>
                        {st1 ?
                            <div>
                                <div className='opt SignIn' onClick={() => {
                                    setSt1(false);
                                    setSt2(false);
                                    setContent('Sign In');
                                }}>Sign in</div>

                                <div className="opt" style={{ cursor: 'none' }}>or</div>

                                <div className='opt Login' onClick={() => {
                                    setSt1(false);
                                    setSt2(true);
                                    setContent('Log in');
                                }}>Log in</div>
                            </div>
                            :
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h1 style={{ textAlign: 'center' }}>{ content }</h1>

                                { !st2 && <div> 
                                        <input 
                                            type="text" 
                                            id='name'
                                            placeholder='User Name' 
                                            style={{ borderBottom: bor[0] }}
                                            onClick={() => handleClick(0)}
                                            {...register('name', {required: 'User is required'})}
                                        /> <br />
                                    </div>
                                }

                                { errors.name && <p>{ errors.name.message } <br /> </p> }

                                <input 
                                    type="email" 
                                    id='email'
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
                                    id='password'
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
                                    onMouseDown={() => setType('text')}
                                    onMouseUp={() => setType('password')}
                                />

                                <br />

                                { errors.password && <p>{ errors.password.message } <br /> </p> }
                                
                                {!st2 && 
                                    <div className="gender" style={{ textAlign: 'center' }}>
                                        <input 
                                            type="radio" 
                                            value='male'
                                            id='gender'
                                            {...register('gender', { required: 'Gender is required' })}
                                        />
                                        <label htmlFor="Nam" style={{ marginRight: '50px' }}>male</label>

                                        <input 
                                            type="radio"
                                            value='female' 
                                            id='gender'
                                            {...register('gender', { required: 'Gender is required' })}
                                        />
                                        <label htmlFor="Nam">female</label>

                                        { errors.gender && <p>{ errors.gender.message } <br /> </p> }
                                    </div>
                                }

                                {children} 

                                <button className='back' onClick={() => setSt1(true)}> <FaArrowLeft /> Back</button>
                            </form>
                        }
                    </div>
                </section>
            }

        </MyCt.Provider>
    )
}

export default Form