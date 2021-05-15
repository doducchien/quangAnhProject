import React, {useState, useEffect, useRef} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
function Signup() {

    const options = [
        { key: 'm', text: 'Nam', value: '0' },
        { key: 'f', text: 'Nữ', value: '1' },
        { key: 'o', text: 'Khác', value: '2' },
    ]

    const [formInput, setFormInput] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        sex: '0',
        password: '',
        repassword: ''

    })
    const [submit, setSubmit] = useState(false)
    const [errorInput, setErrorInput] = useState({
        fullName: false,
        email: false,
        phoneNumber: false,
        password: false,
        repassword: false
    })

    const onSubmit = ()=>{
        setSubmit(true)
    }

    const onChange = (e, {name, value})=>{
        console.log(submit.current)
        setFormInput({
            ...formInput,
            [name]: value.trim()
        })
    }
    useEffect(()=>{

        console.log('hihi')
    }, [submit])
    
    useEffect(()=>{
     
        const {fullName, email, phoneNumber, sex, password, repassword} = formInput
        setErrorInput({
            ...errorInput,
            fullName: submit && !Boolean(fullName.trim()),
            email: submit && !Boolean(email.trim()),
            phoneNumber: submit && !Boolean(phoneNumber.trim()),
            password: submit && !Boolean(password.trim()),
            repassword: submit && !Boolean(repassword.trim())
        })
        
    }, [formInput, submit])

    return (
        <div className="signup">
            <h2>ĐĂNG KÝ</h2>
            <Form onSubmit={onSubmit} widths='equal'>
                <Form.Input
                    onChange={onChange}
                    name='fullName'
                    error={errorInput.fullName}
                    width='16'
                    fluid
                    label='Họ tên'
                    placeholder='Họ tên...'
                    id='form-input-first-name'

                />
                <Form.Input
                    onChange={onChange}
                    name='email'
                    error={errorInput.email}
                    fluid
                    label='Email'
                    placeholder='Nhập email...'
                />
                <Form.Input
                    onChange={onChange}
                    name='phoneNumber'
                    error={errorInput.phoneNumber}
                    fluid
                    label='Số điện thoại'
                    placeholder='Nhập số điện thoại...'
                />
                <Form.Select
                    onChange={onChange}
                    name='sex'
                    options={options}
                    value={formInput.sex}
                    label='Giới tính'

                />
                <Form.Input
                    onChange={onChange}
                    name='password'
                    error={errorInput.password}
                    fluid
                    label='Mật khẩu'
                    placeholder='Nhập mật khẩu...'
                />
                <Form.Input
                    onChange={onChange}
                    name='repassword'
                    error={errorInput.repassword}
                    fluid
                    label='Nhập lại mật khẩu'
                    placeholder='Nhập lại mật khẩu...'
                />
                <Form.Checkbox
                    name='agree'
                    label='I agree to the Terms and Conditions'
                />
                <div className='outer-btn'>
                    <Button  negative>Đăng ký</Button>
                </div>
            </Form>
        </div>
    )
}

export default Signup