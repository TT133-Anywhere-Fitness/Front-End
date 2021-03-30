import * as yup from "yup";

export const schema = yup.object().shape ({
    username: yup.string().required('Username is required.').min(6,'Username needs to be 6 characters minimum.'),
    password: yup.string().required('Password is required').min(6, 'Password needs to be 6 characters minimum. '),
    role: yup.string().required('Please select a role.')
})