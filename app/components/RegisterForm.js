import {FieldGroup} from 'react-bootstrap'

const RegisterForm = props => {

    return (
        <form>
            <FieldGroup
                id="name"
                type="text"
                label="Nome"
                placeholder="Nome"
                required
            />
            <FieldGroup
                id="email"
                type="email"
                maxLength={254}
                label="Endereço de E-mail"
                placeholder="E-mail"
                required={true}
                validationPattern=".+\@.+\..{2,}"
                value={props.userData.email}
                handleChange={props.handleChange}
            />
            <FieldGroup
                id="nome"
                type="text"
                maxLength={124}
                placeholder="Nome"
                handleChange={props.handleChange}
                value={props.userData.nome}
                required
            />
            <FieldGroup
                id="instituicao"
                type="text"
                maxLength={100}
                placeholder="Instituição"
                value={props.userData.instituicao}
                handleChange={props.handleChange}
                required
            />
            <FieldGroup
                id="departamento"
                type="text"
                maxLength={50}
                placeholder="Departamento"
                value={props.userData.departamento}
                handleChange={props.handleChange}
            />
            <FieldGroup
                id="telefone"
                type="telefone"
                maxLength={50}
                placeholder="telefone"
                value={props.userData.telefone}
                handleChange={props.handleChange}

            />
            {props.children}
            <FieldGroup
                id="textfield"
                maxLength={30000}
                componentClass="textarea"
                placeholder={props.textAreaLabel}
                value={props.userData.textfield}
                handleChange={props.handleChange}
                required
            />
        </form>
    )
}


export default RegisterForm;