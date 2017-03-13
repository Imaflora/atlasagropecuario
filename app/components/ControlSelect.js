import React, { Component } from 'react';

class ControlSelect extends Component {
    render() {
        return (
            <FormGroup controlId="formControlsSelect">
                                              <ControlLabel>Tópico</ControlLabel>
                                                  <FormControl componentClass="select" placeholder="selecione">
                                                    <option value="comentario">Comentário</option>
                                                    <option value="sugestao">Sugestão</option>
                                                    <option value="duvida">Dúvida</option>
                                                    <option value="outro">Outros</option>
                                                  </FormControl>
            </FormGroup>
        );
    }
}

export default ControlSelect;