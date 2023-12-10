/* eslint-disable react/prop-types */
import { Form } from "react-bootstrap";

function Campo(props) {
    const { id, label, type, ph, value, onChange } = props;
    return (
        <Form.Group className="mb-3" controlId={id}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={ph} value={value} onChange={onChange}/>
        </Form.Group>
    );
}

export default Campo;
