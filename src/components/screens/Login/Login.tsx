import { Button, Form } from "react-bootstrap"
import styles from './Login.module.css'
import { FormEvent, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { useAppDispatch } from "../../../hooks/redux";
import { setLogin } from "../../../redux/slices/auth";
import { useNavigate } from "react-router-dom";

interface Username {
    username: string,
    password: string
}

export const Login = () => {

    const [showPass, setShowPass] = useState(false);

    const {values, handleChange} = useForm({
        user:"",
        password:"",
    });
    const { user, password } = values;
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    
    const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch("/user.json");
        const usersData = await response.json();
        const userFound = usersData.users.find((u: Username) => 
            u.username == user && u.password == password
        );
        if (userFound) {
            dispatch(setLogin(user));
            navigate("/")
        }

    }
    
    return (
        <div className={styles.containerLogin}>
            <div className={styles.containerForm}>
                
                <span
                    style={{ fontSize: "12vh"}} 
                    className="material-symbols-outlined">account_circle</span>
                

                <Form onSubmit={handleSubmitForm}>
                    <Form.Group className="mb-3">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control 
                                    name="user" 
                                    value={user} 
                                    onChange={handleChange}
                                    type="text" 
                                    placeholder="Usuario" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control 
                                    name="password" 
                                    value={password}
                                    onChange={handleChange}
                                    type={showPass ? "text" : "password"} 
                                    placeholder="Contraseña" />
                    </Form.Group>
                    <Form.Check 
                        type="switch"
                        onChange={() => {
                            setShowPass(!showPass);
                        }}
                        id="custom-switch"
                        label="Mostrar constraseña"
                    />
                    <div className={styles.buttonForm}>
                        <Button type="submit" variant="primary">Ingresar</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
