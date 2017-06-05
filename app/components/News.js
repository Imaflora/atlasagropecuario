import React, { Component, PropTypes } from 'react'
import MyModal from '../components/MyModal'
import FieldGroup from '../components/FieldGroup'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import {Checkbox} from 'react-bootstrap'


const News = props => {

    return (
        <MyModal
            id="news-modal"
            headerId="news-header"
            bodyId="news-body"
            show={props.show ? props.show : false}
            title={props.translation["news"]}
            onHide={props.handleHide}
            noClose>
            <div>
                <h5>{props.translation['clickNews']}</h5>
                
                <div>
                <h1>{props.translation['jun']} / 2017</h1>
                    <ul>
                        <li><a href="https://oglobo.globo.com/sociedade/ciencia/meio-ambiente/vegetacao-em-area-dez-vezes-maior-que-rio-deixou-de-ser-protegida-21432244?versao=amp" target="_blank">Vegetação em área dez vezes maior que o Rio deixou de ser protegida. O Globo</a></li><br />
                        <li><a href="http://www.ihu.unisinos.br/568257-codigo-florestal-anistiou-41-milhoes-de-hectares-entrevista-especial-com-luis-fernando-pinto" target="_blank">Código Florestal anistiou 41 milhões de hectares. Entrevista especial com Luis Fernando Pinto. IHU - Instituto Humanitas Unisinos</a></li>                
                    </ul>
                </div>    

                <div>
                    <h1>{props.translation['may']} / 2017</h1>
                    <ul>
                        <li><a href="http://sustentabilidade.estadao.com.br/noticias/geral,mudanca-do-codigo-florestal-anistiou-41-milhoes-de-hectares,70001812607" target="_blank" >Mudança do Código Florestal 'anistiou' 41 milhões de hectares. Estadão - Sustentabilidade</a></li>
                    </ul>
                </div>
                
                <div>
                    <h1>{props.translation['apr']} / 2017</h1>
                    <ul>
                        <li><a href="http://outraspalavras.net/deolhonosruralistas/2017/04/11/com-92-territorio-privado-ms-tem-maior-concentracao-de-terras-particulares-pais/" target="_blank">Com 92% do território privado, MS tem maior concentração de terras particulares do país. De Olho nos Ruralistas</a></li><br />
                        <li><a href="https://www.nexojornal.com.br/grafico/2017/04/07/P%C3%BAblicas-e-privadas-a-divis%C3%A3o-de-terras-no-territ%C3%B3rio-brasileiro" target="_blank">Públicas e privadas: a divisão de terras no território brasileiro. NEXO</a></li><br />
                        <li><a href="http://www.gtps.org.br/tag/imaflora-geolab-atlas-atlas-da-agropecuaria-brasileira-malha-fundiaria-brasil-dados-georreferenciados" target="_blank" >Plataforma on-line revela a malha fundiária do Brasil. GTPS - Grupo de Trabalho da Pecuária Sustentável</a></li>
                    </ul>
                </div>
                
                <div>
                <h1>{props.translation['mar']} / 2017</h1>
                    <ul>
                        <li><a href="http://tassoazevedo.blogspot.com.br/" target="_blank" >O grande disputa. Blog do Tasso Azevedo</a></li><br />
                        <li><a href="https://www.ecodebate.com.br/2017/03/28/atlas-agropecuario-revela-malha-fundiaria-brasil/" target="_blank" >Atlas Agropecuário revela a malha fundiária do Brasil. Eco Debate </a></li><br />
                        <li><a href="https://www.noticiasagricolas.com.br/noticias/meio-ambiente/188814-ongs-expoem-na-internet-todo-o-territorio-nacional-informacoes-tem-dowload-livre.html#.WOfjzWnyu01" target="_blank">ONGs expõem na internet todo o território nacional para o mundo; informações têm donwload livre. Notícias Agrícolas</a></li><br />
                        <li><a href="http://www.funverde.org.br/blog/atlas-agropecuario-revela-a-malha-fundiaria-do-brasil/" target="_blank" >Atlas Agropecuário revela a malha fundiária do Brasil. Funverde</a></li><br />
                        <li><a href="http://imaflora.blogspot.com.br/2017/03/atlas-agropecuario-revela-malha.html" target="_blank" >Atlas Agropecuário revela a malha fundiária do Brasil. Imaflora</a></li><br />
                        <li><a href="http://cbn.globoradio.globo.com/editorias/reporter-cbn/2017/03/19/ATLAS-DA-AGROPECUARIA-REVELA-QUE-10-DO-TERRITORIO-BRASILEIRO-NAO-SAO-PROTEGIDOS.htm" target="_blank" >Atlas da Agropecuária revela que 10% do território brasileiro não são protegidos. CBN</a></li><br />
                        <li><a href="http://www1.folha.uol.com.br/colunas/marceloleite/2017/03/1867657-atlas-revela-que-latifundio-supera-as-areas-protegidas.shtml" target="_blank" >Atlas revela que latifúndio supera as áreas protegidas. Folha de São Paulo</a></li>
                    </ul>
                </div>

                <div>
                <h1>{props.translation['nov']} / 2016</h1>
                    <ul>
                        <li><a href="http://gvces.com.br/contradicoes-da-agricultura-brasileira?locale=pt-br" target="_blank">Contradições da agricultura brasileira. FGV EAESP - Centro de estudos em sustentabilidade</a></li><br />
                        <li><a href="http://midiaeamazonia.andi.org.br/clipping/contradicoes-da-agricultura-brasileira" target="_blank">Contradições da agricultura brasileira. Mídia e Amazônia </a></li><br />
                        <li><a href="http://www.empresaspeloclima.com.br/contradicoes-da-agricultura-brasileira?locale=pt-br" target="_blank">Contradições da agricultura brasileira. EPC - Empresas Pelo Clima</a></li><br />
                        <li><a href="http://www1.folha.uol.com.br/opiniao/2016/11/1834976-contradicoes-da-agricultura-brasileira.shtml" target="_blank">Contradições da agricultura brasileira. Folha de São Paulo</a></li><br />
                        <li><a href="http://imaflora.blogspot.com.br/2016/11/analise-da-agropecuaria-brasileira.html" target="_blank">Análise da agropecuária brasileira convida à reflexão sobre as contradições no campo. Imaflora</a></li>
                    </ul>
                </div>               
                
                <div>
                <h1>{props.translation['may']} / 2016</h1>
                    <ul>
                        <li><a href="https://agrotitan.blog.br/2016/06/08/funcionalidade-da-agropecuaria-brasileira/" target="_blank">Funcionalidade da agropecuária brasileira. Agrotitan</a></li>
                    </ul>
                </div>        
                
                <div>
                <h1>{props.translation['mar']} / 2016</h1>
                    <ul>
                        <li><a href="http://amazonia.org.br/2016/03/agricultura-produz-mais-proteina-e-emite-menos-do-que-pecuaria/" target="_blank" >Agricultura produz mais proteína e emite menos do que pecuária. Amazônia.org</a></li>
                    </ul>
                </div>
                
                <div>
                <h1>{props.translation['feb']} / 2016</h1>
                    <ul>
                        <li><a href="http://www.sepaf.ms.gov.br/ong-cria-moeda-unica-e-mostra-que-agricultura-e-mais-eficiente-que-a-pecuaria-no-pais/" target="_blank">ONG cria 'moeda' única e mostra que agricultura é mais eficiente que a pecuária no país. SEPAF - Secretaria de Estado de Produção e Agricultura Familiar - MT</a></li><br />
                        <li><a href="http://imaflora.blogspot.com.br/2016/02/estudo-do-imaflora-revela-um-novo-olhar.html" target="_blank">Estudo do Imaflora revela um novo olhar sobre a agropecuária brasileira. Imaflora</a></li>                
                    </ul>
                </div>
                
                <div>
                <h1>{props.translation['jan']} / 2016</h1>
                    <ul>
                        <li><a href="http://www1.folha.uol.com.br/ambiente/2016/01/1735327-ong-cria-moeda-unica-e-mostra-que-agricultura-e-mais-eficiente-que-a-pecuaria-no-pais.shtml" target="_blank">ONG cria 'moeda' única e mostra que agricultura é mais eficiente que a pecuária no país. Folha de São Paulo</a></li>
                    </ul>
                </div>

            </div>
            <br />
        </MyModal>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        translation: state.translation
    }
}


export default connect(mapStateToProps)(News);