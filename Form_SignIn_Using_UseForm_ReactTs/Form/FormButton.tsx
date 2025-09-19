import { useFormStatus } from "react-dom"
import './index.css'
import { useContext, useEffect } from "react"
import { MyCt } from "./Form"

const FormButton = () => {
    const { isSubmitting } = useContext(MyCt);

    return (
        <button type='submit' disabled={isSubmitting} className="btn">
            { isSubmitting ? 'Submitting...' : 'Submit' }
        </button>
    )
}

export default FormButton