export class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
            	<table className="footer-copyright">
              <tbody>
              <tr>
              		<td>Atlas Agropecuário Brasileiro</td>
              		<td className="footer-right">
                          Desenvolvido por:
                          <ul>
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