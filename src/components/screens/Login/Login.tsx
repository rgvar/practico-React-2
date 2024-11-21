import { Button, Form } from "react-bootstrap"
import styles from './Login.module.css'
import { FormEvent, useState } from "react";
import { useForm } from "../../../hooks/useForm";

export const Login = () => {

    const [showPass, setShowPass] = useState(false);

    

    const {values, handleChange} = useForm({
        user:"",
        password:"",
    });
    const { user, password } = values;
    
    const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user, password);
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
