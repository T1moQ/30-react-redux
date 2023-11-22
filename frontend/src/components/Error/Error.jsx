import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, selectErrorMsg } from '../../redux/slices/errorSlice';
import { useEffect } from 'react';

const Error = () => {
   const errorMsg = useSelector(selectErrorMsg)

   const dispatch = useDispatch()

   useEffect(() => {
      if (errorMsg) {
         toast.error(errorMsg)
         dispatch(clearError())
      }
   }, [errorMsg, dispatch])

   return <ToastContainer position='bottom-right' autoClose={3000} theme="dark" />
}

export default Error
