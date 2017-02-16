export class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
            	<table className="footer-copyright">
              <tbody width="100%">
              <tr>
              		<td>IMAFLORA</td>
                    <td>Atlas: a geografia da agropecuária brasileira</td>
              		<td className="footer-right">
                          Desenvolvido por:
                          <ul style={{listStyleType: 'none'}}>
                              <li>Caio Hamamura</li>
                              <li>Felipe José Cerignoni</li>
                          </ul>
                    </td>
              </tr>
              </tbody>
              </table>
         	</div>
        );
    }
}