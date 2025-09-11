import { useFormStatus } from 'react-dom'
import './index.css'

const FormButton = () => {
    const { pending } = useFormStatus();

    return (
        <button className='btn' type='submit' disabled={pending}>
            {pending ? "Submitting...." : "Submit"}
        </button>
    )
}

export default FormButton